import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PageOne from './Components/Page1/PageOne';

export default function App() {
  return (
    <View style={styles.container}>
      <PageOne />
      {/* <Text style={s`text-red-800`}>Starting New Native Projecsft</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
