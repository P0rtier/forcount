import {IconButton, Appbar, Button, useTheme} from "react-native-paper";
import {ScrollView, StyleSheet, View} from "react-native";
import GroupCard from "../../shared/GroupCard";

const groups = [
    {
        id: 0,
        title: 'Grupa 1',
        date: '10.200.0.48',
        value: '10',
        members: ["Patryk", "Kacper", "Ernest"],
        expenses: [
            {
                title: "Paliwo",
                date: Date.now(),
                payedBy: "Kacper",
                dividedBetween: ["Patryk", "Ernest"],
                price: 125
            }
        ]
    },
    {
        id: 1,
        title: 'Grupa 2',
        date: '10.200.0.48',
        value: '20',
        members: ["Patryk", "Kacper", "Ernest"],
        expenses: [
            {
                title: "Paliwo",
                date: Date.now(),
                payedBy: "Kacper",
                dividedBetween: ["Patryk", "Ernest"],
                price: 125
            }
        ]
    },
    {
        id: 2,
        title: 'Grupa 3',
        date: '10.200.0.48',
        value: '30',
        members: ["Patryk", "Kacper", "Ernest"],
        expenses: [
            {
                title: "Paliwo",
                date: Date.now(),
                payedBy: "Kacper",
                dividedBetween: ["Patryk", "Ernest"],
                price: 125
            }
        ]
    },
    {
        id: 3,
        title: 'Grupa 3',
        date: '10.200.0.48',
        value: '30',
        members: ["Patryk", "Kacper", "Ernest"],
        expenses: [
            {
                title: "Paliwo",
                date: Date.now(),
                payedBy: "Kacper",
                dividedBetween: ["Patryk", "Ernest"],
                price: 125
            }
        ]
    },
    {
        id: 4,
        title: 'Grupa 3',
        date: '10.200.0.48',
        value: '30',
        members: ["Patryk", "Kacper", "Ernest"],
        expenses: [
            {
                title: "Paliwo",
                date: Date.now(),
                payedBy: "Kacper",
                dividedBetween: ["Patryk", "Ernest"],
                price: 125
            }
        ]
    },
    {
        id: 5,
        title: 'Grupa 3',
        date: '10.200.0.48',
        value: '30',
        members: ["Patryk", "Kacper", "Ernest"],
        expenses: [
            {
                title: "Paliwo",
                date: Date.now(),
                payedBy: "Kacper",
                dividedBetween: ["Patryk", "Ernest"],
                price: 125
            }
        ]
    },
    {
        id: 7,
        title: 'Grupa 3',
        date: '10.200.0.48',
        value: '30',
        members: ["Patryk", "Kacper", "Ernest"],
        expenses: [
            {
                title: "Paliwo",
                date: Date.now(),
                payedBy: "Kacper",
                dividedBetween: ["Patryk", "Ernest"],
                price: 125
            }
        ]
    },
    {
        id: 8,
        title: 'Grupa 3',
        date: '10.200.0.48',
        value: '30',
        members: ["Patryk", "Kacper", "Ernest"],
        expenses: [
            {
                title: "Paliwo",
                date: Date.now(),
                payedBy: "Kacper",
                dividedBetween: ["Patryk", "Ernest"],
                price: 125
            }
        ]
    },
    {
        id: 9,
        title: 'Grupa 3',
        date: '10.200.0.48',
        value: '30',
        members: ["Patryk", "Kacper", "Ernest"],
        expenses: [
            {
                title: "Paliwo",
                date: Date.now(),
                payedBy: "Kacper",
                dividedBetween: ["Patryk", "Ernest"],
                price: 125
            }
        ]
    },
]


export default function Home({ navigation }) {
    const theme = useTheme();

    return (
        <View>
            <ScrollView style={HomeStyles.scrollView}>
                <View style={HomeStyles.container}>
                    {groups.map((item, index) => <GroupCard key={index} icon='magnify' title={"Grupa " + index} date={item.date}
                                                            value={item.value} navigation={navigation}></GroupCard>)}
                </View>
            </ScrollView>
            <IconButton icon={'plus'} size={45} style={HomeStyles.bottomRightButton} mode="contained" onPress={() => navigation.navigate('GroupForm')}></IconButton>
        </View>
    )
}

const HomeStyles = StyleSheet.create({
    container: {
        gap: 12,
        height: '100%',
    },
    scrollView: {
        height: '100%',
        padding: 16,
    },
    bottomRightButton: {
        position: 'fixed',
        bottom: 20,
        right: 15,
        zIndex: 1,
    }
});

export const options = {
  headerRight: () => {
    return <IconButton icon="magnify" onPress={() => {console.log("works")}}/>
  }
}
