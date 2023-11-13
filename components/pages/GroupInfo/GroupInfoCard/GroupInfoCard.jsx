import {Card, Chip, Icon, Text} from "react-native-paper";
import {View} from "react-native";


export default function GroupInfoCard({title, date, members, value}) {
    const getTitle = (title) => {
        return <Text variant="titleLarge" style={{fontWeight: 'bold', paddingBottom: 8}}>{title}</Text>
    }

    return(
        <Card>
            <Card.Title title={getTitle(title)} style={{paddingTop: 12, paddingBottom: 8}}/>
            <Card.Content style={{paddingBottom: 8}}>
                <View style={{gap: 4}}>
                    <View style={{flexDirection: 'row', alignItems: "center", gap: 8}}>
                        <Icon size={19} source='calendar'></Icon>
                        <Text>{new Date(date).toLocaleDateString()}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: "center", gap: 8}}>
                        <Icon size={20} source='cash'></Icon>
                        <Text>{value} zł</Text>
                    </View>
                    <View style={{flexWrap: 'wrap', flexDirection: 'row', gap: 8, paddingVertical: 12}}>
                        {members.map(
                            (item, index) => <Chip key={index} style={{width: 'fit-content'}}>
                                {item}
                            </Chip>
                        )}
                    </View>
                </View>
            </Card.Content>
        </Card>
    )
}