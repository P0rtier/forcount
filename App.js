import {AppRegistry} from 'react-native';
import {DefaultTheme, PaperProvider} from "react-native-paper";
import Home, {homeOptions} from "./components/pages/Home/Home";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GroupForm from "./components/pages/Home/GroupForm/GroupForm";
import GroupAccount from "./components/pages/GroupAccount/GroupAccount";
import GroupExpense from "./components/pages/GroupExpense/GroupExpense";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <PaperProvider theme={DefaultTheme}>
                <Stack.Navigator>
                    <Stack.Screen name="New group expense" component={GroupExpense}/>
                    <Stack.Screen name="Group account" component={GroupAccount}/>
                    <Stack.Screen name="Home" component={Home} options={homeOptions}/>
                    <Stack.Screen name="New Group" component={GroupForm}/>
                </Stack.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}

AppRegistry.registerComponent('forcount', () => App);