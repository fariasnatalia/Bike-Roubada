import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer  = () => {
    return (
      <View style={styles.footer}>
         <Text style={styles.footerText}>Projeto Extensionista Universidade Estácio de Sá - 2023</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    footer: {
      backgroundColor: '#17a469', // Cor de fundo do cabeçalho
      width: '100%', //largura
      height: 60, //altura
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
     
     // Para posicionar o rodapé no final
     
    },
    footerText: {
      color: '#fff', // Cor do texto footer
      fontSize: 14,
      fontWeight: 'Arial',
      position: 'fixed',
    },

  });


export default Footer;