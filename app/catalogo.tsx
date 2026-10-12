import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Botao from '../components/Botao';
import FilmeCard from '../components/FilmeCard';

const filmes = [
  { id: 1, titulo: "Mad Max: Estrada da Fúria", genero: "Ação", ano: 2015, imagem: require('../assets/images/madmax.png') },
  { id: 2, titulo: "Batman: O Cavaleiro das Trevas", genero: "Ação", ano: 2008, imagem: require('../assets/images/batman.png') },
  { id: 3, titulo: "Top Gun: Maverick", genero: "Ação", ano: 2022, imagem: require('../assets/images/topgun.png') },
  { id: 4, titulo: "1917", genero: "Guerra", ano: 2019, imagem: require('../assets/images/1917.png') },
  { id: 5, titulo: "Django Livre", genero: "Faroeste", ano: 2012, imagem: require('../assets/images/django.png') },
  { id: 6, titulo: "Ford vs Ferrari", genero: "Drama", ano: 2019, imagem: require('../assets/images/fordferrari.png') },
];

export default function Catalogo() {
  const router = useRouter();

  useEffect(() => {
    console.log("Catálogo carregado");
  }, []);

  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/images/degrade.png')}
        style={styles.fundoDegrade}
        resizeMode="cover"
      />


      <View style={styles.header}>
        <View>
          <Text style={styles.emCartaz}>EM CARTAZ</Text>
          <Text style={styles.tituloCatalogo}>Explore Filmes</Text>
          <Text style={styles.textCatalogo}>Filmes sugeridos para a sua próxima sessão.</Text>

        </View>

        <View style={styles.containerBotaoSobre}>
          <Botao
            titulo="ⓘ Sobre"
            onPress={() => router.push('/sobre')}
          />
        </View>
      </View>


      <View style={styles.conteudo}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.listaFilmes}>
            {filmes.map((filme) => (
              <FilmeCard
                key={filme.id}
                titulo={filme.titulo}
                genero={filme.genero}
                ano={filme.ano}
                imagem={filme.imagem}
                onPress={() => router.push('/detalhes')}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08070a',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  conteudo: {
    flex: 1,
  },
  listaFilmes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  emCartaz: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9d79ff',
    letterSpacing: 2,
    marginBottom: 7,
  },
  tituloCatalogo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  textCatalogo: {
    fontSize: 12,
    color: '#747474',
  },
  containerBotaoSobre: {
    width: 100,
    height: 100
  },
  fundoDegrade: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: undefined,
    height: undefined,
  }
});