import {Button, Chip, Dialog, Icon, Portal, Text} from "react-native-paper";
import {View} from "react-native";
import {useState} from "react";


export default function ExpenseModal({expanseInfo, visible, closeFunction}) {
    const getTitle = (title) => {
        return <Text variant="titleLarge" style={{fontWeight: 'bold'}}>{title}</Text>
    }

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={() => closeFunction(false)}>
                <Dialog.Title>{getTitle(expanseInfo.title)}</Dialog.Title>
                <Dialog.Content>
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
                </Dialog.Content>
                <Dialog.Content>
                    <Text variant="titleMedium" style={{paddingBottom: 8, fontWeight: "bold"}}>Split between</Text>
                    <View style={{flexWrap: 'wrap', flexDirection: 'row', gap: 8}}>
                        {expanseInfo.dividedBetween.map(
                            (item, index) => <Chip icon="account-circle" key={index} style={{width: 'fit-content'}}>
                                {item}
                            </Chip>
                        )}
                    </View>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button mode="contained" onPress={() => closeFunction(false)} style={{paddingHorizontal: 8, paddingVertical: 4}}>Done</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}
