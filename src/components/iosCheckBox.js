import React from "react"
import {View,TouchableOpacity} from "react-native"
import { EvilIcons,AntDesign } from "react-native-vector-icons";
const IosCheckBox = ({value, onValueChange})=>{
    return(
     value ?
     <TouchableOpacity
     onPress={()=>{onValueChange(!value)}}
     style={{
         backgroundColor:"green",
         width:20,
         height:20,
         borderColor:"green",
         borderWidth:2,
         alignItems:"center",
         justifyContent:"center",
         margin: 10
     }}
     >
         <View style={{position:"absolute", top: 1,left:-1}}>
         <AntDesign name="check" size={16} color="white"/>
         </View>
     </TouchableOpacity>
     :

     <TouchableOpacity
     onPress={()=>{onValueChange(!value)}}
     style={{
         backgroundColor:"transparent",
         width:20,
         height:20,
         borderColor:"white",
         borderWidth:2,
         alignItems:"center",
         justifyContent:"center",
         margin: 10
     }}
     >
         <View style={{position:"absolute", top: 1,left:-1}}>
         <AntDesign name="check" size={16} color="transparent"/>
         </View>
     </TouchableOpacity>
    )
}

export default IosCheckBox