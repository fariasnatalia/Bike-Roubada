import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Bike Roubada</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#17a469', // Cor de fundo do cabeçalho
      width: '100%',
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      color: 'white', // Cor do texto do cabeçalho
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

export default Header;
