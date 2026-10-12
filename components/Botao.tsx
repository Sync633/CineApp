import { Text, Pressable, StyleSheet } from 'react-native';

interface BotaoProps {
  titulo: string
  onPress: () => void
  cor?: string
}

export default function Botao({ titulo, onPress }: BotaoProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.botao,
        pressed && styles.botaoPressionado
      ]}
      onPress={onPress}
    >
      <Text style={styles.textoBotao}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#8b5cf6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  botaoPressionado: {
    opacity: 0.7,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});