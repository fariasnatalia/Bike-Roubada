import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';



function Checkbox() {

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };


  return (
    <>
      <View>
        <Text style={styles.text}  
        >  A bicicleta foi roubada? marque a opção corresponde!</Text>
      </View>

      <View style={styles.container}>
  <TouchableOpacity style={styles.checkbox} onPress={handleToggle}>
    {isChecked && <Text style={styles.selectedText}>X</Text>}
  </TouchableOpacity>
  <Text style={styles.greenText}>SIM</Text>
  <TouchableOpacity style={styles.checkbox} onPress={handleToggle}>
    {!isChecked && <Text style={styles.selectedText}>X</Text>}
  </TouchableOpacity>
  <Text style={styles.greenText}>NÃO</Text>
</View>
    </>

  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    marginBottom: 30,
  
    
  },
  
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 3,
    borderColor: '#10b981',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    color: 'green',
    
    
    
  },
  greenText: {
    color: '#10b981',
    fontWeight: 'bold',
  },


  text: {
    color: 'white', // Cor do texto quando a opção está selecionada
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff', // Cor do texto quando a opção não está selecionada
  },

});

export default Checkbox;
