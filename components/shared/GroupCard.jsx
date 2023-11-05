import {Card, Icon} from "react-native-paper";
import {View} from "react-native";

export default function GroupCard({title, date, icon, price}) {
  return(
    <Card style={{flex: 1, flexDirection: 'row', marginBottom: 12}} >
      <Icon source={icon} color='#FFFFFF' size={16}></Icon>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Card.Title title={title}></Card.Title>
        <Card.Content>{date}</Card.Content>
      </View>
      <Card.Content>{price}</Card.Content>
    </Card>
  )
}