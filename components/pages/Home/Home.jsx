import {Button, Card, Text, Appbar} from "react-native-paper";
import {StyleSheet, View} from "react-native";
export default function Home() {
  return(
    <View style={HomeStyles.container}>
      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Title title="Card Title" subtitle="Card Subtitle"/>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});