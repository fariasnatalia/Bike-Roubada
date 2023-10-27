import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Projeto Extensionista Universidade Estácio de Sá - 2023</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
    backgroundColor: '#17a469',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  headerText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'Arial',
  },
});

export default Header;
