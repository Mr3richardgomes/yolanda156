
import React, { useState } from 'react';

import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChamadosScreen } from '../chamados/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: 300,
    padding: 10
  },
  button: {
    marginTop: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
})


function StackScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>CHAMADO</Text>
      <TextInput
        multiline={true}
        numberOfLines={10}
        style={styles.input}
        placeholder="Descreva sua Solicitação"

      />
      <Pressable style={styles.button} onPress={() => navigation.navigate('Chamado')}>
        <Text style={styles.buttonText}>Abrir Chamado</Text>
      </Pressable>
    </SafeAreaView>
  );
}


const Tab = createBottomTabNavigator();


//function MyTabs() {
export const ChamadoScreen = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChamadoSolicitacao" options={{ title: 'Nova Solicitação' }} component={StackScreen} />
      <Tab.Screen name="ChamadosLista" options={{ title: 'Lista de Chamados' }} component={ChamadosScreen} />

    </Tab.Navigator>
  );
}



