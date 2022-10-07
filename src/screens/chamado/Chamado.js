
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})

export const ChamadoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CHAMADO</Text>
      <Button
        onPress={() => navigation.navigate('Chamado')}
        title="ABRIR CHAMADO"
        color="#841584"
      />
    </View>

  );
};

