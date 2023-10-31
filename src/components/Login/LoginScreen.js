import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Adicione a lógica de autenticação aqui
    console.log(`Login: Email: ${email}, Senha: ${password}`);
    // Redirecione para a tela principal após o login bem-sucedido
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Faça o login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10b981',
    marginTop: 10,
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  button: {
    backgroundColor: '#10b981',
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});
