import {Card, Icon, Text} from "react-native-paper";
import {View} from "react-native";
import {useState} from "react";
import ExpenseModal from "./ExpenseModal";

export default function ExpenseCard({expanseInfo}) {
    const [visible, setVisible] = useState(false);

    const getTitle = (title) => {
        return <Text variant="titleLarge" style={{fontWeight: 'bold'}}>{title}</Text>
    }

    return (
        <Card onPress={() => setVisible(true)} style={{padding: 10}}>
            <Card.Title title={getTitle(expanseInfo.title)}/>
            <Card.Content style={{paddingBottom: 8}}>
                <View style={{gap: 4}}>
                    <View style={{flexDirection: 'row', alignItems: "center", gap: 8}}>
                        <Icon size={19} source='calendar'></Icon>
                        <Text>{new Date(expanseInfo.date).toLocaleDateString()}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: "center", gap: 8}}>
                        <Icon size={20} source='account-circle'></Icon>
                        <Text>{expanseInfo.payedBy}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: "center", gap: 8}}>
                        <Icon size={20} source='cash'></Icon>
                        <Text>{expanseInfo.price} zł</Text>
                    </View>
                </View>
            </Card.Content>
            <ExpenseModal expanseInfo={expanseInfo} visible={visible} closeFunction={() => setVisible(false)}/>
        </Card>
    )
}