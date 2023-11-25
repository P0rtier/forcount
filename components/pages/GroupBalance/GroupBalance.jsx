import {FlatList, StyleSheet, View} from "react-native";
import {Card, Icon, Text} from "react-native-paper";
import {useEffect, useState} from "react";

export default function GroupBalance({route}){
    const [group, setGroup] = useState(route.params.group);
    const [balances, setBalances] = useState([]);
    const [paymentInfo, setPaymentInfo] = useState([]);

    useEffect(() => {
        calculateBalances();
    }, []);

    const calculate = () => {
        return paymentInfo.reduce((acc, { payer, payee, amount }) => {
            if (payer === payee) return acc;
            amount = parseFloat(amount);

            const existingTransaction = acc.find(t => t.payer === payer && t.payee === payee);
            const reverseTransaction = acc.find(t => t.payer === payee && t.payee === payer);

            if (existingTransaction) {
                existingTransaction.amount = (parseFloat(existingTransaction.amount) + amount).toFixed(2);
            } else if (reverseTransaction) {
                const newAmount = parseFloat(reverseTransaction.amount) - amount;
                if (newAmount > 0) {
                    reverseTransaction.amount = newAmount.toFixed(2);
                } else if (newAmount < 0) {
                    reverseTransaction.payer = payer;
                    reverseTransaction.payee = payee;
                    reverseTransaction.amount = (-newAmount).toFixed(2);
                } else {
                    const index = acc.indexOf(reverseTransaction);
                    acc.splice(index, 1);
                }
            } else {
                acc.push({ payer, payee, amount: amount.toFixed(2) });
            }

            return acc;
        }, []);
    }

    const calculateBalances = () => {
        const userBalances = {};
        const paymentInformation = [];

        group.members.forEach((member) => {
            userBalances[member] = 0;
        });

        group.expenses.forEach((expense) => {
            const { payedBy, dividedBetween, price } = expense;
            const totalParticipants = dividedBetween.length;

            const share = price / totalParticipants;

            userBalances[payedBy] += price;

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

        setBalances(userBalances);
        setPaymentInfo(paymentInformation);
    };


    return (
        <View style={styles.container}>
            <View style={{gap: 10}}>
                <Text style={styles.title}>Members' statuses</Text>
                <Card>
                    <Card.Content>
                        <FlatList
                            style={styles.list}
                            data={Object.entries(balances)}
                            keyExtractor={(item) => item[0]}
                            renderItem={({ item }) => (
                                <View style={styles.itemContainer}>
                                    <Text>{item[0]}:</Text>
                                    <Text style={item[1] < 0 ? {color: '#ff0000', fontWeight: 'bold'} : {color: '#049e06', fontWeight: 'bold'}}>{item[1].toFixed(2)} zł</Text>
                                </View>
                            )}
                        />
                    </Card.Content>
                </Card>
            </View>

            <View style={{gap: 10}}>
                <Text style={styles.paymentInfoTitle}>Debt logs</Text>
                <Card>
                    <Card.Content>
                        <FlatList
                            style={styles.list}
                            data={calculate()}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.rowContainer}>
                                        <View style={styles.payerContainer}>
                                            <Text>{item.payer}</Text>
                                            <Icon source='arrow-right' size={20}></Icon>
                                            <Text>{item.payee}</Text>
                                        </View>
                                        <Text>{item.amount}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </Card.Content>
                </Card>
            </View>

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
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    balanceAmount: {
        fontWeight: 'bold',
    },
    paymentInfoTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    payerContainer: {
        flexDirection: "row",
        gap: 8,
        alignItems: 'center'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    list: {
        gap: 8,
    }
});