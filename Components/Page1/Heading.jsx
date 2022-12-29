import { View, Text } from "react-native";
import { s } from "react-native-wind";
import styles from "./styles";
import {
  useFonts,
  KumbhSans_400Regular,
  KumbhSans_700Bold,
} from "@expo-google-fonts/kumbh-sans";

const Page1 = () => {
  let [fontsLoaded] = useFonts({
    KumbhSans_400Regular,
    KumbhSans_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View>
        <Text style={[s`text-gray-800  py-5 p-3 text-4xl`, styles.font700]}>
          Make your own food, stay at{" "}
          <span style={s`text-yellow-400`}>home</span>
        </Text>
      </View>
    );
  }
};
export default Page1;
