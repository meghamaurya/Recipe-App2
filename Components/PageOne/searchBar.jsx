import React from "react";
import { s } from "react-native-wind";
import { View, TextInput, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
  return (
    <View>
      <View style={s`flex flex-row p-3 rounded-3xl bg-gray-200`}>
        <Feather name="search" size={20} color="black" style={s`ml-2`} />
        <TextInput
          placeholder="Search any recipe"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
      </View>
    </View>
  );
};

export default SearchBar;
