import { StyleSheet } from "react-native";

const oneObjectiveStyles = StyleSheet.create({
    container: {
        width: "100%",
        alignSelf: "center",
        backgroundColor: "#e6e6ff",
    },


    photoEdit: {
        alignSelf: "center",
        borderRadius: 50,
        height: 300,
        width: 300,
        resizeMode: "cover",
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

        borderRadius: 30,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

    confirmLocEdit: {
        alignSelf: "center",
        justifyContent: "center",
        width: "90%",
        height: 70,
        backgroundColor: "#46994e",

        borderRadius: 30,


    },
})

export {oneObjectiveStyles}