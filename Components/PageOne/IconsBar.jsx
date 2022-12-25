import React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { s } from "react-native-wind";
import { FontAwesome5 } from "@expo/vector-icons";

const IconsBar = (props) => {
  return (
    <TouchableHighlight
      style={s`my-4 w-20`}
      onPress={() => props.setIconClick(props.title)}
    >
      <View>
        <FontAwesome5 name={props.iconName} size={30} color="black" />
        <Text>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default IconsBar;
