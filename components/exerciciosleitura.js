import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

// Lista de palavras
const palavrasOriginais = [
  "Casa", "Porta", "Janela", "Cama", "Mesa", "Cadeira", "Telefone", "Chave", "Roupa", "Sapato",
  "Pão", "Leite", "Arroz", "Feijão", "Ovo", "Água", "Fruta", "Maçã", "Banana", "Uva",
  "Mãe", "Pai", "Irmão", "Irmã", "Avó", "Avô", "Amigo", "Criança", "Bebê", "Professor",
  "Cachorro", "Gato", "Pássaro", "Peixe", "Cavalo", "Vaca", "Leão", "Elefante", "Macaco", "Coelho",
  "Azul", "Vermelho", "Verde", "Amarelo", "Preto", "Branco", "Laranja", "Roxo", "Marrom", "Cinza",
  "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez",
  "Hoje", "Amanhã", "Ontem", "Manhã", "Tarde", "Noite", "Segunda", "Terça", "Quarta", "Quinta",
  "Escola", "Rua", "Praça", "Hospital", "Igreja", "Mercado", "Parque", "Biblioteca", "Estação", "Ponto",
  "Feliz", "Triste", "Bravo", "Medo", "Amor", "Cansaço", "Calma", "Raiva", "Alegria", "Esperança",
  "Sol", "Lua", "Estrela", "Livro", "Caneta", "Papel", "Computador", "Bola", "Música", "Som"
];

const ExercicioLeitura = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [palavraComLacuna, setPalavraComLacuna] = useState('');
  const [letraCorreta, setLetraCorreta] = useState('');
  const [input, setInput] = useState('');
  const [pontos, setPontos] = useState(0);

  const letras = ['A', 'E', 'I', 'O', 'U', 'M', 'P', 'R', 'L', 'S', 'T', 'B', 'C', 'D', 'N'];

  // Preparar a palavra para mostrar (com lacuna aleatória)
  const prepararPalavra = () => {
    const palavra = palavrasOriginais[index].toUpperCase();
    if (palavra.length > 1) {
      const posicao = Math.floor(Math.random() * palavra.length);
      const letra = palavra[posicao];
      const palavraComEspaco = palavra.substring(0, posicao) + '_' + palavra.substring(posicao + 1);
      setPalavraComLacuna(palavraComEspaco);
      setLetraCorreta(letra);
    } else {
      // Se a palavra for de 1 letra só (raro), não modifica
      setPalavraComLacuna(palavra);
      setLetraCorreta('');
    }
  };

  useEffect(() => {
    prepararPalavra();
  }, [index]);

  const handlePress = (letra) => {
    setInput(letra);
  };

  const proximaPalavra = () => {
    if (index < palavrasOriginais.length - 1) {
      setIndex(index + 1);
      setInput('');
    } else {
      alert(`Fim dos exercícios! 🏆\nPontuação final: ${pontos}/${palavrasOriginais.length}`);
      navigation.goBack();
    }
  };

  const handleOk = () => {
    if (input.toUpperCase() === letraCorreta.toUpperCase()) {
      alert('✅ Correto!');
      setPontos(pontos + 1);
      proximaPalavra();
    } else {
      alert('❌ Errado! Tente de novo!');
      setInput('');
    }
  };

  const handlePular = () => {
    proximaPalavra();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>◀ Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>EXERCÍCIOS DE LEITURA</Text>
      </View>

      {/* Progresso */}
      <Text style={styles.progressText}>
        Exercício {index + 1} de {palavrasOriginais.length}
      </Text>

      {/* Pontuação */}
      <Text style={styles.scoreText}>
        Pontos: {pontos}
      </Text>

      {/* Letras para clicar */}
      <View style={styles.circleContainer}>
        {letras.map((letra, i) => (
          <TouchableOpacity
            key={i}
            style={styles.circleButton}
            onPress={() => handlePress(letra)}
          >
            <Text style={styles.circleText}>{letra}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Palavra da imagem */}
      <Text style={styles.palavraImagem}>PALAVRA DA IMAGEM</Text>
      <Text style={styles.palavraBase}>{palavraComLacuna}</Text>

      {/* Input bloqueado */}
      <Text style={styles.label}>LETRA ESCOLHIDA</Text>
      <TextInput
        style={styles.input}
        value={input}
        placeholder="Clique nas letras"
        editable={false}
      />

      {/* Botões */}
      <TouchableOpacity style={styles.button} onPress={handleOk}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handlePular}>
        <Text style={styles.buttonText}>PULAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5D6D7E',
    width: '100%',
    padding: 15,
  },
  backText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  progressText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scoreText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  circleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 20,
  },
  circleButton: {
    backgroundColor: '#DDE2B6',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    elevation: 3,
  },
  circleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  palavraImagem: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  palavraBase: {
    fontSize: 28,
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 20,
  },
  input: {
    width: '60%',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5D6D7E',
    padding: 15,
    borderRadius: 25,
    width: '60%',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default ExercicioLeitura;
