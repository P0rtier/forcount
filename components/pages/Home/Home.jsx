import {IconButton} from "react-native-paper";
import {ScrollView, StyleSheet, View} from "react-native";
import GroupCard from "../../shared/GroupCard";
import {useFirestore} from "../../../hooks/useFirebase";
import {useCallback, useState} from "react";
import {useFocusEffect} from '@react-navigation/native';

export default function Home({navigation}) {
    const [groups, setGroups] = useState([]);
    const {refresh} = useFirestore('groups')

    useFocusEffect(
        useCallback(() => {
            refresh().then((value) => setGroups(value));
        }, [])
    );

    return (
        <View>
            <ScrollView style={HomeStyles.scrollView}>
                <View style={HomeStyles.container}>
                    {groups.map((item, index) => <GroupCard key={index} icon='magnify' item={item}
                                                               navigation={navigation}></GroupCard>)}
                </View>
            </ScrollView>
            <IconButton icon={'plus'} size={45} style={HomeStyles.bottomRightButton} mode="contained"
                        onPress={() => navigation.navigate('New group')}></IconButton>
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
        return <IconButton icon="magnify" onPress={() => {
            console.log("works")
        }}/>
    }
}
