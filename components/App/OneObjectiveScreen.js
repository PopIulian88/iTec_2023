import {View, Text, ScrollView, Image, TextComponent, Linking, TouchableOpacity,Platform} from "react-native";
import {oneObjectiveStyles} from "../../styles/homeStyleComp/oneObjectStyle";
import Spacer from "../helpers/Spacer";
import {Foundation, MaterialIcons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import miniComponentTags from "./homeComponents/miniComponentTags";

export function useLocation(lat,long){
    if(Platform.OS == 'ios'){
        return Linking.openURL('maps://app?daddr='+lat+'+'+long)
    }else{
        return Linking.openURL('google.navigation:q='+lat+'+'+long)
    } 
}

export default function OneObjectiveScreen({route}) {

    const navigator = useNavigation()
    return (
        <ScrollView style={oneObjectiveStyles.container} showsVerticalScrollIndicator={false}>
            <Spacer height={50}/>
            <Image style={oneObjectiveStyles.photoEdit} source={{uri: route.params.photoLink}}/>
            <Text style={oneObjectiveStyles.titleText}>{route.params.nameObj}</Text>

            <View style={{flexDirection: "row"}}>
                {route.params.tags.map(e => {
                    return miniComponentTags(e)
                })}
            </View>

            <Spacer height={20}/>

            {
                route.params.website !== "null" ?
                    <Text style={{alignSelf: "center"}}>Vizualizati website-ul oficial</Text>:<Text></Text>
            }

            {
                route.params.website!=="null" ?
                <Foundation
                    onPress={() => Linking.openURL(route.params.website)}
                    name="web"
                    size={100} 
                    color="#7149C6" 
                    style={{alignSelf: "center"}} 
                />:<Text></Text>
            }

            <TouchableOpacity 
                style={oneObjectiveStyles.locationEdit}
                onPress={() => useLocation(route.params.lat,route.params.long)}
            >
                <Text style={{alignSelf: "center", color: "white"}}>Vezi locatia obiectivului</Text>
            </TouchableOpacity>

            <Spacer height={20}/>

            <Text style={{color: "green", fontWeight: "bold", fontSize: 18}}>   Reward: {route.params.score}</Text>

            <Spacer height={30}/>

            <TouchableOpacity 
                style={oneObjectiveStyles.confirmLocEdit}
                onPress={() => navigator.navigate("CollectRewardScreen")}
            >
                <Text style={{alignSelf: "center", color: "white"}}>Colecteaza recompensa!</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}