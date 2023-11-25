import {StyleSheet, View} from "react-native";
import {Button, Chip, IconButton, Snackbar, TextInput, useTheme} from "react-native-paper";
import {useState} from "react";
import {doc, setDoc, Timestamp} from "firebase/firestore";
import {firestore} from "../../../../hooks/useFirebase";
import {v4 as uuidv4} from 'uuid';

export default function GroupForm({navigation}) {
    const [groupName, setGroupName] = useState("");
    const [members, setMembers] = useState([]);
    const [newMember, setNewMember] = useState("");
    const theme = useTheme();
    const [formError, setFormError] = useState(false);


    const handleAddNewMember = () => {
        if (newMember === "") return;
        if (members.find(member => member.toLowerCase() === newMember.toLowerCase())) return;
        setMembers([...members, newMember]);
        setNewMember("");
    };

    const saveNewGroup = async () => {
        if (groupName === "" || members.length === 0) {
            setFormError(true);
            return;
        }
        let id = uuidv4();
        const docData = {
            id: id,
            title: groupName,
            members: members,
            date: Timestamp.fromMillis(Date.now()),
            expenses: [],
            value: 0
        }
        await setDoc(doc(firestore, "groups", id), docData);
        navigation.goBack();
    };

    const removeFromList = (itemToRemove) => {
        const tempArray = members.filter(item => item !== itemToRemove)
        setMembers(tempArray);
    };

    return (
        <View style={{height: '90vh'}}>
            <View style={GroupFormStyles.mainContainer}>
                <IconButton
                    icon="account-multiple"
                    size={70}
                />
                <TextInput
                    style={GroupFormStyles.input}
                    label="Group Name"
                    maxLength={50}
                    value={groupName}
                    onChangeText={val => setGroupName(val)}
                />
                <View style={GroupFormStyles.inputContainer}>
                    <View style={GroupFormStyles.verticalContainer}>
                        <TextInput
                            style={GroupFormStyles.input}
                            label="New member"
                            maxLength={30}
                            value={newMember}
                            onChangeText={val => setNewMember(val)}
                        />
                        <IconButton icon="plus" mode='contained' onPress={handleAddNewMember}
                                    containerColor={theme.colors.primary} iconColor={theme.colors.surface}/>
                    </View>
                </View>
                <View>
                    <View style={{flexWrap: 'wrap', flexDirection: 'row', gap: 8}}>
                        {members.map((item, index) =>
                            <Chip key={index} style={GroupFormStyles.chipStyle} icon="account"
                                  onClose={() => removeFromList(item)}>{item}</Chip>
                        )}
                    </View>
                </View>
                <View style={GroupFormStyles.buttonFooter}>
                    <Button mode="contained" onPress={saveNewGroup}>Save</Button>
                </View>
            </View>
            <Snackbar
                icon="alert-circle"
                visible={formError}
                onDismiss={() => {
                    setFormError(false)
                }}
                action={{
                    label: 'Close',
                    onPress: () => {
                        setFormError(false)
                    }
                }
                }>
                Provide group name and members!
            </Snackbar>
        </View>
    );
}

const GroupFormStyles = StyleSheet.create({
    mainContainer: {
        width: '95vw',
        height: '90%',
        flex: 1,
        padding: 16,
        alignItems: "flex-start",
        alignSelf: "center",
        gap: 10

    },
    chipStyle: {
        marginTop: 5,
        width: "fit-content"
    },
    verticalContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    membersList: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        gap: 10,
        flexWrap: "wrap",
        overflow: "auto",
    },
    membersHeader: {
        flexDirection: "row",
        alignItems: "center"
    },
    modalStyle: {
        padding: 20,
        width: 200,
        height: 400
    },
    input: {
        width: '100%',
    },
    buttonFooter: {
        paddingTop: 10,
        gap: 10,
        flexDirection: "row-reverse",
        width: '100%'
    },
    inputContainer: {
        gap: 12,
        width: 'max',
    }
});