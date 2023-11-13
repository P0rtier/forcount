import {StyleSheet, View} from "react-native";
import {Button, Chip, IconButton, Text, TextInput} from "react-native-paper";
import {useState} from "react";
export default function GroupExpanse(){

    const groupElement = {
        id: 0,
        title: 'Grupa 1',
        date: '10.200.0.48',
        value: '10',
        members: ["Patryk", "Kacper", "Ernest", "Damian", "Marcin", "Daniel", "Tomek"],
        expenses: [
            {
                title: "Paliwo",
                date: Date.now(),
                payedBy: "Kacper",
                dividedBetween: ["Patryk", "Ernest"],
                price: 125
            }
        ]
    }

    const [expenseTitle, setExpenseTitle] = useState("");
    const [expenseValue, setExpenseValue] = useState("");
    const [expenseAuthor, setExpenseAuthor] = useState("");
    const [expenseMembers, setExpenseMembers] = useState([]);

    const toggleExpenseMember = (item) => {
        const isSelected = expenseMembers.includes(item);

        if (isSelected) {
            setExpenseMembers(expenseMembers.filter((member) => member !== item));
        } else {
            setExpenseMembers([...expenseMembers, item]);
        }
        console.log(expenseMembers);
    }

    const saveNewExpense = () =>{
        if(expenseTitle === "" || expenseValue === "" || expenseValue.length === 0) return;
        if(!groupElement.members.find(member => member.toLowerCase() === expenseAuthor.toLowerCase())) return;
        const expenseItem = {
            title: expenseTitle,
            date: Date.now(),
            payedBy: expenseAuthor,
            dividedBetween: expenseMembers,
            price: Number(expenseValue)
        }
        console.log(expenseItem);
        return expenseItem;
    }

    return (
        <View style={GroupFormStyles.mainContainer}>
            <IconButton
                icon="cash"
                size={70}
            />
            <TextInput
                style={GroupFormStyles.input}
                label="Title"
                maxLength={50}
                value={expenseTitle}
                onChangeText={val => setExpenseTitle(val)}
            />
            <TextInput
                style={GroupFormStyles.input}
                label="Value"
                maxLength={50}
                value={expenseValue}
                onChangeText={val => setExpenseValue(val)}
            />
            <TextInput
                style={GroupFormStyles.input}
                label="Payer"
                maxLength={50}
                value={expenseAuthor}
                onChangeText={val => setExpenseAuthor(val)}
            />
            <Text variant="titleLarge">Choose expense members</Text>
            <View style={GroupFormStyles.groupMembersList}>
                {groupElement.members.map((item, index) =>
                    <Chip key={index}
                          style={GroupFormStyles.chipStyle}
                          selected={expenseMembers.includes(item)}
                          showSelectedCheck={true}
                          showSelectedOver={true}
                          onPress={() => toggleExpenseMember(item)}>{item}</Chip>
                )}
            </View>
            <View style={GroupFormStyles.buttonFooter}>
                <Button mode="contained" onPress={saveNewExpense}>Save</Button>
            </View>
        </View>
    )

}

const GroupFormStyles = StyleSheet.create({
    mainContainer: {
        width: '95vw',
        flex: 1,
        padding: 16,
        alignItems: "flex-start",
        alignSelf: "center",
        gap: 10

    },
    input: {
        width: '100%',
    },
    groupMembersList: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        gap: 10,
        flexWrap: "wrap",
        overflow: "auto",
    },
    chipStyle: {
        marginTop: 5,
        width: "fit-content"
    },
    buttonFooter: {
        paddingTop: 10,
        gap: 10,
        flexDirection: "row-reverse",
        width: '100%'
    },
    selectButtons: {
        flexDirection: "column",
    },
})