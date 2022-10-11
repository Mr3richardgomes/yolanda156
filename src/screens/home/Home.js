
import { StyleSheet, Text, View, Button, ImageBackground ,Pressable} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 60,
    fontFamily: "Arial",
    lineHeight: 84,
    textShadowColor: 'black',
    textShadowOffset: {width: -2, height: 10},
    textShadowRadius: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginTop:100,
    marginHorizontal:55,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius:10,
    backgroundColor: 'black',
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
});


export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/images/img-sao-paulo.jpg")} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Yolanda 156</Text>
        <Pressable style={styles.button}  onPress={() => navigation.navigate('Chamado')}>
          <Text style={styles.buttonText}>Abrir Chamado</Text>
        </Pressable>
      </ImageBackground>
    </View>

  );
};

