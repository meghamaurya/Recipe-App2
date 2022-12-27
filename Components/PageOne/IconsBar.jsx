import React, { useState } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { s } from "react-native-wind";
const IconsBar = (props) => {
  const [bgChange, setBgChange] = useState(false);
  const handlePress = () => {
    props.setIconClick(props.title);
    setBgChange(true);
  };
  return (
    <TouchableHighlight
      underlayColor={"black"}
      style={s`my-4 w-20 `}
      onPress={handlePress}
    >
      <View
        style={s`items-center bg-violet hover:bg-violet-600 active:bg-violet-300 focus:outline-none focus:ring focus:ring-violet-300`}
      >
        <props.iconName size={32} />
        <Text style={s`items-center `}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default IconsBar;
