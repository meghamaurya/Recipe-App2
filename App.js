<<<<<<< HEAD
import Page2 from './Components/Page2/Page2';
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PageOne from './Components/Page1/PageOne';
>>>>>>> megha

export default function App({navigation}) {
  return (
<<<<<<< HEAD
    <Page2  />
  );
}
=======
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
>>>>>>> megha
