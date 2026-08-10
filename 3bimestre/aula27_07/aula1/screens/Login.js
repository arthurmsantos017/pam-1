import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';


export default function Login({ navigation }) {


return (

<View style={styles.container}>


<Image

style={styles.imagem}

source={{

uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqJPwf7us8cLOWSamZOxrwTEN7XCp8r_7bFmfIHVYlpewVYcCMS4Jkv5b&s=10'

}}

/>


<Text style={styles.titulo}>
LOGIN DO BATMAN
</Text>



<TextInput

style={styles.input}

placeholder="Usuário"

placeholderTextColor="#777"

/>



<TextInput

style={styles.input}

placeholder="Senha"

placeholderTextColor="#777"

secureTextEntry

/>



<Button

title="ENTRAR NA BATCAVERNA"

color="#FFD700"

onPress={() => navigation.navigate('Final')}

/>


</View>

);


}



const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:'#050505',
justifyContent:'center',
padding:30
},


imagem:{
width:200,
height:200,
resizeMode:'contain',
alignSelf:'center'
},


titulo:{
color:'#FFD700',
fontSize:30,
fontWeight:'bold',
textAlign:'center',
marginBottom:30
},


input:{
backgroundColor:'#fff',
height:50,
marginBottom:20,
padding:15,
borderRadius:5
}


});