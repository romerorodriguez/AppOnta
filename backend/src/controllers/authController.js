const authService = require('../services/authService');

const register = async (req, res) => {
    const { nombre, correo, contraseña, aceptaTerminos } = req.body;
    try {
        const result = await authService.registerUser(nombre, correo, contraseña, aceptaTerminos);
        res.status(200).send('Usuario registrado con éxito');
    } catch (err) {
        console.error('Error al registrar el usuario:', err);
        res.status(500).send('Error al registrar el usuario');
    }
};

const login = async (req, res) => {
    const { correo, contraseña } = req.body;
    try {
        const user = await authService.loginUser(correo, contraseña);
        res.status(200).json(user);
    } catch (err) {
        console.error('Error al iniciar sesión:', err);
        res.status(500).send('Error al iniciar sesión');
    }
};

module.exports = {
    register,
    login,
};