import {AppRegistry, StyleSheet} from 'react-native';
import {Appbar, DefaultTheme, PaperProvider} from "react-native-paper";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/shared/core/Navbar";


export default function App() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <Navbar/>
      <Home/>
    </PaperProvider>
  );
}

AppRegistry.registerComponent('forcount', () => App);