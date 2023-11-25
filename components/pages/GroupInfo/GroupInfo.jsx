import {ScrollView} from "react-native";
import GroupInfoCard from "./GroupInfoCard/GroupInfoCard";
import {useState} from "react";

export default function GroupInfo({route}) {
    const [group, setGroup] = useState(route.params.group);

    const constructDate = (date) => {
        return new Date(date.seconds * 1000);
    }
    return (
        <ScrollView style={{padding: 16}}>
            <GroupInfoCard title={group.title} value={group.value} date={constructDate(group.date)} members={group.members} />
        </ScrollView>

    );
}