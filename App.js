import React, { useState }  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions  } from 'react-native';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


const windowWidth = Dimensions.get('window').width;

const descriptionFontSize = windowWidth < 500 ? 24 : 17; // Define o tamanho da fonte com base na largura da tela


const schema = yup.object({
  username: yup.string().required("Informe seu nome!"),
  email: yup.string().email("Email Inválido!").required("Informe um email válido!"),
  password: yup.string().min(6,"A senha deve conter pelo menos 6 dígitos!").required("Informe sua senha!"), // Adicionando validação para a senha
})

export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm ({
    resolver: yupResolver(schema)
  })
  
  

  function handleSignIn(data) { //trago os valores dem forma de objeto para as UserStats
      console.log(data); // e exibo no console
    }
    
  
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Olá seja Bem-Vindo(a)!</Text>
      
        <Text style={[styles.description, { fontSize: descriptionFontSize }]}>
          🚲 Para o seu primeiro acesso à plataforma, é necessário criarmos primeiro o seu cadastro!
        </Text>
      
      <Controller
         control={control}
         name="username"
         render={({ field: { onChange, onBlur, value} }) => (
          <TextInput
          style={[
            styles.input, {
              borderWidth: errors.username && 1,
              borderColor: errors.username && '#ff375b'
          }]}
              onChangeText={onChange}
              onBlur={onBlur} //chamado quando o texto input é tocado
              value={value}
              placeholder="Digite o seu Nome"
            /> 
         )}// quando o erro for (true) ele vai renderizar essa mensagem!
        />
      {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>} 

      <Controller
         control={control}
         name="email"
         render={({ field: { onChange, onBlur, value} }) => (
          <TextInput
          style={[
            styles.input, {
              borderWidth: errors.email && 1, //caso tenha erros usar borda
              borderColor: errors.email && '#ff375b' //caso tenha erros usar cor vermelha na borda 
          }]}
              onChangeText={onChange}
              onBlur={onBlur} //chamado quando o texto input é tocado
              value={value}
              placeholder="Digite o seu Email"
            /> 
         )}
      />  
      {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>} 


       <Controller
         control={control}
         name="password"
         render={({ field: { onChange, onBlur, value} }) => (
          <TextInput
              style={[
                styles.input, {
                  borderWidth: errors.password && 1,
                  borderColor: errors.password && '#ff375b'
              }]}
              onChangeText={onChange}
              onBlur={onBlur} //chamado quando o texto input é tocado
              value={value}
              placeholder="Digite sua senha"
              secureTextEntry={true} //máscara da senha
            /> 
         )}
      />  
      {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}   

      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}
> 
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1eef0', // Cor de fundo
    alignItems: 'center',
    justifyContent: 'center',
  },//cor da tela 

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#061325', // Cor do texto
  },//cor do título

  description: {
    color: '#061325',
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
  button: {
    backgroundColor: 'green', // Cor do botão
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  labelError:{
    alignSelf: 'flex-Start',
    color: '#ff375b',
    marginBottom: '8',
  }

});