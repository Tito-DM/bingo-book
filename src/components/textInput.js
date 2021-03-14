import React from "react"
import {View, TextInput} from "react-native"

import { AntDesign } from "react-native-vector-icons";

const TextInputComponent = ({color_,left_,top_,width_})=>{
    return(
        <>
        <TextInput
        placeholder="Search"
        underlineColorAndroid="transparent"
        style={{
          width: width_,
          height: 40,
          borderWidth: 1,
          borderColor: color_,
          borderRadius: 10,
          backgroundColor: "white",
          padding: 10,
          marginBottom: 10,
          paddingLeft: 35
        }}
      />
        <View style ={{position:"absolute", left:left_,top: top_}}>
      <AntDesign name="search1" size={20} color={color_}  />
      </View>
      </>
    )
}

export default TextInputComponent