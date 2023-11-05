import {Appbar} from "react-native-paper";

export default function Navbar() {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}}/>
      <Appbar.Content title="Forcount"/>
    </Appbar.Header>
  );
}