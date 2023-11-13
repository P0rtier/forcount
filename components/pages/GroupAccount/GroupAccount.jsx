import {ScrollView, StyleSheet, View} from "react-native";
import {Button, Chip, IconButton, Text, TextInput, Tooltip, useTheme} from "react-native-paper";
import {useState} from "react";
import ExpenseCard from "../../shared/ExpenseCard";

export default function GroupAccount(){

    const theme = useTheme();

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
        <>
            <View style={GroupFormStyles.header}>
                <Text variant="titleLarge">Group Expenses</Text>
                <IconButton icon="plus" mode='contained'
                            containerColor={theme.colors.primary} iconColor={theme.colors.surface}/>
            </View>
            <ScrollView style={GroupFormStyles.scrollView}>
                <View style={GroupFormStyles.container}>
                      {mockedExpenses.map((item, index) =>
                           <ExpenseCard key={index} expanseInfo={item} ></ExpenseCard>
                       )}
                </View>
            </ScrollView>
        </>
    )
}

const GroupFormStyles = StyleSheet.create({
    container: {
        gap: 12,
        height: '100%',
    },
    scrollView: {
        height: '100%',
        padding: 16,
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

})