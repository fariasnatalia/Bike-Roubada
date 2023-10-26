import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions  } from 'react-native';


// import Header from './src/components/Header/Header'; // Importe o componente Header
// import Footer  from './src/components/Footer/Footer';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'




// const descriptionFontSize = windowWidth < 500 ? 24 : 17; // Define o tamanho da fonte com base na largura da tela


const schema = yup.object({
  username: yup.string().required("Informe seu nome!"),
  email: yup.string().email("Email Inválido!").required("Informe um email válido!"),
  password: yup.string().min(6,"A senha deve conter pelo menos 6 dígitos!").required("Informe sua senha!"), // Adicionando validação para a senha
  model: yup.string().required("Informe o Modelo/Marca da Bicicleta * "),
})

export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm ({
    resolver: yupResolver(schema) //esquema de validação 
  })
  
  

  function handleSignIn(data) { //trago os valores dem forma de objeto para as UserStats
      console.log(data); // e exibo no console
    }
    
 
    
  return (

      
    <View style={styles.container}>
     {/* importando components */}
      
      <Text>Olá seja Bem-Vindo(a)!</Text>
      
      
      
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
              placeholder="Digite o seu Nome *"
            /> 
         )}// quando o erro for (true) ele vai renderizar essa mensagem!
        />
      

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
              placeholder="Digite o seu Email *"
            /> 
         )}
      />  
      


       <Controller
         control={control}
         name="password"
         render={({ field: { onChange, onBlur, value} }) => (
          <TextInput
              style={[
                styles.input, {
                  borderWidth: errors.password && 2,
                  borderColor: errors.password && '#ff375b'
              }]}
              onChangeText={onChange}
              onBlur={onBlur} //chamado quando o texto input é tocado
              value={value}
              placeholder="Digite sua Senha *"
              secureTextEntry={true} //máscara da senha
            /> 
         )}
      />  
      

      {/* Cadastro da bicicleta*/}
      
      
      <Controller
         control={control}
         name="model"
         render={({ field: { onChange, onBlur, value} }) => (
          <TextInput
          style={[
            styles.input, {
              borderWidth: errors.model && 2, //caso tenha erros usar borda
              borderColor: errors.model && '#ff375b' //caso tenha erros usar cor vermelha na borda 
          }]}
              onChangeText={onChange}
              onBlur={onBlur} //chamado quando o texto input é tocado
              value={value}
              placeholder="Informe o Modelo da Bicicleta *"
            /> 
         )}
      />  
   
    
      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}
> 
        <Text>Cadastrar</Text>
      </TouchableOpacity>
       {/* importando components */}{/*importando o Footer*/}
    
    </View>
  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#f1eef0', // Cor de fundo
    alignItems: 'center',
   
  },

  title: { //olá seja bem vin....
    fontSize: 20, // Reduza o tamanho da fonte 
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#061325',
  },
  
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
    alignItems: 'center',
    color: '#ff375b',
    marginBottom: '8',
  }
  

});