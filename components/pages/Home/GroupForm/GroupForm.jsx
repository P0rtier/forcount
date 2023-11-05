import {Modal, StyleSheet, View} from "react-native";
import {Button, IconButton, TextInput, List, Chip, Text, Portal} from "react-native-paper";
import {useState} from "react";

export default function GroupForm() {
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState([]);
  const [visible, setVisible] = useState(false);
  const [newMember, setNewMember] = useState("");

  //ToDo Mocked members
  const array = [
      "Patryk",
      "Kacper",
      "Piotrek",
      "Darek"
  ];

  const closeModal = () => {
    setVisible(false);
    setNewMember("");
  }

  return (
    <View style={GroupFormStyles.mainContainer}>
      <View style={GroupFormStyles.verticalContainer}>
        {/*TODO add image picker*/}
        <TextInput
          label="Group Name"
          value={groupName}
          onChangeText={val => setGroupName(val)}
        />
      </View>
      <View>
        <View style={GroupFormStyles.membersHeader}>
          <Text variant="titleMedium">Members</Text>
          <IconButton icon="plus" onPress={() => {setVisible(true)}}/>
        </View>
        <View style={GroupFormStyles.membersList}>
            {array.map((item, index) =>
                <Chip style={GroupFormStyles.chipStyle} icon="circle" onPress={() => console.log('Pressed')}>{item}</Chip>
            )}
        </View>
      </View>
      <Portal>
        <Modal visible={visible} onDismiss={closeModal} style={GroupFormStyles.modalStyle}>
          <Text variant="titleLarge">Add new group member</Text>
          <TextInput
              label="New member name"
              value={groupName}
              onChangeText={val => setGroupName(val)}
          />
        </Modal>
      </Portal>
      <View style={GroupFormStyles.buttonFooter}>
        <Button mode="contained">Save</Button>
      </View>
    </View>
  );
}

const GroupFormStyles = StyleSheet.create({
  mainContainer: {
    width: 400,
    flex: 1,
    padding: 16,
    alignItems: "center",
    gap: 10
  },
  chipStyle: {
    marginTop: 5,
    flex: 1,
    width: "fit-content"
  },
  verticalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  membersList: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#7c4fb0',
  },
  membersHeader: {
    flexDirection: "row",
    alignItems: "center"
  },
  modalStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonFooter: {
    flexDirection:"row",
    width: '100%',
    justifyContent: 'center',
  }
});