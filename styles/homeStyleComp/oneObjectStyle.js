import { StyleSheet } from "react-native";

const oneObjectiveStyles = StyleSheet.create({
    container: {
        alignSelf: "center",
    },


    photoEdit: {
        alignSelf: "center",
        borderRadius: 50,
        height: 300,
        width: 300,
        resizeMode: "contain",
    },

    titleText: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 24,
        color: "#00235B",
    },

    locationEdit: {
        alignSelf: "center",
        justifyContent: "center",
        width: "80%",
        height: 50,
        backgroundColor: "#AA77FF",
    },

    confirmLocEdit: {
        alignSelf: "center",
        justifyContent: "center",
        width: "90%",
        height: 70,
        backgroundColor: "green",
    },
})

export {oneObjectiveStyles}