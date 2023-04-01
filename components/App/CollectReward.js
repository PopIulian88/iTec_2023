import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import {useState} from 'react'
import * as ImagePicker from"expo-image-picker"
import {styles} from "../../styles/homeStyleComp/collectRewardStyle"
import {
    firebase,
    addPhotoToDB,
    getUser,
    auth
} from "../../firebase"

import GeolocationFnc from '../helpers/Functii/GeolocationFnc'
import Spacer from '../helpers/Spacer'
    
export default function CollectReward({route}){

    const [image, setImage] = useState(null)
    const [userID, setUserID] = useState("")

    const [getting,setGetting] = useState(true)
    if(getting){
        getUser(auth.currentUser?.email).then(res=>{
            setUserID(res.id)
        })
        setGetting(false)
    }
    console.log(userID)

    //functii de incarcare poze

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        const source = {uri:result.assets[0].uri}
        console.log(source)
        setImage(source)
      }
  
    const uploadImage = async () => {
  
        const storage = firebase.storage();
  
        const response = await fetch(image.uri)
  
        const blob = await response.blob()
        
        const filename = image.uri.substring(image.uri.lastIndexOf('/')+1)
  
        const ref = storage.ref().child(filename);
        
        const snapshot = await ref.put(blob);
  
        let url = await ref.getDownloadURL();
        
        addPhotoToDB(userID,url)
        console.log("ok")
        setImage(null)
        
        
      }
  
  return (
    <View style={styles.container}>
        <Spacer height={70}/>
        <GeolocationFnc latOb={route.params.lat} longOb={route.params.long} title={route.params.title} points={route.params.points}/>
        <Spacer height={70}/>

        <View style={styles.conatainerButoane}> 
            <TouchableOpacity style={styles.selectBtn} onPress={pickImage}>
                <Text>Selecteaza imagine</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.uploadBtn} onPress={uploadImage}>
                <Text>Incarca imagine</Text>
            </TouchableOpacity>
        </View>
        <Spacer height={40}/>
        {image!=null?<Image source={{uri:image.uri}} height={300} width={350}/>:<Text></Text>}

        
    </View>
  )
}