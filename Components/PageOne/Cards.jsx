import React from "react";
import { View, Text, Image } from "react-native";
import { s } from "react-native-wind";
const Cards = (props) => {
  //   const details = props.data;
  //   console.log(details, "cards");
  const details = [
    {
      id: 1,
      time: "20 min",
      title: "soup",
      img: "https://spoonacular.com/recipeImages/650023-312x231.jpg",
    },
    {
      id: 2,
      time: "20 min",
      title: "veggi soup",
      img: "https://spoonacular.com/recipeImages/650023-312x231.jpg",
    },
    {
      id: 3,
      time: "20 min",
      title: "rose soup",
      img: "https://spoonacular.com/recipeImages/650023-312x231.jpg",
    },
  ];
  return (
    <View>
      <Text>Title</Text>
      <View style={s`flex flex-row `}>
        {details.map((item) => (
          <View key={item.id} style={s`m-3`}>
            <Image source={item.img} style={s`w-40 h-40  border rounded-md`} />
            <Text style={s`text-lg`}>{item.title}</Text>
            <Text>{item.time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Cards;
