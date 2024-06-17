import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Background from './Background';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';

type RouteParams = {
  nombre: string;
};

type InicioScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Inicio'>; // Define el tipo de navegación

const Inicio = () => {
  const navigation = useNavigation<InicioScreenNavigationProp>(); // Usa el tipo de navegación
  const route = useRoute();
  const { nombre } = route.params as RouteParams; // Obtenemos el nombre del usuario registrado

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleCrearCategoria = () => {
    navigation.navigate('CrearCategoria');
    setShowOptions(false); // Oculta las opciones después de navegar
  };

  const handleCrearArticulo = () => {
    navigation.navigate('CrearArticulo');
    setShowOptions(false); // Oculta las opciones después de navegar
  };

  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.headerContainer}>
        <View>
          <View style={styles.textWithIconContainer}>
            <Text style={styles.text}>Hola,</Text>
            <Ionicons name="menu" size={32} color="#ffffff" style={styles.icon} />
          </View>
          <Text style={styles.text}>{nombre}</Text> {/* Mostramos el nombre del usuario */}
        </View>
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={24} color="#01063E" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor="#01063E"
            selectionColor="#01063E"
          />
        </View>
        <View style={styles.categoriesContainer}>
          <Text style={styles.text3}>Categorías</Text>
          <TouchableOpacity onPress={toggleOptions}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#ffffff" style={styles.categoriesIcon} />
          </TouchableOpacity>
          {showOptions && (
            <View style={styles.optionsContainer}>
              <TouchableOpacity onPress={handleCrearCategoria}>
                <Text style={styles.option}>Crear Categoria</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCrearArticulo}>
                <Text style={styles.option}>Crear Articulo</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
  },
  textWithIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  icon: {
    marginLeft: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#01063E',
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Asegura que los elementos estén en extremos opuestos
    marginTop: 20,
  },
  text3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  categoriesIcon: {
    marginLeft: 10,
  },
  optionsContainer: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    bottom: 0,
    width: '100%',
  },
  option: {
    fontSize: 16,
    color: '#01063E',
    marginBottom: 5,
  },
});

export default Inicio;