import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/home/index';
import { ChamadoScreen } from './src/screens/chamado/index';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{
          title: '',
          headerTintColor: 'black',
          headerBackTitle: 'voltar',
          headerStyle: {
            backgroundColor: 'white',
            fontWeight: 'bold'
          },
        }} name="Chamado" component={ChamadoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
