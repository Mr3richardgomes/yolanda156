
import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {


  },
  ticket: {
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 16,
    color: 'red',
    margin: 10,
    padding: 10,
    backgroundColor: '#868686c2'
  }
})

export const ChamadosScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true} style={styles.box}>
        <FlatList
          data={[
            {
              key: 1,
              nmTicket: 'buraco',
              dsTicket: 'Buraco na rua do irineu',
            },
            {
              key: 2,
              nmTicket: 'placa quebrada',
              dsTicket: 'Placa quebrada tiw',
            },
            {
              key: 3,
              nmTicket: 'tampa de bueiro',
              dsTicket: 'tampa de bueiro quebrada',
            },
            {
              key: 4,
              nmTicket: 'Lampida',
              dsTicket: 'Lampida quebrada',
            },
            {
              key: 5,
              nmTicket: 'VAI CHAVES',
              dsTicket: 'Lampida do chaves quebrrada',
            },
          ]}
          renderItem={

            ({ item }) =>
              <View style={styles.ticket}>
                <Text>Título: {item.nmTicket}</Text>
                <Text>Descrição: {item.dsTicket}</Text>
              </View>
          } />
      </ScrollView >
    </SafeAreaView>




  );
};

