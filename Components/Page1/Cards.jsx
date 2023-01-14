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
import { EvilIcons } from "@expo/vector-icons";

const Cards = (props, { navigation }) => {
  let [fontsLoaded] = useFonts({
    KumbhSans_500Medium,
    KumbhSans_700Bold,
  });
  
    return (
      <View style={s`m-2`}>
        <Text
          style={[s`mx-4 text-3xl text-primary capitalize`, styles.font700]}
        >
          {props.iconClick}
        </Text>
        {props.loading ? 
          <ActivityIndicator size="large" color="#FFD634" style={s`my-10`} />
         :
            <View style={s`flex-1 flex-row w-full flex-wrap justify-around`}>
              {props.error ? 
                  <Text style={s`my-10 font-semibold text-2xl text-primary`}>
                    Oops, Recipe not available
                  </Text>
               : 
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
                      <View style={s`flex-1 flex-cols w-40  flex-wrap `}>
                        <Image
                          source={item.image}
                          style={s`w-full h-48 resize-cover rounded-3xl`}
                        />
                        <Text
                          style={[s`text-lg text-darkGray`, styles.font600]}
                        >
                          {item.title}
                        </Text>
                        <View
                          style={[
                            s`absolute top-4 right-2 text-black rounded-lg px-1 flex flex-row font-bold`,
                            styles.time,
                          ]}
                        >
                          <EvilIcons name="clock" size={22} color="black" />
                          <Text style={s`pt-1 `}>
                            {item.readyInMinutes} min
                          </Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                    )
                  })
              }
            </View>
        }
      </View>
    );
};

export default Cards;
