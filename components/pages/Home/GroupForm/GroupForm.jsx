import {StyleSheet, View} from "react-native";
import {Button, IconButton, TextInput, List, Chip, Text} from "react-native-paper";
import {useState} from "react";

export default function GroupForm() {
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState([]);

  return (
    <View style={GroupFormStyles.mainContainer}>
      <View style={GroupFormStyles.verticalContainer}>
        {/*TODO add image picker*/}
        <TextInput
          label="Name"
          placeholder="Group name"
          value={groupName}
          onChangeText={val => setGroupName(val)}
        />
      </View>
      <View>
        <View style={GroupFormStyles.verticalContainer}>
          <Text variant="titleMedium">Members</Text>
          <IconButton icon="plus" onPress={() => {}}/>
        </View>
        {/*array.map((item, index) => <p id={index}>{item.prop}</p>)*/}
        <View>
          <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
        </View>
      </View>
    </View>
  );
}

const GroupFormStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    padding: 16
  },
  verticalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
});