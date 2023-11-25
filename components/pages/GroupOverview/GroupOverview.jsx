import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GroupBalance from "../GroupBalance/GroupBalance";
import GroupExpenses from "../GroupExpenses/GroupExpenses";
import GroupInfo from "../GroupInfo/GroupInfo";

export default function GroupOverview({ route }) {
    const group = route.params.item;
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
                initialParams={{ group }}
                options={{ tabBarLabel: 'Info' }}
            />
            <Tab.Screen
                name="Expenses screen"
                component={GroupExpenses}
                options={{ tabBarLabel: 'Expenses' }}
                initialParams={{ group }}
            />
            <Tab.Screen
                name="Balance screen"
                component={GroupBalance}
                options={{ tabBarLabel: 'Balance' }}
                initialParams={{ group }}
            />
        </Tab.Navigator>
    );
}

