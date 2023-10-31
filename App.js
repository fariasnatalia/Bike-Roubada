import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';




import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


import Footer from './src/components/Footer/Footer';
import Header from './src/components/Header/Header';
import Checkbox from './src/components/CheckBox';
import LoginScreen from './src/components/Login/LoginScreen';


const schema = yup.object({
  username: yup.string().required("Informe seu nome!"),
  email: yup.string().email("Email Inválido!").required("Informe um email válido!"),
  phone: yup.string()
    .matches(/^\d{4}[-\s]?\d{4}$/, "Formato inválido para número de telefone")
    .required("Informe um número válido!"),// Adicionando validação para a senha
  model: yup.string().required("Informe o Modelo/Marca da Bicicleta * "),
})



export default function App() {
  const [preference, setPreference] = useState(true); //Select

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema) //esquema de validação 
  })

  function handleSignIn(data) { //trago os valores dem forma de objeto para as UserStats
    console.log(data); // e exibo no console
  }

  return (

    <View style={styles.container}>
      <Header title="Bike Roubada" />
      
      <Text style={styles.welcomeText}>Olá seja Bem-Vindo(a)!</Text>
      <Image
        source={require('./assets/image-bike.jpeg')} //imagem
        style={styles.image} />
        {/* <LoginScreen /> */}
      

      {/* Conteúdo da sua aplicação */}

      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, onBlur, value } }) => (
          <>

            <Text style={styles.textLabel}>*  Nome:</Text>
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
        )}
      // quando o erro for (true) ele vai renderizar essa mensagem!
      />
      {errors.username && <Text style={styles.labelError}>{errors.username.message}</Text>}

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
      {errors.email && <Text style={styles.labelError}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, onBlur, value } }) => (
          <>

            <Text style={styles.textLabel}>*  Telefone para contato: </Text>
            <TextInput
              style={[
                styles.input, {
                  borderWidth: errors.phone && 2,
                  borderColor: errors.phone && '#ff375b'
                }
              ]}
              onChangeText={onChange}
              onBlur={onBlur} //chamado quando o texto input é tocado
              value={value}
              placeholder="(99) 9 9999-9999" />
          </>
        )}
      />
      {errors.phone && <Text style={styles.labelError}>{errors.phone.message}</Text>}

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
      {errors.model && <Text style={styles.labelError}>{errors.model.message}</Text>}
      <Checkbox />

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
    backgroundColor: '#2C3333',// Cor de fundo
    alignItems: 'center',

  },

  welcomeText: { // estilo do texo de boas vinda
    fontSize: 30, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte
    color: '#10b981',
    marginTop: 20, // Margem superior
    textAlign: 'center', // Alinhamento de texto ao centro
  },

  textButton: { //Texto do Botão
    fontSize: 20, // Reduza o tamanho da fonte 
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff', // Cor do texto do cabeçalho
    alignItems: 'center',
  },

  button: { //Botão de castro
    backgroundColor: '#10b981', // Cor do botão
    width: '50%', //largura
    height: 40, //altura
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

  textLabel: { //Estilo do texto Label
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-start',
    marginStart: 45, // Espaçamento à esquerda
    marginEnd: 10,   // Espaçamento à direita 
  },

  labelError: { //Estilo do texto quando ocorre erro!
    alignItems: 'center',
    color: '#ff375b',
    marginBottom: '8',
  },

  image: {
    width: 100, // Defina a largura da imagem
    height: 100, // Defina a altura da imagem
    resizeMode: 'contain',
    borderRadius: 60, // Torna as bordas arredondadas (metade da largura/altura)
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10, // Alinha a imagem à esquerdoda tela
  },





});