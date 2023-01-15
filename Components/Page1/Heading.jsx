import { View, Text } from "react-native";
import { s } from "react-native-wind";
import styles from "./Styles";
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
        <Text style={[s`text-darkGray py-5 p-3 text-4xl`, styles.font700]}>
          Make your own food, stay at <span style={s`text-primary`}>home</span>
        </Text>
      </View>
    );
  }
};
export default Page1;
