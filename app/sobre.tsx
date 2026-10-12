import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Botao from '../components/Botao';

export default function Sobre() {
  const router = useRouter();

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.conteudo}>

        <Image
          source={require('../assets/images/logo-main.png')}
          style={styles.logo}
        />

        <Text style={styles.eyebrow}>SOBRE O APLICATIVO</Text>
        <Text style={styles.titulo}>CineApp</Text>

        <Text style={styles.descricao}>
          Uma app simples para descobrir, explorar e guardar os filmes que voce gosta.
        </Text>

        <View style={styles.caixaInfo}>
          <View style={styles.linhaInfo}>
            <Text style={styles.label}>Aplicativo</Text>
            <Text style={styles.valor}>CineApp</Text>
          </View>
          <View style={styles.linhaInfo}>
            <Text style={styles.label}>Versão</Text>
            <Text style={styles.valor}>1.0</Text>
          </View>
          <View style={styles.linhaInfo}>
            <Text style={styles.label}>Matéria</Text>
            <Text style={styles.valor}>PDM - Programação de Dispositivos Móveis</Text>
          </View>
        </View>

        <Botao
          titulo="Voltar ao Catálogo"
          onPress={() => router.back()}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#08070a',
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  eyebrow: {
    color: '#b091ff',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 5,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  descricao: {
    color: '#88858f',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  caixaInfo: {
    width: '100%',
    backgroundColor: 'rgba(21, 19, 26, 0.78)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    marginBottom: 30,
    overflow: 'hidden',
  },
  linhaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  label: {
    color: '#6f6c76',
    fontSize: 14,
  },
  valor: {
    color: '#dedbe3',
    fontSize: 14,
    fontWeight: 'bold',
    maxWidth: 150,
    textAlign: 'right'
  }
});