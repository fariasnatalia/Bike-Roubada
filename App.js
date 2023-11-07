import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera'; // importação da câmera
import { FontAwesome } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';


export default function App() { // Renomeando a função do componente
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back); // define qual câmera usar, está setado na traseira
  const [hasPermission, setHasPermission] = useState(null); // permissão para acessar a câmera do celular
  const


  useEffect(() => {
    (async () => { //função anônima
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={{ flex: 1 }}
        type={type}
      >
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity
            Style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back //condição de câmerafrontal e trazeira
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
                )
            }}
          >
            <Text style={{ fontSize: 20, margimBottom: 13,  color: '#000' }}>Trocar Câmera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity>

      </TouchableOpacity>
        <FontAwesome name="camera" size={23} color="#fff"/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cam: {
    flex: 1,
    justifyContent: 'center',
  },
});