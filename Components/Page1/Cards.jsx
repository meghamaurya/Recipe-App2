import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ActivityIndicator,
} from "react-native";
import { s } from "react-native-wind";
import {
  useFonts,
  KumbhSans_500Medium,
  KumbhSans_700Bold,
} from "@expo-google-fonts/kumbh-sans";
import styles from "./styles";

const Cards = (props, { navigation }) => {
  const details = props.data;
  console.log(details, "cards");
  let [fontsLoaded] = useFonts({
    KumbhSans_500Medium,
    KumbhSans_700Bold,
  });
  const handleCards = () => {
    console.log("clicked");
  };
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
        {props.loading ? (
          <ActivityIndicator size="large" color="#eab32d" style={s`my-10`} />
        ) : (
          <>
            <View style={s`flex-1 flex-row w-full flex-wrap justify-around`}>
              {props.error ? (
                <>
                  <Text style={s`my-10 font-semibold text-2xl text-rose-500`}>
                    Oops, Recipe not available
                  </Text>
                </>
              ) : (
                <>
                  {props.data.map((item) => (
                    <TouchableHighlight
                      key={item.id}
                      style={s`m-3`}
                      underlayColor={"transparent"}
                      // onPress={() => {
                      //   navigation.navigate("Details", {
                      //     itemId: item.id,
                      //   }
                      //   );
                      // }}
                    >
                      <View style={s`flex-1 flex-cols w-40  flex-wrap `}>
                        <Image
                          source={item.image}
                          style={s`w-full h-48 resize-cover rounded-3xl`}
                        />
                        <Text style={[s`text-lg`, styles.font600]}>
                          {item.title}
                        </Text>
                        <Text
                          style={[
                            s`absolute top-4 right-2 text-white rounded-lg px-1 py-0.25`,
                            styles.time,
                          ]}
                        >
                          {item.readyInMinutes} min
                        </Text>
                      </View>
                    </TouchableHighlight>
                  ))}
                </>
              )}
            </View>
          </>
        )}
      </View>
    );
  }
};

export default Cards;
