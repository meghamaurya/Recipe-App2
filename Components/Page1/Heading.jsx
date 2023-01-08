import { View, Text } from "react-native";
import { s } from "react-native-wind";
import styles from "./styles";
import {
  useFonts,
  KumbhSans_400Regular,
  KumbhSans_700Bold,
} from "@expo-google-fonts/kumbh-sans";

const Heading = () => {
  let [fontsLoaded] = useFonts({
    KumbhSans_400Regular,
    KumbhSans_700Bold,
  });

    return (
      <View>
        <Text style={[s`text-darkGray py-5 p-3 text-4xl`, styles.font700]}>
          Make your own food, stay at <Text style={s`text-primary`}>home</Text>
        </Text>
      </View>
    );
};
export default Heading;
