import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
        width:"100%",
        backgroundColor:"#e6e6ff"
    },
    card:{
        width:"90%",
        height:200,
        alignItems:"center",
        justifyContent:"center",
        borderEndWidth:2,
        borderBottomWidth:2,
        borderStartWidth:2,
        borderTopWidth:2,
        borderBottomColor:"gray",
        borderEndColor:"gray",
        borderStartColor:"gray",
        borderTopColor:"gray",
        borderRadius:10
    },
    checkinBtn:{
        height:50,
        width:120,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },
    containerBtnImg:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"50%",
        

    },
    uploadBtn:{
        backgroundColor:"gray",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        borderEndWidth:2,
        borderBottomWidth:2,
    }
})

export {styles}