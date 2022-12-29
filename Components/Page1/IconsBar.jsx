import React, { useState } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { s } from "react-native-wind";
import styles from "./styles";
import { useFonts, KumbhSans_400Regular } from "@expo-google-fonts/kumbh-sans";

const IconsBar = (props) => {
  const [bgChange, setBgChange] = useState(false);
  let [fontsLoaded] = useFonts({
    KumbhSans_400Regular,
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
        style={s`my-4 py-3  w-1/5 rounded-3xl`}
        onPress={handlePress}
      >
        <View style={s`items-center`}>
          <props.iconName size={40} />
          <Text style={[s`items-center text-md`, styles.font400]}>
            {props.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
};

export default IconsBar;
