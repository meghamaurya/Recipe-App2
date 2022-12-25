import { View } from "react-native";
import { Text } from "react-native-web";
import { s } from "react-native-wind";
const Page1 = () => {
  return (
    <View>
      <Text style={s`text-gray-800 font-bold p-3 text-4xl`}>
        Make your own food, stay at <span style={s`text-yellow-400`}>home</span>
      </Text>
    </View>
  );
};
export default Page1;
