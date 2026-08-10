import { View, Text, Image, Button, StyleSheet } from 'react-native';


export default function Final({ navigation }) {


return (

<View style={styles.container}>


<Image

style={styles.imagem}

source={{

uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqJPwf7us8cLOWSamZOxrwTEN7XCp8r_7bFmfIHVYlpewVYcCMS4Jkv5b&s=10'

}}

/>



<Text style={styles.titulo}>
BEM-VINDO À GOTHAM
</Text>



<Text style={styles.texto}>
O Batman está pronto para proteger a cidade.
</Text>



<Button

title="VOLTAR AO LOGIN"

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
justifyContent:'center',
padding:20
},


imagem:{
width:250,
height:250,
resizeMode:'contain'
},


titulo:{
color:'#FFD700',
fontSize:28,
fontWeight:'bold',
textAlign:'center',
marginBottom:20
},


texto:{
color:'#fff',
fontSize:17,
textAlign:'center',
marginBottom:30
}


});