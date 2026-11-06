import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [mensaje, setMensaje] = useState('¡Estoy aprendiendo React Native!');

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Mi primera aplicación</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>

      <Pressable
        style={styles.boton}
        onPress={() => setMensaje('¡Hola soy Susana y estoy aprendiendo hacer mi primera aplicacion!')}
      >
        <Text style={styles.textoBoton}>Presioname</Text>
      </Pressable>
      <Pressable
        style={styles.boton2}
        onPress={() => setMensaje('¡Esta aplicacion es para aprender de desarrollo de software!')}
      >
        <Text style={styles.textoBoton}>Boton</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#2563eb',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#173b75',
    marginBottom: 18,
  },
  mensaje: {
    fontSize: 17,
    marginBottom: 22,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#2563eb',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  boton2: {
    backgroundColor: '#2563eb',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});