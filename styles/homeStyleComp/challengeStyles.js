import { StyleSheet } from "react-native";

const challangeStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#B0DAFF",
    },

    challangeComponent: {
        backgroundColor: "red",

        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 50,
        height: 130,
        width: "85%",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },

    photo: {
        height: 50,
        width: 50,
        resizeMode: "contain",
    },


})

export {challangeStyles}