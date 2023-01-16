import "../../wind.config";
import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { s } from "react-native-wind";
import IconsBar from "./IconsBar";
import Heading from "./Heading";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import styles from "./Styles";

const PageOne = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState([]);
  const [iconClick, setIconClick] = useState("Meal");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const icons = [
    { id: 1, iconName: "bread-slice", title: "Breakfast", icon: "fontAwesome" },
    { id: 2, iconName: "hotjar", title: "Meal", icon: "fontAwesome" },
    { id: 3, iconName: "fast-food-sharp", title: "Beverage", icon: "Ionicons" },
    {
      id: 4,
      iconName: "french-fries",
      title: "Snack",
      icon: "MaterialCommunityIcons",
    },
    { id: 5, iconName: "icecream", title: "Dessert", icon: "MaterialIcons" },
  ];

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          // /* process.env.REACT_APP_API_KEY */ "abe7b86f391c4e3fb12b5a6b7074be63"
          "eb2ea6696b854da6b5b2b49c06ee3e22"
        }&query=${iconClick}&type=${iconClick}&diet=vegetarian&addRecipeInformation=true`
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
      setSearchPhrase("");
    }
  };
  return (
    <SafeAreaView style={s` w-full box-border bg-white`}>
      <ScrollView style={styles.scroll}>
        <Heading />
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
                icon={icons.icon}
              />
            );
          })}
        </View>
        <Cards
          navigation={navigation}
          data={fakeData}
          iconClick={iconClick}
          error={error}
          loading={loading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PageOne;
