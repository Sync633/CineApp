import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

interface FilmeCardProps {
  titulo: string;
  genero: string;
  ano: string;
  imagem: any; // Pode ser um require ou uma URL
  onPress: () => void;
}

export default function FilmeCard({ titulo, genero, ano, imagem, onPress }: FilmeCardProps) {
  const [favorito, setFavorito] = useState(false);

  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image source={imagem} style={styles.imagem} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.detalhes}>{genero} • {ano}</Text>
      </View>

      <Pressable 
        onPress={() => setFavorito(!favorito)} 
        style={styles.botaoFavorito}
      >
        <Text style={styles.estrela}>{favorito ? '★' : '☆'}</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  imagem: {
    width: 80,
    height: 120,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  titulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detalhes: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 5,
  },
  botaoFavorito: {
    padding: 15,
  },
  estrela: {
    fontSize: 24,
    color: '#8b5cf6',
  }
});