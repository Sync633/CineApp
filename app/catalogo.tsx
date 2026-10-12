import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Botao from '../components/Botao';
import FilmeCard from '../components/FilmeCard';

export const filmes = [
  { id: 1, titulo: "Mad Max: Estrada da Fúria", genero: "Ação", ano: 2015, duracao: "2h 00min", imagem: require('../assets/images/madmax.png'), sinopse: "Num deserto pós-apocalíptico, Max se vê arrastado para a fuga de Furiosa, que tenta libertar um grupo de mulheres do tirano Immortan Joe. Começa uma perseguição implacável pela estrada." },
  { id: 2, titulo: "Batman: O Cavaleiro das Trevas", genero: "Ação", ano: 2008, duracao: "2h 32min", imagem: require('../assets/images/batman.png'), sinopse: "Com a ajuda de Jim Gordon e Harvey Dent, Batman vinha mantendo a ordem em Gotham. A chegada do Coringa, um criminoso sem limites, leva a cidade ao caos e testa tudo o que ele defende." },
  { id: 3, titulo: "Top Gun: Maverick", genero: "Ação", ano: 2022, duracao: "2h 10min", imagem: require('../assets/images/topgun.png'), sinopse: "Mais de trinta anos depois, Maverick continua como piloto de testes e é chamado para treinar jovens pilotos para uma missão perigosa. Entre eles está o filho de seu antigo parceiro." },
  { id: 4, titulo: "1917", genero: "Guerra", ano: 2019, duracao: "1h 59min", imagem: require('../assets/images/1917.png'), sinopse: "Em plena Primeira Guerra Mundial, dois jovens soldados britânicos recebem uma missão quase impossível: cruzar território inimigo para entregar uma mensagem que pode salvar centenas de vidas." },
  { id: 5, titulo: "Django Livre", genero: "Faroeste", ano: 2012, duracao: "2h 45min", imagem: require('../assets/images/django.png'), sinopse: "No sul dos Estados Unidos, o escravizado Django é libertado pelo caçador de recompensas King Schultz. Juntos, eles seguem em busca de criminosos e de uma chance de resgatar a esposa dele." },
  { id: 6, titulo: "Ford vs Ferrari", genero: "Drama", ano: 2019, duracao: "2h 32min", imagem: require('../assets/images/fordferrari.png'), sinopse: "O projetista Carroll Shelby e o piloto Ken Miles enfrentam a pressão da diretoria da Ford para construir um carro capaz de vencer a Ferrari nas 24 Horas de Le Mans." },
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
          <Text style={styles.emCartaez}>EM CARTAZ</Text>
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
                onPress={() => router.push({ pathname: '/detalhes', params: { id: filme.id } })}
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
  emCartaez: {
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