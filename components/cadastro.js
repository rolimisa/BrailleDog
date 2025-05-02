import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, CheckBox, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Cadastrar({ navigation }) {
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = () => {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Erro', 'Preencha todos os campos para se cadastrar.');
    } else {
      Alert.alert('Sucesso', 'Cadastro realizado!');
      // Aqui você pode adicionar lógica para salvar o cadastro
      // Exemplo: navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagem do BrailleDog */}
      <Image 
        source={require('../assets/brailledog.png')} 
        style={styles.logo}
        resizeMode="cover"
      />

      {/* Título */}
      <Text style={styles.title}>BRAILLEDOG</Text>

      {/* Campo de usuário */}
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Nome de Usuário"
          style={styles.input}
          placeholderTextColor="#555"
          value={username}
          onChangeText={setUsername}
        />
        <Icon name="account" size={24} color="#555" />
      </View>

      {/* Campo de senha */}
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Senha"
          style={styles.input}
          placeholderTextColor="#555"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon name={passwordVisible ? "eye-off" : "eye"} size={24} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Lembrar senha */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={rememberMe}
          onValueChange={setRememberMe}
        />
        <Text style={styles.checkboxLabel}>Lembrar senha</Text>
      </View>

      {/* Botão Cadastrar */}
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9c2e7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'Comic Sans MS',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dfe4b7',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#555',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  checkboxLabel: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000',
  },
  button: {
    backgroundColor: '#4a4aa3',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
