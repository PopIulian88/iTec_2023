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
        padding: 10,

        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    photoEdit: {
        height: "80%",
        width: 130,
        padding:15,
        resizeMode: "contain",
        borderRadius:20
    }
})

export {objectiveStyles}