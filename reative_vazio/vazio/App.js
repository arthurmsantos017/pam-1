import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function App() {
  const [cliques, setCliques] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>
        Trabalho React Native
      </Text>

      <Text style={styles.contador}>
        Cliques no botão: {cliques}
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setCliques(cliques + 1)}
      >
        <Text style={styles.textoBotao}>
          Clique Aqui
        </Text>
      </TouchableOpacity>

      <Text style={styles.texto}>
        A tecnologia tem transformado o mundo de maneira cada vez mais rápida e significativa. Atualmente, ela está presente em praticamente todas as atividades realizadas pelas pessoas, desde as tarefas mais simples do dia a dia até os processos mais complexos de empresas e organizações. O avanço tecnológico trouxe inúmeros benefícios para a sociedade, facilitando a comunicação, o acesso à informação, a educação, o entretenimento e a realização de trabalhos que antes exigiam muito mais tempo e esforço.

        {'\n\n'}

        A internet é um dos maiores exemplos dessa evolução. Com apenas alguns cliques, é possível encontrar informações sobre qualquer assunto, conversar com pessoas de diferentes países, assistir vídeos, ouvir músicas, realizar compras e até mesmo estudar sem sair de casa. Essa facilidade tornou o conhecimento mais acessível e permitiu que milhões de pessoas tivessem oportunidades que antes não existiam.

        {'\n\n'}

        Além disso, os dispositivos móveis, como smartphones e tablets, revolucionaram a forma como as pessoas se comunicam. Hoje em dia, é possível enviar mensagens instantaneamente, realizar chamadas de vídeo e compartilhar informações em questão de segundos. Isso aproximou pessoas que estão distantes fisicamente e tornou a comunicação mais eficiente.

        {'\n\n'}

        No ambiente escolar, a tecnologia também desempenha um papel importante. Ferramentas digitais ajudam alunos e professores a desenvolverem atividades de maneira mais dinâmica e interativa. Plataformas educacionais, vídeos explicativos e aplicativos de estudo são alguns exemplos de recursos que contribuem para o aprendizado.

        {'\n\n'}

        Entretanto, apesar das inúmeras vantagens, a tecnologia também apresenta desafios. O uso excessivo de dispositivos eletrônicos pode causar distrações, reduzir a interação social presencial e gerar dependência digital. Por esse motivo, é fundamental utilizar a tecnologia de forma consciente e equilibrada, aproveitando seus benefícios sem deixar de lado outras atividades importantes para o desenvolvimento pessoal.

        {'\n\n'}

        Outro aspecto relevante é a segurança digital. Com o aumento do uso da internet, tornou-se necessário proteger dados pessoais e informações importantes. O cuidado com senhas, a verificação de sites confiáveis e a atenção a golpes virtuais são medidas essenciais para garantir uma navegação segura.

        {'\n\n'}

        A tecnologia continuará evoluindo nos próximos anos e trazendo novas soluções para problemas do cotidiano. Áreas como inteligência artificial, robótica, automação e realidade virtual prometem transformar ainda mais a maneira como as pessoas vivem e trabalham. Dessa forma, é importante acompanhar essas mudanças e desenvolver conhecimentos que permitam aproveitar as oportunidades criadas por essas inovações.

        {'\n\n'}

        O futuro será cada vez mais conectado, e a capacidade de compreender e utilizar ferramentas tecnológicas será uma habilidade essencial para estudantes e profissionais. Por isso, investir em educação tecnológica e no desenvolvimento de competências digitais é fundamental para acompanhar as transformações da sociedade moderna.

        {'\n\n'}

        A busca constante por inovação tem impulsionado empresas, governos e instituições a criarem soluções cada vez mais eficientes. Em diversas áreas, como saúde, transporte, indústria e comunicação, os avanços tecnológicos contribuem para melhorar a qualidade de vida das pessoas e aumentar a produtividade. Hospitais utilizam equipamentos modernos para realizar diagnósticos mais precisos, enquanto sistemas inteligentes ajudam cidades a organizar melhor o trânsito e os serviços públicos.

        {'\n\n'}

        Por fim, pode-se afirmar que a tecnologia é uma ferramenta poderosa que influencia diretamente a vida das pessoas. Quando utilizada de maneira responsável, ela oferece inúmeras possibilidades de crescimento, aprendizado e desenvolvimento. Cabe a cada indivíduo buscar o equilíbrio entre o mundo digital e a vida real, aproveitando os benefícios da inovação sem abrir mão de valores importantes como a convivência, a ética e a responsabilidade.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a5e9b',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#d10d0d',
    textAlign: 'center',
    marginBottom: 20,
  },

  contador: {
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },

  botao: {
    backgroundColor: '#d10d0d',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  texto: {
    fontSize: 18,
    color: '#1ccc16',
    lineHeight: 30,
    textAlign: 'justify',
  },
});