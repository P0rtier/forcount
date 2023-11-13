import {ScrollView, StyleSheet, View} from "react-native";
import {IconButton, Text} from "react-native-paper";
import ExpenseCard from "../../shared/ExpenseCard";

export default function GroupAccount({navigation}){
    const mockedExpenses = [
        {
            title: "Paliwo",
            date: Date.now(),
            payedBy: "Kacper",
            dividedBetween: ["Patryk", "Ernest", "Marcin", "Daniel", "Tomek"],
            price: 125
        },
        {
            title: "Paliwo",
            date: Date.now(),
            payedBy: "Kacper",
            dividedBetween: ["Patryk", "Ernest"],
            price: 125
        },
        {
            title: "Paliwo",
            date: Date.now(),
            payedBy: "Kacper",
            dividedBetween: ["Patryk", "Ernest"],
            price: 125
        },
        {
            title: "Paliwo",
            date: Date.now(),
            payedBy: "Kacper",
            dividedBetween: ["Patryk", "Ernest"],
            price: 125
        }
    ]

    return (
        <View style={{height: '100%'}}>
            <ScrollView style={{
                height: '100%',
                padding: 16,
            }}>
                <View style={{
                    paddingHorizontal: 16,
                    paddingTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text variant="titleLarge" style={{paddingBottom: 16}}>Group Expenses</Text>
                </View>
                <View style={{
                    gap: 12,
                    height: '100%',
                }}>
                      {mockedExpenses.map((item, index) =>
                           <ExpenseCard key={index} expanseInfo={item} ></ExpenseCard>
                       )}
                </View>
            </ScrollView>
            <IconButton icon={'plus'} size={45} style={GroupAccountStyles.bottomRightButton} mode="contained" onPress={() => navigation.navigate('New group expense')}></IconButton>
        </View>
    )
}

const GroupAccountStyles = StyleSheet.create({
    bottomRightButton: {
        position: 'absolute',
        bottom: 20,
        right: 15,
        zIndex: 1,
    }
});