import React, { useEffect } from "react";
import { s } from "react-native-wind";
import { View, TextInput, Keyboard } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./Styles";
import { useFonts, KumbhSans_500Medium } from "@expo-google-fonts/kumbh-sans";

const SearchBar = ({ search, searchPhrase, setSearchPhrase }) => {
  useEffect(() => {
    // console.log("search", searchPhrase);
  }, [searchPhrase]);

  let [fontsLoaded] = useFonts({
    KumbhSans_500Medium,
  });
    return (
      <View
        style={s`flex flex-row justify-between p-3 mx-2 my-3 rounded-3xl bg-primary`}
      >
        <View
          style={s`flex flex-row justify-between w-full box-border my-1 rounded-3xl bg-primary`}
        >
          <TextInput
            style={[
              s`ml-2 w-full outline-none text-lg`,
              styles.font500,
              styles.input,
            ]}
            placeholder="Search any recipe"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
          />
          <Feather
            name="search"
            size={22}
            color="black"
            style={s`pr-2 pt-1`}
            onPress={search}
          />
        </View>
      </View>
    );
};

export default SearchBar;
