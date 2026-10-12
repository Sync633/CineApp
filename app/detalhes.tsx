import { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { filmes } from "./catalogo"; 
import Botao from "../components/Botao";

export default function Detalhes() {
  const { id } = useLocalSearchParams();
  const [favorito, setFavorito] = useState(true);

  const filme = filmes.find((item) => Number(item.id) === Number(id)) || filmes[0];

  const sourceImage = typeof filme.imagem === "string" ? { uri: filme.imagem } : filme.imagem;

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.heroContainer}>
        <Image 
          source={sourceImage} 
          style={styles.heroImage} 
          resizeMode="cover"
        />
        
        <Image 
          source={require('../assets/images/degrade.png')} 
          style={styles.degradeHero} 
          resizeMode="cover"
        />

        <Pressable
                onPress={() => setFavorito(!favorito)}
                style={styles.botaoFavorito}
                hitSlop={8}
              >
                <Image
                  source={
                    favorito
                      ? require('../assets/images/estrela-full.png')
                      : require('../assets/images/estrela-vazia.png')
                  }
                  style={styles.estrela}
                  resizeMode="contain"
                />
              </Pressable>

        <View style={styles.titulosHero}>
          <Text style={styles.tituloGrande}>{filme.titulo}</Text>
        </View>
      </View>

      <View style={styles.conteudo}>
        <View style={styles.infos}>
          <Text style={styles.textoInfos}>{filme.genero}</Text>
          <Text style={styles.ponto}>•</Text>
          <Text style={styles.textoInfos}>{filme.ano}</Text>
          <Text style={styles.ponto}>•</Text>
          <Text style={styles.textoInfos}>{filme.duracao}</Text>
        </View>

        <View style={styles.sinopseContainer}>
          <Text style={styles.tituloSinopse}>SINOPSE</Text>
          <Text style={styles.textoSinopse}>
            {filme.sinopse}
          </Text>
        </View>

        <Botao 
          titulo="< Voltar ao catálogo" 
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
  heroContainer: {
    height: '55%',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  degradeHero: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.5
  },
  botaoFavorito: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    borderColor: '#424242',
    borderWidth: 1
  },
  estrela: {
    width: 15,
    height: 15
  },
  titulosHero: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  tituloGrande: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
  },
  conteudo: {
    flex: 1,
    padding: 20,
  },
  infos: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  textoInfos: {
    color: '#96939e',
    fontSize: 14,
    fontWeight: '600',
  },
  ponto: {
    color: '#6f45db',
    fontSize: 14,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  sinopseContainer: {
    marginBottom: 30,
  },
  tituloSinopse: {
    color: '#b091ff',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  textoSinopse: {
    color: '#aaa7b1',
    fontSize: 14,
    lineHeight: 22,
  }
});