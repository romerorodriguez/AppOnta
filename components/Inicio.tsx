import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Background from './Background';
import { Ionicons } from '@expo/vector-icons';

type RouteParams = {
  nombre: string;
};

const Inicio = () => {
  const route = useRoute();
  const { nombre } = route.params as RouteParams; // Obtenemos el nombre del usuario registrado

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
          <Ionicons name="ellipsis-horizontal" size={24} color="#ffffff" style={styles.categoriesIcon} />
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
});

export default Inicio;