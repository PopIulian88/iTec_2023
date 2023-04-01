import {ScrollView, Text, View, Image, RefreshControl, Linking} from 'react-native'
import {useState} from 'react'
import {styles} from "../../styles/homeStyleComp/profileStyles"
import { TouchableOpacity } from 'react-native'
import {useNavigation} from "@react-navigation/core"
import * as ImagePicker from"expo-image-picker"

import {
    signOut,
    auth,
    firebase,
    getUser,
    addPhotoToDB
}from "../../firebase"

import Spacer from '../helpers/Spacer'
import LevelBar from '../helpers/LevelBar'
import {Foundation, MaterialCommunityIcons} from "@expo/vector-icons";
import Auth from "../Auth/Auth";



export default function Profile() {

    const navigation = useNavigation()

    const [username,setUsername] = useState("")
    const [imagesDB, setImagesDB] = useState([])
    const [images, setImages] = useState([])
    const [points , setPoints] = useState(0)
    const [userID, setUserID] = useState("")

    const [getting,setGetting] = useState(true)
    if(getting){
        getUser(auth.currentUser?.email).then(res=>{
            setUsername(res.username)
            setImagesDB(res.photos)
            setPoints(res.points)
            setUserID(res.id)

            imagesDB.map(el=>{
                async () => {let ref = firebase.storage().ref(el)
                let url = await ref.getDownloadURL();
                let aux = images + url
                setImages(aux)
                }
            })
            console.log(res)
        })
        setGetting(false)
    }


    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("** Logged of" )
            //navigation.navigate(Auth)
        })
        .catch(err => alert(err))
    }

  return (
    <View style={styles.container}>
        <Spacer height={40}/>
        <View style={{width: "95%", flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={styles.username}>{username}</Text>
            <MaterialCommunityIcons
                onPress={() => handleSignOut()}
                name="exit-run"
                size={50}
                color="#7149C6"
                style={{alignSelf: "center"}}
            />
        </View>

        <Spacer height={40}/>
        <LevelBar points={points}/>

        <Spacer height={40}/>
        {
            imagesDB!==undefined?
            <ScrollView 
                showsVerticalScrollIndicator={false}
                snapToAlignment='center'
                refreshControl={
                    <RefreshControl onRefresh={
                        ()=>{
                            setGetting(true)
                            if(getting){
                                getUser(auth.currentUser?.email).then(res=>{
                                    setUsername(res.username)
                                    setImagesDB(res.photos)
                                    setPoints(res.points)
                                    setUserID(res.id)
                        
                                    imagesDB.map(el=>{
                                        async () => {let ref = firebase.storage().ref(el)
                                        let url = await ref.getDownloadURL();
                                        let aux =  [url] 
                                        aux = aux + images
                                        setImages(aux)
                                        }
                                    })
                                    console.log(res)
                                })
                                setGetting(false)
                            }
                        }
                    }/>}    
            >
            {
                imagesDB.map(el=>{
                    return(
                        <View>
                            <Image style={{borderRadius: 10}} source={{uri:el}} width={300} height={300}/>
                            <Spacer height={40}/>
                        </View>
                    )
                })
            }
        </ScrollView>:<Text></Text>
        }
    </View>
  )
}