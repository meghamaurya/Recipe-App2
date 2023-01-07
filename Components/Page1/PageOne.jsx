import React, { useState, useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import { s } from "react-native-wind";
import IconsBar from "./IconsBar";
import Title from "./Heading";
import SearchBar from "./SearchBar";
import { GiHotMeal, GiButterToast, GiFrenchFries } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import Cards from "./Cards";

const PageOne = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState([]);
  const [iconClick, setIconClick] = useState("Meal");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const icons = [
    { id: 1, iconName: GiButterToast, title: "Breakfast" },
    { id: 2, iconName: GiHotMeal, title: "Meal" },
    { id: 3, iconName: IoFastFoodSharp, title: "Beverage" },
    { id: 4, iconName: GiFrenchFries, title: "Snack" },
    { id: 5, iconName: FaIceCream, title: "Dessert" },
  ];

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${/* process.env.REACT_APP_API_KEY */'abe7b86f391c4e3fb12b5a6b7074be63'}&query=${iconClick}&type=${iconClick}&diet=vegetarian&addRecipeInformation=true`
      );
      const data = await response.json();
      if (data.results.length === 0) {
        setError(true);
        setLoading(false);
      } else {
        setError(false);
        setFakeData(data.results);
        setLoading(false);
      }
    };
    getData();
  }, [iconClick]);

  const search = () => {
    if (searchPhrase !== "") {
      setIconClick(searchPhrase);
    }
  };
  return (
    <SafeAreaView style={s`m-0 w-full box-border bg-white`}>
      <Title />
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
        search={search}
      />
      <View style={s`flex flex-row justify-evenly items-center`}>
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
      <Cards navigation={navigation}
        data={fakeData}
        iconClick={iconClick}
        error={error}
        loading={loading}
        // navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default PageOne;
