import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import carsListStyle from './assets/styles/carsListStyle';
import CarsList from './assets/Components/CarsList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={carsListStyle.Title}>Cars Factory </Text>
      <CarsList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkred',
    justifyContent: 'center',
  },
});
