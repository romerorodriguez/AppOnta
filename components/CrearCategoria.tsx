import React, { useState } from 'react';
<<<<<<< HEAD
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native';
=======
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';
>>>>>>> cac461be2cb54c532cda9afcb6014a3d99382fa3
import Background2 from './Background2';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { icons } from './icons/icons';
import { colors } from './colors/colors';

type CrearCategoriaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CrearCategoria'>;

const CrearCategoria = () => {
  const navigation = useNavigation<CrearCategoriaScreenNavigationProp>();
  const [showModal, setShowModal] = useState(false);
<<<<<<< HEAD
  const [showIconModal, setShowIconModal] = useState(false);
  const [showColorModal, setShowColorModal] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [categoryName, setCategoryName] = useState('');
=======
  const [successMessage, setSuccessMessage] = useState('');
>>>>>>> cac461be2cb54c532cda9afcb6014a3d99382fa3

  const handleBack = () => {
    navigation.goBack();
  };

  const handleGuardar = () => {
<<<<<<< HEAD
    // Aquí iría la lógica para guardar la categoría en la base de datos
    setSuccessMessage('Guardado con éxito');
    setShowModal(true);
=======
    setSuccessMessage('Guardado con éxito');
    setShowModal(true);
  
>>>>>>> cac461be2cb54c532cda9afcb6014a3d99382fa3
  };

  const closeModal = () => {
    setShowModal(false);
    setSuccessMessage(''); // Limpiar el mensaje de éxito
    navigation.navigate('Inicio'); // Navegar a la lista de categorías después de cerrar el modal
  };
<<<<<<< HEAD

  const handleIconSelection = (icon: string) => {
    setSelectedIcon(icon);
    setShowIconModal(false);
  };

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
    setShowColorModal(false);
  };
=======
>>>>>>> cac461be2cb54c532cda9afcb6014a3d99382fa3

  return (
    <View style={styles.container}>
      <Background2 />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Nueva Categoría</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Crear una nueva categoría</Text>
        <Text style={styles.instructions}>
          Puede personalizar sus categorías con íconos y colores únicos,
          agregando un toque personal a su organización.
        </Text>
      </View>
      <View style={styles.box}>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          placeholder="Escribe el nombre de la categoría"
<<<<<<< HEAD
          value={categoryName}
          onChangeText={setCategoryName}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setShowIconModal(true)}>
            <Text style={styles.buttonText}>Icono</Text>
            <Ionicons name={selectedIcon || 'happy-outline'} size={24} color="black" style={styles.rightIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setShowColorModal(true)}>
            <Text style={styles.buttonText}>Color</Text>
            <View style={[styles.colorPreview, { backgroundColor: selectedColor || 'deeppink' }]} />
=======
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="camera" size={24} color="black" />
            <Text style={{ marginLeft: 10 }}>Icono</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.colorPreview}></View>
            <Text style={{ marginLeft: 10 }}>Color</Text>
>>>>>>> cac461be2cb54c532cda9afcb6014a3d99382fa3
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleGuardar}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>

<<<<<<< HEAD
      {/* Modal de selección de icono */}
      <Modal
        transparent={true}
        visible={showIconModal}
        animationType="slide"
        onRequestClose={() => setShowIconModal(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setShowIconModal(false)} />
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.iconList}>
            {icons.map((item) => (
              <TouchableOpacity key={item.name} style={styles.iconItem} onPress={() => handleIconSelection(item.name)}>
                <Ionicons name={item.name} size={32} color="#01063E" />
                <Text style={styles.iconLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>

      {/* Modal de selección de color */}
      <Modal
        transparent={true}
        visible={showColorModal}
        animationType="slide"
        onRequestClose={() => setShowColorModal(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setShowColorModal(false)} />
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.colorList}>
            {colors.map((item) => (
              <TouchableOpacity key={item.color} style={styles.colorItem} onPress={() => handleColorSelection(item.color)}>
                <View style={[styles.colorPreview, { backgroundColor: item.color }]} />
                <Text style={styles.colorLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>

=======
>>>>>>> cac461be2cb54c532cda9afcb6014a3d99382fa3
      {/* Modal de éxito */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal as () => void} // Asegurar que closeModal coincida con la firma esperada
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <View style={styles.successCircle}>
              <Ionicons name="checkmark" size={60} color="white" />
            </View>
            <Text style={styles.modalText}>{successMessage}</Text>
            <Pressable style={styles.modalCloseButton} onPress={closeModal}>
              <Ionicons name="close" size={24} color="#01063E" />
            </Pressable>
          </View>
        </View>
      </Modal>
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
  backButton: {
    marginRight: 10,
    marginTop: 50,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
  },
  content: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  instructions: {
    textAlign: 'left',
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  box: {
    backgroundColor: '#66cdaa',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    backgroundColor: '#ffffff',
    borderColor: 'black', // Borde negro
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
<<<<<<< HEAD
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black', // Borde negro
    justifyContent: 'space-between',
    width: '45%',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    marginRight: 5, // Ajusta la separación entre el texto y el icono
  },
  rightIcon: {
    marginLeft: 5, // Ajusta la separación entre el icono y el borde
=======
    borderRadius: 15,
>>>>>>> cac461be2cb54c532cda9afcb6014a3d99382fa3
  },
  colorPreview: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginLeft: 5, // Ajusta la separación entre el color y el borde
  },
  saveButton: {
    backgroundColor: '#ffa500',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',
  },
  saveButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
<<<<<<< HEAD
  // Estilos para los modales
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    marginTop: 'auto',
    marginBottom: 'auto',
    maxHeight: '80%',
  },
  iconList: {
    alignItems: 'center',
  },
  iconItem: {
    alignItems: 'center',
    marginBottom: 10,
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 12,
  },
  colorList: {
    alignItems: 'flex-start',
  },
  colorItem: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  colorLabel: {
    marginTop: 5,
    fontSize: 12,
  },
=======
  // Estilos para el modal
>>>>>>> cac461be2cb54c532cda9afcb6014a3d99382fa3
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
<<<<<<< HEAD
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  successCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#0B610B',
=======
    padding: 20,
    borderRadius: 10,
    width: '80%', // Ajusta el ancho según necesites
    maxHeight: '80%', // Ajusta la altura máxima según necesites
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#01063E',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#00C29D',
>>>>>>> cac461be2cb54c532cda9afcb6014a3d99382fa3
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
<<<<<<< HEAD
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalCloseButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    elevation: 2,
=======
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
>>>>>>> cac461be2cb54c532cda9afcb6014a3d99382fa3
  },
});

export default CrearCategoria;