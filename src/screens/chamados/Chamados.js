
import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, Card } from 'react-native';
import { ListItem, Divider, Dialog } from '@rneui/themed'
const styles = StyleSheet.create({
  container: {

  },
})

export const ChamadosScreen = ({ route, navigation }) => {
  const { jsonTickets } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  >
        {!jsonTickets.length > 0 &&

          <Text style={{ textAlign: 'center', marginTop: '50%', fontSize: 30 }}>Nenhum Chamado Aberto</Text>

        }
        {jsonTickets.map((Json, i) => (

          <>
            <ListItem key={i + 1} style={{ width: '100%' }} >
              <ListItem.Content style={{ width: '100%' }}>
                <ListItem.Title>{Json.nmTicket}</ListItem.Title>
                <ListItem.Title>{Json.dsTicket}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron onPress={() => {
    
                navigation.push('Descricao', {
                  Json: Json,
                  jsonTickets: jsonTickets
                })
              }} />
            </ListItem>
            <Divider />
          </>
        ))}
      </ScrollView >
    </SafeAreaView>




  );
};

