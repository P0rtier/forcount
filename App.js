import {AppRegistry} from 'react-native';
import {DefaultTheme, PaperProvider} from "react-native-paper";
import Home, { options } from "./components/pages/Home/Home";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GroupForm from "./components/pages/Home/GroupForm/GroupForm";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={GroupForm} options={options}/>
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('forcount', () => App);