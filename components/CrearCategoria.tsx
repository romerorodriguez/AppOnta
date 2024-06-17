import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Background from './Background'; 
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';

type CrearCategoriaNavigationProp = StackNavigationProp<RootStackParamList, 'CrearCategoria'>;

const CrearCategoria = () => {
  const navigation = useNavigation<CrearCategoriaNavigationProp>();

  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Categorías</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description0}>
          Crear una nueva categoría
        </Text>
        <Text style={styles.description}>
          Puede personalizar sus categorías con íconos y colores únicos,
          agregando un toque personal a su organización.
        </Text>
        
        <View style={styles.box}>
          <TextInput
            style={styles.input}
            placeholder="Escribe el nombre de la categoría"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="camera" size={24} color="black" />
              <Text>Icono</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View style={styles.colorPreview}></View>
              <Text>Color</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tittle: {
    textAlign: 'left',
    marginHorizontal: 20,
    color: 'white',
  },
  description0: {
    textAlign: 'justify',
    marginHorizontal: 20,
    color: 'white',
    fontSize: 20,
  },
  description: {
    textAlign: 'center',
    marginHorizontal: 20,
    color: 'white',
    fontSize: 16,
  },
  box: {
    backgroundColor: '#66cdaa',
    padding: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderBlockColor: '#000000',
  },
  colorPreview: {
    width: 24,
    height: 24,
    backgroundColor: 'red',
    borderRadius: 12,
    marginRight: 5,
  },
  saveButton: {
    backgroundColor: '#ffa500',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 50,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CrearCategoria;