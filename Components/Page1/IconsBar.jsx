import React, { useState } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { s } from "react-native-wind";
import styles from "./styles";
import { useFonts, KumbhSans_600SemiBold } from "@expo-google-fonts/kumbh-sans";

const IconsBar = (props) => {
  let [fontsLoaded] = useFonts({
    KumbhSans_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  } else {
    const handlePress = () => {
      props.setIconClick(props.title);
    };
    return (
      <TouchableHighlight
        underlayColor={"yellow"}
        style={s`my-4 py-3 mx-1.5 px-0.25 justify-evenly rounded-3xl`}
        onPress={handlePress}
      >
        <View style={s`items-center text-gray-800`}>
          <props.iconName style={s`text-5xl`} />
          <Text style={[s`items-center text-md my-1 `, styles.font600]}>
            {props.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
};

export default IconsBar;
