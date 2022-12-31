import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ActivityIndicator } from "react-native";
import { s } from "react-native-wind";
import IconsBar from "./IconsBar";
import Title from "./Heading";
import SearchBar from "./SearchBar";
import { GiHotMeal, GiButterToast, GiFrenchFries } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import Cards from "./Cards";

const PageOne = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState([]);
  const [iconClick, setIconClick] = useState("meal");

  const icons = [
    { id: 1, iconName: GiButterToast, title: "Breakfast" },
    { id: 2, iconName: GiHotMeal, title: "Meal" },
    { id: 3, iconName: IoFastFoodSharp, title: "Fast Food" },
    { id: 4, iconName: GiFrenchFries, title: "Snack" },
    { id: 5, iconName: FaIceCream, title: "Dessert" },
  ];
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=eb2ea6696b854da6b5b2b49c06ee3e22&query=${iconClick}&type=${iconClick}&diet=vegetarian&addRecipeInformation=true`
      );
      const data = await response.json();
      setFakeData(data.results);
    };
    getData();
  }, [iconClick]);

  useEffect(() => {
    console.log("fakeData", fakeData);
  }, [fakeData]);

  useEffect(() => {
    console.log("iconClick", iconClick);
  }, [iconClick]);

  const search = () => {
    if (searchPhrase !== "") {
      setIconClick(searchPhrase);
    }
  };
  return (
    <SafeAreaView style={s`m-0 w-full box-border`}>
      <Title />
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
        search={search}
      />
      <View style={s`flex flex-row w-full`}>
        {icons.map((icons) => {
          return (
            <IconsBar
              key={icons.id}
              iconName={icons.iconName}
              title={icons.title}
              setIconClick={setIconClick}
            />
          );
        })}
      </View>
      <Cards data={fakeData} />
    </SafeAreaView>
  );
};

export default PageOne;
