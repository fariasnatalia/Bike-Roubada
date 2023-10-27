import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';


import Footer from './src/components/Footer/Footer';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'




const schema = yup.object({
  username: yup.string().required("Informe seu nome!"),
  email: yup.string().email("Email Inválido!").required("Informe um email válido!"),
  telefone: yup.string().min(12, "A senha deve conter pelo menos 6 dígitos!").required("Informe sua senha!"), // Adicionando validação para a senha
  model: yup.string().required("Informe o Modelo/Marca da Bicicleta * "),
})




export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema) //esquema de validação 
  })



  function handleSignIn(data) { //trago os valores dem forma de objeto para as UserStats
    console.log(data); // e exibo no console
  }

  return (

    <View style={styles.container}>
      <Text>Olá seja Bem-Vindo(a)!</Text>
      
      <Image
        source={require('./assets/image-bike.jpeg')} //imagem
        style={styles.image}
      />

      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
           
            <Text style={styles.textLabel}>Nome: *</Text>
            <TextInput
              style={[
                styles.input, {
                  borderWidth: errors.username && 2,
                  borderColor: errors.username && '#ff375b'
                }
              ]}
              onChangeText={onChange}
              onBlur={onBlur} //chamado quando o texto input é tocado
              value={value}
              placeholder="*  Nome e Sobrenome:" />
          </>
        )}// quando o erro for (true) ele vai renderizar essa mensagem!
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
      <>  
        <Text style={styles.textLabel}>*  Email: </Text>
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.email && 2,
                borderColor: errors.email && '#ff375b' //caso tenha erros usar cor vermelha na borda 
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o texto input é tocado
            value={value}
            placeholder="Ex: Maria@gmail.com " />
      </>
        )}
      />

      <Controller
        control={control}
        name="telefone"
        render={({ field: { onChange, onBlur, value } }) => (
      <>
        
      <Text style={styles.textLabel}>*  Telefone para contato: </Text>
        <TextInput
            style={[
              styles.input, {
                borderWidth: errors.telefone && 2,
                borderColor: errors.telefone && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o texto input é tocado
            value={value}
            placeholder="(99) 9 9999-9999"/>
        </>
        )}
      />

      {/* Cadastro da bicicleta*/}

      <Controller
        control={control}
        name="model"
        render={({ field: { onChange, onBlur, value } }) => (
      <>
        
      <Text style={styles.textLabel}>*  Modelo ou  Marca da Bicicleta:</Text>
        <TextInput
            style={[
              styles.input, {
                borderWidth: errors.model && 2,
                borderColor: errors.model && '#ff375b' //caso tenha erros usar cor vermelha na borda 
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o texto input é tocado
            value={value}
            placeholder="Ex: Aro 29 Caloi, Sense, Monark etc..." />
          </>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}
      >
        <Text style={styles.textButton}>Finalizar</Text>
      </TouchableOpacity>
      
      <Footer />     
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#f4ebed', // Cor de fundo
    alignItems: 'center',

  },

  textButton: { //Texto do Botão
    fontSize: 20, // Reduza o tamanho da fonte 
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff', // Cor do texto do cabeçalho
    alignItems: 'center',
  },

  button: { //Botão
    backgroundColor: '#17a469', // Cor do botão
    width: '50%', //largura
    height: 40, //altura
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  description: {
    color: '#000',
    marginBottom: 18, // Espaço abaixo do texto
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,

  },

  textLabel: { //Estilo do texto Label
    fontWeight: 'bold',
  },

  labelError: {
    alignItems: 'center',
    color: '#ff375b',
    marginBottom: '8',
  },

  image: {
    width: '500%', //largura
    height: 50, // ALtura
    resizeMode: 'contain',
  }

});