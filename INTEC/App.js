import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import carsListStyle from './assets/styles/carsListStyle';
import CarsList from './assets/Components/CarsList';
import Home from './assets/Components/Home';
import AppNavigator from './assets/Components/Navigator';


export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator/>
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
