import {IconButton} from "react-native-paper";
import {ScrollView, StyleSheet} from "react-native";
import GroupCard from "../../shared/GroupCard";
import GroupForm from "./GroupForm/GroupForm";
export default function Home() {
  return(
    <ScrollView style={HomeStyles.container}>
      <GroupForm/>
      <GroupCard icon='magnify' title="Nazwa grupy" date='10.200.0.48' price='10zl'></GroupCard>
    </ScrollView>
  )
}

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});