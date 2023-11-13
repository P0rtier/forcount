import {ScrollView} from "react-native";
import GroupInfoCard from "./GroupInfoCard/GroupInfoCard";

export default function GroupInfo() {
    return (
        <ScrollView style={{padding: 16}}>
            <GroupInfoCard title='Grupa 1' value={600} date='12.10.12' members={["Mateusz", "Marek", "Marek", "Marek", "Marek", "Marek", "Marek", "Marek"]} />
        </ScrollView>
    );
}