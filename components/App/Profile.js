import { ScrollView, Text, View,Image,RefreshControl } from 'react-native'
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


    const [image, setImage] = useState(null)
    const [uploading, setUploading] = useState(false)

    //functii de incarcare poze

    // const pickImage = async () => {
    //   let result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    //   });
    //   const source = {uri:result.assets[0].uri}
    //   console.log(source)
    //   setImage(source)
    // }

    // const uploadImage = async () => {

    //   const storage = firebase.storage();

    //   const response = await fetch(image.uri)

    //   const blob = await response.blob()
      
    //   const filename = image.uri.substring(image.uri.lastIndexOf('/')+1)

    //   const ref = storage.ref().child(filename);
      
    //   const snapshot = await ref.put(blob);

    //   let url = await ref.getDownloadURL();

    //   addPhotoToDB(userID,url)
        
    //   setImage(null)
      
      
    // }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("Logged of" )
            navigation.replace("AuthScreen")
        })
        .catch(err => alert(err))
    }
  return (
    <ScrollView 
        contentContainerStyle={styles.container}
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
            }/>
        }
    >
        <Spacer height={40}/>
        <Text style={styles.username}>{username}</Text>

        <Spacer height={40}/>
        <LevelBar points={points}/>
        
        {/* <TouchableOpacity onPress={pickImage}>
            <Text>Selecteaza imagine</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={uploadImage}>
            <Text>Incarca imagine</Text>
        </TouchableOpacity> */}
        <Spacer height={40}/>
        {
            imagesDB!=undefined?       
            <ScrollView 
                showsVerticalScrollIndicator={false}
                snapToAlignment='center'    
            >
            {
                imagesDB.map(el=>{
                    return(
                        <View>
                            <Image source={{uri:el}} width={300} height={300}/>
                            <Spacer height={40}/>
                        </View>
                    )
                })
            }
        </ScrollView>:<Text></Text>
        }
    </ScrollView>
  )
}
