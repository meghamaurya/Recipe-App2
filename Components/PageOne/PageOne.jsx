import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ActivityIndicator } from "react-native";
import { s } from "react-native-wind";
import IconsBar from "./IconsBar";
import Page1 from "./Page1";
import SearchBar from "./searchBar";
const PageOne = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();
  const [iconClick, setIconClick] = useState("pasta");

  const iconBar = [{ iconName: "fire", title: "Popular" }];
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=eb2ea6696b854da6b5b2b49c06ee3e22&query=${iconClick}&diet=vegetarian&addRecipeInformation=true`
      );
      const data = await response.json();
      setFakeData(data);
    };
    getData();
  }, [iconClick]);
  useEffect(() => {
    console.log("fakeData", fakeData);
  }, [fakeData]);

  useEffect(() => {
    console.log("iconClick", iconClick);
  }, [iconClick]);
  return (
    <SafeAreaView style={s`m-3`}>
      <Page1 />
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <View style={s`flex flex-row w-full`}>
        {iconBar.map((icons) => {
          return (
            <IconsBar
              iconName={icons.iconName}
              title={icons.title}
              setIconClick={setIconClick}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default PageOne;
