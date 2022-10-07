import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/home/index';
import { ChamadoScreen } from './src/screens/chamado/index';
import { ChamadosScreen } from './src/screens/chamados/index';


function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}}name="Home" component={HomeScreen} />
        <Stack.Screen name="Chamado" component={ChamadoScreen} />
        <Stack.Screen name="Chamados" component={ChamadosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
