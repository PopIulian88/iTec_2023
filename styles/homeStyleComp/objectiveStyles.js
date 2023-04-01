import { StyleSheet } from "react-native";

const objectiveStyles = StyleSheet.create({
    container: {
        alignItems: "center",
    },

    objectiveComponent: {
        height: 130,
        width: "90%",
        borderRadius: 30,
        backgroundColor: "#AA77FF",
        padding: 5,

        flexDirection:"row",
        alignItems: "center",
        justifyContent: "flex-start",
    },

    photoEdit: {
        height: "80%",
        width: 80,
        resizeMode: "contain",
    }
})

export {objectiveStyles}