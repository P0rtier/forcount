import {FlatList, StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";
import {useEffect, useState} from "react";

export default function GroupBalance(){

    const group = {
        id: 0,
        title: 'Grupa 1',
        date: '10.200.0.48',
        value: '10',
        members: ['Patryk', 'Kacper', 'Ernest'],
        expenses: [
            {
                title: 'Food',
                date: Date.now(),
                payedBy: 'Kacper',
                dividedBetween: ['Patryk', 'Ernest'],
                price: 125,
            },
            {
                title: 'Asian food',
                date: Date.now(),
                payedBy: 'Patryk',
                dividedBetween: ['Kacper', 'Ernest'],
                price: 125,
            }
        ],
    };

    const [balances, setBalances] = useState([]);
    const [paymentInfo, setPaymentInfo] = useState([]);

    useEffect(() => {
        calculateBalances();
    }, []);

    useEffect(() => {
        calculateBalances();
    }, []);

    const calculateBalances = () => {
        const userBalances = {};
        const paymentInformation = [];

        group.members.forEach((member) => {
            userBalances[member] = 0;
        });

        group.expenses.forEach((expense) => {
            const { payedBy, dividedBetween, price } = expense;
            const totalParticipants = dividedBetween.length + 1;

            const share = price / totalParticipants;

            userBalances[payedBy] += (price - share);

            dividedBetween.forEach((participant) => {
                userBalances[participant] -= share;

                const reverseEntryIndex = paymentInformation.findIndex(
                    (entry) => entry.payer === payedBy && entry.payee === participant && entry.amount === share.toFixed(2)
                );

                if(reverseEntryIndex !== -1){
                    paymentInformation.splice(reverseEntryIndex, 1);
                }else{
                    const paymentDetails = {
                        payer: participant,
                        payee: payedBy,
                        amount: share.toFixed(2),
                    };
                    paymentInformation.push(paymentDetails);
                }
            });
        });

        // Update state with calculated balances and payment information
        setBalances(userBalances);
        setPaymentInfo(paymentInformation);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{group.title} Balances</Text>
            <FlatList
                data={Object.entries(balances)}
                keyExtractor={(item) => item[0]}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text>{item[0]}:</Text>
                        <Text style={item[1] < 0 ? {color: '#ff0000', fontWeight: 'bold'} : {color: '#049e06', fontWeight: 'bold'}}>{item[1].toFixed(2)} zł</Text>
                    </View>
                )}
            />

            <Text style={styles.paymentInfoTitle}>Payment Information</Text>
            <FlatList
                data={paymentInfo}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.paymentInfoContainer}>
                        <Text>
                            {item.payer} owes {item.amount} zł to {item.payee}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    balanceAmount: {
        fontWeight: 'bold',
    },
    paymentInfoTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    paymentInfoContainer: {
        marginBottom: 8,
    },
});