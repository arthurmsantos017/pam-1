import { View, Text, Image, Button, StyleSheet } from 'react-native';


export default function Inicial({ navigation }) {

  return (

    <View style={styles.container}>


      <Image

        style={styles.imagem}

        source={{
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqJPwf7us8cLOWSamZOxrwTEN7XCp8r_7bFmfIHVYlpewVYcCMS4Jkv5b&s=10'
        }}

      />


      <Text style={styles.titulo}>
        BATMAN
      </Text>


      <Text style={styles.subtitulo}>
        Bem-vindo a Gotham City
      </Text>


      <Button

        title="ENTRAR"

        color="#FFD700"

        onPress={() => navigation.navigate('Login')}

      />


    </View>

  );

}



const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#050505',
    alignItems:'center',
    justifyContent:'center'
  },


  imagem:{
    width:250,
    height:250,
    resizeMode:'contain',
    marginBottom:20
  },


  titulo:{
    color:'#FFD700',
    fontSize:40,
    fontWeight:'bold'
  },


  subtitulo:{
    color:'#fff',
    fontSize:18,
    marginBottom:40
  }


});