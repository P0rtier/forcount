import {ScrollView, StyleSheet, View} from "react-native";
import {IconButton} from "react-native-paper";
import ExpenseCard from "../../shared/ExpenseCard";
import {useState} from "react";


export default function GroupExpenses({route, navigation}){
    const [group, setGroup] = useState(route.params.group);

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
                </View>
                <View style={{
                    gap: 12,
                    height: '100%',
                }}>
                      {group.expenses.map((item, index) =>
                           <ExpenseCard key={index} expanseInfo={item} ></ExpenseCard>
                       )}
                </View>
            </ScrollView>
            <IconButton icon={'plus'} size={45} style={GroupAccountStyles.bottomRightButton} mode="contained" onPress={() => navigation.navigate('New group expense', {group})}></IconButton>
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