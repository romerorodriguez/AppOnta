const conexion = require('../services/database/database');

const registerUser = (nombre, correo, contraseña, aceptaTerminos) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO usuarios (nombre, email, contraseña, acepta_terminos) VALUES (?, ?, ?, ?)';
        conexion.query(query, [nombre, correo, contraseña, aceptaTerminos], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

const loginUser = (correo, contraseña) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT nombre FROM usuarios WHERE email =? AND contraseña =?';
        conexion.query(query, [correo, contraseña], (err, results) => {
            if (err) {
                return reject(err);
            }
            if (results.length > 0) {
                const user = { nombre: results[0].nombre };
                resolve(user);
            } else {
                reject('Credenciales incorrectas');
            }
        });
    });
};

module.exports = {
    registerUser,
    loginUser,
};