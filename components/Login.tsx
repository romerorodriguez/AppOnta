import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Background from './Background';
import { Feather } from '@expo/vector-icons';
<<<<<<< HEAD
import axios, { AxiosError } from 'axios';
=======
import axios from 'axios';
>>>>>>> cac461be2cb54c532cda9afcb6014a3d99382fa3

type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  Inicio: { nombre: string };
  RecuperarContrasena: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type LoginProps = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async () => {
    setErrorMessage('');
    if (!correo || !contraseña) {
      setErrorMessage('Favor de completar todos los campos');
      return;
    }

    try {
<<<<<<< HEAD
      const response = await axios.post('http://localhost:3000/auth/login', { 
=======
      const response = await axios.post('http://localhost:3000/login', { 
>>>>>>> cac461be2cb54c532cda9afcb6014a3d99382fa3
        correo,
        contraseña,
      });
      const { nombre } = response.data;
      console.log('Inicio de sesión exitoso');
      navigation.navigate('Inicio', { nombre });
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data);
        } else {
          Alert.alert('Error al iniciar sesión', 'Credenciales incorrectas');
        }
      } else {
        Alert.alert('Ocurrió un error inesperado. Por favor, inténtalo de nuevo.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={[styles.texto]}>Inicia Sesión</Text>
      <View style={styles.formContainer}>
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
        <Text style={styles.olvidasteContraseñaText} onPress={() => navigation.navigate('RecuperarContrasena')}>
          ¿Olvidaste tu contraseña?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Inicia Sesión</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.registrarText}>
        ¿No tienes una cuenta?
        <Text style={styles.boldText} onPress={() => navigation.navigate('Registro')}>
          {' '}
          Regístrate
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
    justifyContent: 'center',
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
    marginBottom: 16,
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
    marginBottom: 4,
  },
  eyeIcon: {
    padding: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#00C29D',
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
  registrarText: {
    color: '#01063E',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'regular',
  },
  olvidasteContraseñaText: {
    color: '#01063E',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'right',
  },
  errorText: {
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 15,
  },
});

export default Login;