import {StyleSheet, View} from "react-native";
import {Button, Chip, HelperText, IconButton, Snackbar, Text, TextInput} from "react-native-paper";
import {useState} from "react";
import {doc, setDoc, Timestamp} from "firebase/firestore";
import {firestore} from "../../../../hooks/useFirebase";

export default function ExpenseForm({route, navigation}) {

    const groupElement = route.params.group;

    const [formError, setFormError] = useState(false);
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
    }

    const hasExpenseValueError = () => {
        return expenseValue !== "" && isNaN(Number(expenseValue));
    }

    const hasExpenseAuthorError = () => {
        return expenseAuthor !== "" && !groupElement.members.find(member => member === expenseAuthor)
    }

    const saveNewExpense = async () =>{
        if(expenseTitle === "" || expenseValue === "" || isNaN(Number(expenseValue))) {
            setFormError(true);
            return;
        }
        if(!groupElement.members.find(member => member === expenseAuthor)){
            setFormError(true);
            return;
        }
        const expenseItem = {
            title: expenseTitle,
            date: Timestamp.fromMillis(Date.now()),
            payedBy: expenseAuthor,
            dividedBetween: expenseMembers,
            price: Number(expenseValue)
        }
        groupElement.expenses.push(expenseItem);
        groupElement.value += expenseItem.price;
        await setDoc(doc(firestore, "groups", groupElement.id), groupElement);
        navigation.navigate("Expenses screen", {groupElement});
    }

    return (
        <View style={{height: "100%"}}>
            <View style={GroupExpenseStyles.mainContainer}>
                <IconButton
                    icon="cash"
                    size={70}
                />
                <TextInput
                    style={GroupExpenseStyles.input}
                    label="Title"
                    maxLength={50}
                    value={expenseTitle}
                    onChangeText={val => setExpenseTitle(val)}
                />
                <TextInput
                    style={GroupExpenseStyles.input}
                    label="Value"
                    maxLength={50}
                    value={expenseValue}
                    onChangeText={val => setExpenseValue(val)}
                />
                {hasExpenseValueError() && <HelperText type="error" visible={true}>
                    Provided value is not a valid number!
                </HelperText>}
                <TextInput
                    style={GroupExpenseStyles.input}
                    label="Payer"
                    maxLength={50}
                    value={expenseAuthor}
                    onChangeText={val => setExpenseAuthor(val)}
                />
                {hasExpenseAuthorError() && <HelperText type="error" visible={true}>
                    There is no such member in specified group!
                </HelperText>}
                <Text variant="titleLarge">Choose expense members</Text>
                <View style={GroupExpenseStyles.groupMembersList}>
                    {groupElement.members.map((item, index) =>
                        <Chip key={index}
                              style={GroupExpenseStyles.chipStyle}
                              selected={expenseMembers.includes(item)}
                              showSelectedCheck={true}
                              showSelectedOver={true}
                              onPress={() => toggleExpenseMember(item)}>{item}</Chip>
                    )}
                </View>
                <View style={GroupExpenseStyles.buttonFooter}>
                    <Button mode="contained" onPress={saveNewExpense}>Save</Button>
                </View>
            </View>
            <Snackbar
                icon="alert-circle"
                visible={formError}
                onDismiss={() => {setFormError(false)}}
                action={{
                    label: 'Close',
                    onPress: () => {setFormError(false)
                    }}
                }>
                Provide all required information!
            </Snackbar>
        </View>
    )

}

const GroupExpenseStyles = StyleSheet.create({
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