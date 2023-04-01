import { StyleSheet } from "react-native";

const objectiveStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#e6e6ff",

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

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 5,
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