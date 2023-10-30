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
          {isChecked && <Text>X</Text>}

        </TouchableOpacity>

        <Text>SIM</Text>
        <TouchableOpacity style={styles.checkbox} onPress={handleToggle}>
          {!isChecked && <Text>X</Text>}
        </TouchableOpacity>
        <Text>NÃO</Text>
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
    
    
  },

  text: {
    color: '#00563B', // Cor do texto quando a opção está selecionada
    fontWeight: 'bold',
  },
  unselectedText: {
    color: 'black ', // Cor do texto quando a opção não está selecionada
  },

});

export default Checkbox;
