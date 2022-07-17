import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import cedulaListStyle from './assets/styles/cedulaListStyle';
import CarsList from './assets/Components/CarsList';


export default function App() {
  return (
    <View style={styles.container}>
      <CarsList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightslategrey',
    justifyContent: 'center',
  },
});
