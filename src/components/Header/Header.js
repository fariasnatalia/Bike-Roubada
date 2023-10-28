import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%', //largura
    backgroundColor: '#059669', // Cor de fundo do cabeçalho
    height: 80, // Altura do cabeçalho
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  
  // Para posicionar o texto do cabeçalho 
  headerText: {
    color: '#fff', // Cor do texto
    fontSize: 25, // Tamanho da fonte
    fontWeight: 'bold',
    
  },
});

export default Header;
