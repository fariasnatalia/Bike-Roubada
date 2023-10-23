
import React, { useState }  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';


export default function App() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  function handleSignIn() {
    const data  = {
      username,
      email,
      password,
    }
    console.log(data);

  }
  
  return (
    <View style={styles.container}>
     
      <Text>Bem-Vindo!</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Digite seu  nome:"
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu email"
      />    

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Digite sua senha"
       secureTextEntry={true}
      />    

      <TouchableOpacity style={styles.button} onPress={handleSignIn}> 
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
