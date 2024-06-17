import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Background from './Background';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './types';
import { StackNavigationProp } from '@react-navigation/stack';

type CrearArticuloNavigationProp = StackNavigationProp<RootStackParamList, 'CrearArticulo'>;

const CrearArticulo = () => {
  const navigation = useNavigation<CrearArticuloNavigationProp>();

  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Nuevo Artículo</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description1}>
          Crear un nuevo artículo
        </Text>
        <Text style={styles.description2}>
          Elija una categoría, agregando un toque de personalización a su artículo.
        </Text>
      </View>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="Categoría"
        />
        <TextInput
          style={styles.input}
          placeholder="Documentos importantes"
        />
        <TextInput
          style={styles.input}
          placeholder="Carpeta de archivos en el escritorio o en un archivador"
        />
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>
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
    textAlign: 'left',
    marginHorizontal: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description1: {
    textAlign: 'justify',
    marginHorizontal: 20,
    color: 'white',
    fontSize: 20,
  },
  description2: {
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
  saveButton: {
    backgroundColor: '#ffa500',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 50,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#000000', // Texto negro
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CrearArticulo;