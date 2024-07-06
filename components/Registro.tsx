import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Background from './Background';
import { Checkbox } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  Inicio: { nombre: string };
};

type RegistroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Registro'>;
type RegistroScreenRouteProp = RouteProp<RootStackParamList, 'Registro'>;

type RegistroProps = {
  navigation: RegistroScreenNavigationProp;
  route: RegistroScreenRouteProp;
};

const Registro: React.FC<RegistroProps> = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistro = async () => {
    setErrorMessage('');
    if (!nombre || !correo || !contraseña) {
      setErrorMessage('Favor de completar todos los campos');
      return;
    }

    if (!aceptaTerminos) {
      setErrorMessage('Favor de aceptar términos y condiciones');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        nombre,
        correo,
        contraseña,
        aceptaTerminos,
      });
      console.log(response.data);
      navigation.navigate('Inicio', { nombre });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        Alert.alert('Error al registrar el usuario');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={[styles.texto]}>Registro</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce tu nombre"
            placeholderTextColor="#ffffff"
            onChangeText={setNombre}
            value={nombre}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Contraseña</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="*********"
              placeholderTextColor="#ffffff"
              secureTextEntry={!showPassword}
              onChangeText={setContraseña}
              value={contraseña}
            />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
              <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce tu Correo Electrónico"
            placeholderTextColor="#ffffff"
            onChangeText={setCorreo}
            value={correo}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox.Item
            label=""
            status={aceptaTerminos ? 'checked' : 'unchecked'}
            onPress={() => setAceptaTerminos(!aceptaTerminos)}
            color="#01063E"
            uncheckedColor="#01063E"
          />
          <Text style={styles.checkboxLabel}>Acepto Términos y Condiciones</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleRegistro}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.registrarText}>
        ¿Ya tienes una cuenta?
        <Text style={styles.boldText} onPress={() => navigation.navigate('Login')}>
          {' '}
          Inicia Sesión
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  formContainer: {
    width: 300,
    backgroundColor: '#0094F1',
    padding: 20,
    borderRadius: 10,
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 14,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#0094F1',
    color: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    padding: 0,
    fontSize: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0094F1',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
  },
  passwordInput: {
    flex: 1,
    height: 40,
    color: '#ffffff',
    padding: 0,
    fontSize: 15,
  },
  inputLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eyeIcon: {
    padding: 10,
  },
  checkboxLabel: {
    color: '#01063E',
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    borderRadius: 30,
    width: 180,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  errorText: {
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 15,
  },
  registrarText: {
    color: '#01063E',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'regular',
  },
});

export default Registro;