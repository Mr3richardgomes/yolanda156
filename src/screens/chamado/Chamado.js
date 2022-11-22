import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, Pressable, TextInput, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChamadosScreen } from '../chamados/index';
import moment from "moment";
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  text: {
    fontSize: 16,

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



const Tab = createBottomTabNavigator();

export const ChamadoScreen = ({ navigation }) => {
  const [countTicket, setCountTicket] = useState(1);

  const [jsonTickets, setJsonTickets] = useState([]);



  function StackScreen() {

    const [dsTicket, setDsTicket] = useState("");

    const [nmTicket, setNmTicket] = useState("");




    const fOpenTicket = () => {

      /* VALID DESCRIPTION VALUE */
      if (!dsTicket || !nmTicket) { Alert.alert("Opsss 🤕", "Conteúdo Inválido Para Abertura de Chamado"); return }

      /* APPEND NUMBER TICKET */
      setCountTicket(countTicket + 1);

      /* STRUCT TICKET */
      const ticket = {
        id: countTicket,//uuidv4()
        nmTicket: nmTicket,
        dsTicket: dsTicket,
        dtAbertura: moment().format("DD/MM/YYYY HH:mm")
      };
      /* ADD TICKET */
      setJsonTickets([ticket, ...jsonTickets]);
      /* EMPTY INPUT´S */
      setDsTicket("");
      setNmTicket("");

      Alert.alert("😁", "Chamado Aberto Com Sucesso, Obrigado!");

      Keyboard.dismiss();

    }


    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container}>
          <View style={styles.box}>
            {/* INPUT TITLE TICKET */}
            <Text style={styles.text}>Titulo</Text>
            <TextInput
              onChangeText={(text) => { setNmTicket(text) }}
              value={nmTicket}
              style={styles.input}
              placeholder="Titulo da Solicitação"

            />
            {/* INPUT DESCRIPTION TICKET */}
            <Text style={styles.text}>Descrição</Text>
            <TextInput
              multiline={true}
              numberOfLines={10}
              onChangeText={(text) => { setDsTicket(text) }}
              value={dsTicket}
              style={styles.input}
              placeholder="Descreva sua Solicitação"

            />
            {/* BUTTON OPEN TICKET */}
            <Pressable
              style={styles.button}
              onPress={fOpenTicket}>
              <Text style={styles.buttonText}>Abrir Chamado</Text>
            </Pressable>
            {/* BUTTON LIST TICKET´S */}
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.push('ChamadosLista', {
                  jsonTickets: jsonTickets,
                })
              }}>
              <Text style={styles.buttonText}>Lista de Chamados</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          let iconName;

          if (route.name === 'ChamadoSolicitacao') {
            iconName = "paper-plane"
            //focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'ChamadosLista') {
            iconName = "ios-list"
            //focused ? 'ios-list-box' : 'ios-list';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: 'black'
        }
      })}

      tabBarOptions={{
        activeTintColor: 'white',
        activeBackgroundColor: '#141414c2',
        labelStyle: {
          fontSize: 14,
        }
      }}>
      {/* NOVO TICKET */}
      <Tab.Screen name="ChamadoSolicitacao"
        tabBarOptions={{
          showLabel: false
        }}
        options={{
          title: 'Nova Solicitação'
        }}
        component={StackScreen} />
      {/* LISTA DE TICKET´S */}
      {
        /*
        <Tab.Screen name="ChamadosLista"
        options={{
          title: 'Lista de Chamados',
        }}
        component={ChamadosScreen} />
        */
      }


    </Tab.Navigator>
  );
}



