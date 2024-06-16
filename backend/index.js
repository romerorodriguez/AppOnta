const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const conexion = require('./database');

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:8081' })); //192.168.1.68
app.use(express.json());

app.post('/register', (req, res) => {
    const { nombre, correo, contraseña, aceptaTerminos } = req.body;
    const query = 'INSERT INTO usuarios (nombre, email, contraseña, acepta_terminos) VALUES (?, ?, ?, ?)';
    conexion.query(query, [nombre, correo, contraseña, aceptaTerminos], (err, result) => {
        if (err) {
            console.error('Error al registrar el usuario:', err);
            res.status(500).send('Error al registrar el usuario');
        } else {
            console.log('Usuario registrado con éxito');
            res.status(200).send('Usuario registrado con éxito');
        }
    });
});

app.post('/login', (req, res) => {
    const { correo, contraseña } = req.body;
    const query = 'SELECT nombre FROM usuarios WHERE email =? AND contraseña =?';
    conexion.query(query, [correo, contraseña], (err, results) => {
        if (err) {
            console.error('Error al iniciar sesión:', err);
            res.status(500).send('Error al iniciar sesión');
        } else {
            if (results.length > 0) {
                const nombre = results[0].nombre;
                res.status(200).json({ nombre });
            } else {
                res.status(401).send('Credenciales incorrectas');
            }
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});