import React from "react";
import { View, TextInput } from "react-native";

import { AntDesign } from "react-native-vector-icons";

const TextInputComponent = ({
  color_,
  left_,
  top_,
  width_,
  padding_,
  marginB_,
  placeHolder_,
  autoFocus_,
  icon_
}) => {
  return (
    <>
      <TextInput
        placeholder={placeHolder_}
        underlineColorAndroid="transparent"
        autoFocus={autoFocus_}
        style={{
          width: width_,
          height: 40,
          borderWidth: 1,
          borderColor: color_,
          borderRadius: 10,
          backgroundColor: "white",
          padding: padding_,
          marginBottom: marginB_,
          paddingLeft: 35,
        }}
      />
      <View style={{ position: "absolute", left: left_, top: top_ }}>
        <AntDesign name={icon_} size={20} color={color_} />
      </View>
    </>
  );
};

export default TextInputComponent;
