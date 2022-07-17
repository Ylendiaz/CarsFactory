import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BalanceList from './assets/Components/balanceList';
import CedulaList from './assets/components/cedulaList';
import cedulaListStyle from './assets/styles/cedulaListStyle';

export default function App() {
  return (
    <View style={styles.container}>
      <CedulaList/>
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
