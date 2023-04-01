import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
        width:"100%",
        backgroundColor:"#e6e6ff"
    },

    conatainerButoane:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        width:"100%"
    },

    selectBtn:{
        backgroundColor:"#AA77FF",
        borderRadius:20,
        padding:10
    },
    uploadBtn:{
        backgroundColor:"#AA77FF",
        borderRadius:20,
        padding:10
    },
    checkinBtn:{
        backgroundColor:"#8ed982",
        borderRadius:20,
        padding:10
    }
})

export {styles}