import React, { useState } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { s } from "react-native-wind";
import styles from "./styles";
import { useFonts, KumbhSans_500Medium } from "@expo-google-fonts/kumbh-sans";

const IconsBar = (props) => {
  let [fontsLoaded] = useFonts({
    KumbhSans_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  } else {
    const handlePress = () => {
      props.setIconClick(props.title);
      setBgChange(true);
    };
    return (
      <TouchableHighlight
        underlayColor={"yellow"}
        style={s`my-4 py-3 mx-1.5 px-0.25  w-1/6 rounded-3xl`}
        onPress={handlePress}
      >
        <View style={s`items-center`}>
          <props.iconName size={40} style={s`text-gray-800`} />
          <Text
            style={[s`items-center text-md my-1 text-gray-800`, styles.font500]}
          >
            {props.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
};

export default IconsBar;
