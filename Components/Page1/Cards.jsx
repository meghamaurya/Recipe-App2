import React from "react";
import { View, Text, Image } from "react-native";
import { s } from "react-native-wind";
const Cards = (props) => {
  const details = props.data;
  console.log(details, "cards");

  return (
    <View>
      <Text>Title</Text>
      <View style={s`flex-1 flex-row w-full flex-wrap`}>
        {props.data.map((item) => (
          <View key={item.id} style={s`m-3`}>
            <Image
              source={item.image}
              style={s`w-40 h-40  border rounded-md`}
            />
            {/* <Text style={s`text-lg`}>{item.title}</Text> */}
            {/* <Text>{item.time}</Text> */}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Cards;
