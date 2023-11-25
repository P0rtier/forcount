import {AppRegistry} from 'react-native';
import {DefaultTheme, PaperProvider} from "react-native-paper";
import Home from "./components/pages/Home/Home";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GroupForm from "./components/pages/Home/GroupForm/GroupForm";
import GroupExpense from "./components/pages/GroupExpenses/ExpenseForm/ExpenseForm";
import GroupOverview from "./components/pages/GroupOverview/GroupOverview";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider theme={DefaultTheme}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Group overview" component={GroupOverview}/>
                    <Stack.Screen name="New group" component={GroupForm}/>
                    <Stack.Screen name="New group expense" component={GroupExpense}/>
                </Stack.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}

AppRegistry.registerComponent('forcount', () => App);