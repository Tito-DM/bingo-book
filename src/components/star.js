import React from "react";
import { FontAwesome } from "react-native-vector-icons";


const Star = ({filled}) =>{

    return (
        <FontAwesome name = {filled ? "star" : "star-o"} color= "#ffeb3b" size= {20} style= {{marginHorizontal: 6}}/>
    )
}

export default Star