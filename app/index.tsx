import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import Botao from '../components/Botao';

export default function TelaInicial() {
  const router = useRouter();

  return (
    <View style={styles.containerPrincipal}>

      <Image
        source={require('../assets/images/degrade.png')}
        style={styles.fundoDegrade}
        resizeMode="cover"
      />

      <Image
        source={require('../assets/images/grid.png')}
        style={styles.fundoGrid}
        resizeMode="repeat"
      />

      <View style={styles.conteudo}>
        <Image
          source={require('../assets/images/logo-main.png')}
          style={styles.logo}
        />

        <Text style={styles.titulo}>CineApp</Text>

        <Text style={styles.descricao}>
          Descubra novas histórias, explore grandes títulos e salve seus filmes favoritos em um só lugar.
        </Text>

        <Botao
          titulo="Acessar Catálogo"
          onPress={() => router.push('/catalogo')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
  },
  fundoDegrade: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  fundoGrid: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.15,
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  }
});