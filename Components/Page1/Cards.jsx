import React from "react";
import { View, Text, Image, TouchableHighlight, ImageBackground } from "react-native";
import { s } from "react-native-wind";
import {
  useFonts,
  KumbhSans_500Medium,
  KumbhSans_700Bold,
} from "@expo-google-fonts/kumbh-sans";
import styles from "./styles";
const Cards = ({data, iconClick, error}) => {
  let [fontsLoaded] = useFonts({
    KumbhSans_500Medium,
    KumbhSans_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={s`m-2`}>
        <Text
          style={[s`mx-4 text-3xl text-yellow-500 capitalize`, styles.font700]}
        >
          {iconClick}
        </Text>
        <View style={s`flex-1 flex-row w-full flex-wrap justify-around`}>
          {error ? (
            <>
              <Text style={s`my-10 font-semibold text-2xl text-rose-500`}>
                Oops, Recipe not available
              </Text>
            </>
          ) : (
            <>
              {data.map((item) => (
                <TouchableHighlight onPress={() => navigation.navigate('Detail')} underlayColor={'transparent'} key={item.id} style={s`m-3  `}>
                  <View style={s`flex-1 flex-cols w-40  flex-wrap `}>
                    <ImageBackground resizeMode="cover"
                      source={item.image}
                      imageStyle={s`rounded-3xl`}
                      style={s`w-full resize-cover`}
                    >
                      <View style={s`w-full h-48`}></View>
                    </ImageBackground>
                    <Text style={[s`text-lg flexShrink-1`, styles.font600]}>
                      {item.title}
                    </Text>
                    <Text>{item.readyInMinutes} min</Text>
                  </View>
                </TouchableHighlight>
              ))}
            </>
          )}
        </View>
      </View>
    );
  }
};

export default Cards;
