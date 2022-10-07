
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title="ABRIR CHAMADO"
        color="#841584"
      />
    </View>

  );
};

