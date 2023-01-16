import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { s } from "react-native-wind";
import {
  useFonts,
  KumbhSans_500Medium,
  KumbhSans_700Bold,
} from "@expo-google-fonts/kumbh-sans";
import styles from "./Styles";
import { EvilIcons } from "@expo/vector-icons";

const Cards = (props, { navigation }) => {
  let [fontsLoaded] = useFonts({
    KumbhSans_500Medium,
    KumbhSans_700Bold,
  });

  return (
    <ScrollView>
      <Text style={[s`mx-3 text-3xl text-primary capitalize`, styles.font700]}>
        {props.iconClick}
      </Text>
      {props.loading ? (
        <ActivityIndicator size="large" color="#FFD634" style={s`my-10`} />
      ) : (
        <View style={s`flex-1 flex-row w-full flex-wrap justify-around`}>
          {props.error ? (
            <Text style={s`my-10 font-semibold text-2xl text-primary`}>
              Oops, Recipe not available
            </Text>
          ) : (
            props.data.map((item) => {
              return (
                <TouchableHighlight
                  key={item.id}
                  style={s`m-3`}
                  underlayColor={"transparent"}
                  onPress={() => {
                    props.navigation.navigate("Detail", {
                      itemId: item.id,
                    });
                  }}
                >
                  <View style={s`flex-2 flex-cols w-36 `}>
                    <Image
                      source={{ uri: item.image }}
                      style={s`w-full h-44 resize-cover rounded-3xl`}
                    />
                    <Text style={[s`text-lg text-darkGray`, styles.font600]}>
                      {item.title}
                    </Text>
                    <View
                      style={[
                        s`absolute top-4 right-2 text-black rounded-lg flex flex-row items-center font-bold p-0.25`,
                        styles.time,
                      ]}
                    >
                      <EvilIcons name="clock" size={22} color="black" />
                      <Text style={s`pr-0.25 `}>{item.readyInMinutes} min</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              );
            })
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default Cards;
