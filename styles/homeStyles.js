import { StyleSheet } from "react-native";
import {Entypo, FontAwesome, MaterialIcons} from "@expo/vector-icons";

const homeStyles = StyleSheet.create({
    tabBarOptions: {
        activeTintColor: "white",
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: "#AA77FF",
        inactiveBackgroundColor: '#7149C6',
    },

    challengeOption: {
        headerShown:false,

        tabBarIcon: () => (
            <FontAwesome name="gamepad" size={30} color="#00235B" />
        )
    },

    objectiveption: {
        headerShown:false,

        tabBarIcon: () => (
            <MaterialIcons name="museum" size={30} color="#00235B" />
        )
    },

    profileOption: {
        headerShown:false,

        tabBarIcon: () => (
            <Entypo name="github" size={30} color="#00235B" />
        )
    },
})

export {homeStyles}