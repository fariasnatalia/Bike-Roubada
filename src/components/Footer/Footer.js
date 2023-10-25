import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer  = () => {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    footer: {
      backgroundColor: '#17a469', // Cor de fundo do cabeçalho
      width: '100%',
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    footerText: {
      color: 'white', // Cor do texto do cabeçalho
      fontSize: 20,
      fontWeight: 'bold',
    },
  });


export default Footer;