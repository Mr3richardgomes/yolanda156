import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, Pressable, TextInput, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChamadosScreen } from '../chamados/index';
import moment from "moment";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { margin } from '@mui/system';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full heigh°  t


const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'left',
    backgroundColor: '000000a6'
  },
  box: {
    margin: 20
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 9,
    padding: 10
  },
  textDescription: {
    fontSize: 20,
    marginLeft: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,


  },
  button: {

    padding: 30,
    margin: 15,
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



export const ChamadoConteudoScreen = ({ route, navigation }) => {
  const { dsTicket, dtAbertura, nmTicket, id } = route.params.Json;
  //console.log('jsonTickets ', route.params.jsonTickets)

  function fTeste() {
    alert(1)
    for (let wIdx = 0; wIdx < route.params.jsonTickets.length; wIdx++) {
      const wItem = route.params.jsonTickets[wIdx];
      console.log(wItem.id == id)
      route.params.jsonTickets.splice(wIdx, 1);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>

          {/* INPUT TITLE TICKET */}
          <Text style={styles.text}>Titulo</Text>
          <Text style={styles.textDescription}>{nmTicket}</Text>
          <Text style={styles.text}>Data Abertura</Text>
          <Text style={styles.textDescription}>{dtAbertura}</Text>
          <Text style={styles.text}>Descrição</Text>
          <Text style={styles.textDescription}>{dsTicket}</Text>
          <Pressable style={styles.button} onPress={() => {
            alert(12)
            for (let wIdx = 0; wIdx < route.params.jsonTickets.length; wIdx++) {
              const wItem = route.params.jsonTickets[wIdx];
              if (wItem.id == id) {
                route.params.jsonTickets.splice(wIdx, 1);
                navigation.push('ChamadosLista', {
                  jsonTickets: route.params.jsonTickets,
                })
              }

            }
          }}>
            <Text style={styles.buttonText}>Marcar Como Feito</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );


}



