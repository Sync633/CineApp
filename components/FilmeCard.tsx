import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

interface FilmeCardProps {
  titulo: string;
  genero: string;
  ano: number;
  imagem: any;
  onPress: () => void;
}

export default function FilmeCard({ titulo, genero, ano, imagem, onPress }: FilmeCardProps) {
  const [favorito, setFavorito] = useState(false);


  return (
    <View style={styles.card}>
      <Pressable onPress={onPress} style={styles.cardConteudo}>
        <Image source={imagem} style={styles.imagem} />

        <View style={styles.infoContainer}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.detalhes}>{genero} • {ano}</Text>
        </View>
      </Pressable>

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
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginVertical: 10,
    position: 'relative',
  },
  cardConteudo: {
    flex: 1,
  },
  infoContainer: {
    paddingTop: 12,
    gap: 2,
  },
  titulo: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  detalhes: {
    color: '#aaa',
    fontSize: 11,
    marginTop: 5,
  },
  imagem: {
    borderColor: '#424242',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    height: 240,
  },
  botaoFavorito: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    borderColor: '#424242',
    borderWidth: 1,
    borderRadius: 10,
  },
  estrela: {
    width: 15,
    height: 15
  }
});