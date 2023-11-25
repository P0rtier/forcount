import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GroupBalance from "../GroupBalance/GroupBalance";
import GroupExpenses from "../GroupExpenses/GroupExpenses";
import GroupInfo from "../GroupInfo/GroupInfo";

export default function GroupOverview(){

    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="Expenses screen"
            screenOptions={{
                tabBarActiveTintColor: '#050505',
                tabBarLabelStyle: { fontSize: 12 },
            }}
        >
            <Tab.Screen
                name="Info screen"
                component={GroupInfo}
                options={{ tabBarLabel: 'Info' }}
            />
            <Tab.Screen
                name="Expenses screen"
                component={GroupExpenses}
                options={{ tabBarLabel: 'Expenses' }}
            />
            <Tab.Screen
                name="Balance screen"
                component={GroupBalance}
                options={{ tabBarLabel: 'Balance'}}
            />
        </Tab.Navigator>
    );
}
