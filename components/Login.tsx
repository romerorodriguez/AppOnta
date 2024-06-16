import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Background from './Background';
import { fontStyles } from '../styles';
import axios from 'axios';
//autenticacion de usuarios con firebase
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from '../backend/firebase/authentication';

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

  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);
  
  const handleSignIn = async () => {
    setErrorMessage('');
    if (!correo || !contraseña) {
      setErrorMessage('Favor de completar todos los campos');
      return;
    }
    if (!correo) {
      setErrorMessage('Complete el campo de correo');
      return;
    }
    if (!contraseña) {
      setErrorMessage('Complete el campo de contraseña');
      return;
    }

    try {
      //const user = await signInWithEmailAndPassword(auth, correo, contraseña);
      //console.log(user);
      //verificacion a la base de datos en mysql
      const response = await axios.post('http://localhost:3000/login', { // Usa la IP de tu máquina
        correo,
        contraseña,
      });
      const { nombre } = response.data;
      console.log('Inicio de sesión exitoso');
      navigation.navigate('Inicio', { nombre });
    } catch (error) {
      console.error(error);
      Alert.alert('Error al iniciar sesión', 'Credenciales incorrectas');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Background />
      <View style={styles.logoContainer}>
        {/* <Image source={require('../assets/logo.jpg')} style={styles.logo} /> */}
      </View>
      <Text style={[styles.texto, fontStyles.twCenMT]}>Inicio de Sesión</Text>
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
          <TextInput
            style={styles.input}
            placeholder="********* "
            placeholderTextColor="#ffffff"
            secureTextEntry={true}
            onChangeText={setContraseña}
            value={contraseña}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
          <Text style={styles.olvidasteContraseñaText} onPress={() => navigation.navigate('RecuperarContrasena')}>¿Olvidaste tu contraseña?</Text>
        </View>
      </View>
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Inicia Sesión</Text>
      </TouchableOpacity>
      <Text style={styles.registrarText}>
        ¿No tienes una cuenta?
        <Text style={styles.boldText} onPress={() => navigation.navigate('Registro')}> Regístrate</Text>
      </Text>
    </KeyboardAvoidingView>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
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
  inputLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#00C29D',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: 180,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
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
    marginTop: 0,
    textAlign: 'center',
    fontWeight: 'bold',
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