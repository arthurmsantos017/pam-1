import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Button,
  Alert,
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.scroll}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Text style={styles.logo}>TRAVEL QUIZ</Text>

        <Text style={styles.subtitulo}>
          Descubra quanto você sabe sobre o mundo!
        </Text>

        <TextInput
          placeholder="Pesquisar países..."
          placeholderTextColor="#666"
          style={styles.pesquisa}
        />

        <Text style={styles.titulo}>França</Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a'
          }}
          style={styles.imagem}
        />

        <View style={styles.card}>

          <Text style={styles.numero}>PERGUNTA 1</Text>

          <Text style={styles.pergunta}>
            Qual é a capital da França?
          </Text>

          <TextInput
            placeholder="Digite sua resposta"
            style={styles.input}
          />

          <Button
            title="Responder"
            color="#1e88e5"
            onPress={() => Alert.alert("Resposta enviada!")}
          />

          <View style={styles.linha}/>

          <Text style={styles.numero}>PERGUNTA 2</Text>

          <Text style={styles.pergunta}>
            Qual famoso monumento fica em Paris?
          </Text>

          <TextInput
            placeholder="Digite sua resposta"
            style={styles.input}
          />

          <Button
            title="Responder"
            color="#1e88e5"
            onPress={() => Alert.alert("Resposta enviada!")}
          />

        </View>

        <Text style={styles.titulo}>Brasil</Text>

        <Image
          source={{
            uri:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325'
          }}
          style={styles.imagem}
        />

        <View style={styles.card}>

          <Text style={styles.numeroVerde}>PERGUNTA 1</Text>

          <Text style={styles.pergunta}>
            Qual é a maior floresta tropical do mundo?
          </Text>

          <TextInput
            placeholder="Digite sua resposta"
            style={styles.input}
          />

          <Button
            title="Responder"
            color="#43a047"
            onPress={() => Alert.alert("Resposta enviada!")}
          />

          <View style={styles.linha}/>

          <Text style={styles.numeroVerde}>PERGUNTA 2</Text>

          <Text style={styles.pergunta}>
            Em qual cidade fica o Cristo Redentor?
          </Text>

          <TextInput
            placeholder="Digite sua resposta"
            style={styles.input}
          />

          <Button
            title="Responder"
            color="#43a047"
            onPress={() => Alert.alert("Resposta enviada!")}
          />

        </View>

        <Text style={styles.rodape}>
          Continue viajando e aprendendo!
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  scroll:{
    backgroundColor:'#eef7fb'
  },

  container:{
    alignItems:'center',
    paddingBottom:40,
    backgroundColor:'#eef7fb'
  },

  logo:{
    fontSize:30,
    fontWeight:'bold',
    marginTop:35,
    color:'#1565c0'
  },

  subtitulo:{
    marginTop:5,
    marginBottom:20,
    color:'#555',
    fontSize:15
  },

  pesquisa:{
    width:'90%',
    height:48,
    backgroundColor:'#fff',
    borderRadius:12,
    borderWidth:1,
    borderColor:'#cfd8dc',
    paddingHorizontal:15,
    marginBottom:20
  },

  titulo:{
    width:'90%',
    fontSize:24,
    fontWeight:'bold',
    color:'#37474f',
    marginBottom:10,
    marginTop:15
  },

  imagem:{
    width:'90%',
    height:220,
    borderRadius:15
  },

  card:{
    width:'90%',
    backgroundColor:'#fff',
    padding:20,
    borderRadius:15,
    marginTop:12,
    marginBottom:25,
    elevation:5
  },

  numero:{
    color:'#1e88e5',
    fontWeight:'bold',
    marginBottom:8
  },

  numeroVerde:{
    color:'#43a047',
    fontWeight:'bold',
    marginBottom:8
  },

  pergunta:{
    fontSize:19,
    fontWeight:'bold',
    marginBottom:12
  },

  input:{
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius:10,
    height:45,
    paddingHorizontal:12,
    marginBottom:15
  },

  linha:{
    height:1,
    backgroundColor:'#e0e0e0',
    marginVertical:22
  },

  rodape:{
    fontWeight:'bold',
    fontSize:18,
    color:'#1565c0'
  }

});
