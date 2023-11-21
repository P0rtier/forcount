import {Card, Icon, Text, useTheme} from "react-native-paper";
import {View} from "react-native";

export default function GroupCard({item, navigation}) {
    const theme = useTheme();
    const date = new Date(item.date.seconds * 1000);

    function getTitle() {
        return(<View style={{gap: 10, flexDirection:"row", alignItems: 'center'}}>
            <Icon source='account-group' color={theme.colors.primary} size={24}></Icon>
            <Text variant="titleMedium">{item.title}</Text>
        </View>)
    }
  return(
    <Card style={{flex: 1, flexDirection: 'column', paddingVertical: 8}} onPress={() => navigation.navigate("Group overview")}>
        <Card.Title title={getTitle()}></Card.Title>
        <Card.Content style={{flexDirection:"row", gap: 10}}>
            <Icon size={20} source={"calendar"}></Icon>
            {date.getHours() + ":" + date.getMinutes() + ", "+ date.toDateString()}
        </Card.Content>
        <Card.Content style={{flexDirection:"row", gap: 10}}>
            <Icon size={20} source={"cash"}></Icon>
            <>{item.value}zł</>
        </Card.Content>
    </Card>
  )
}