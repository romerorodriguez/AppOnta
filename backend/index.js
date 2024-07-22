require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');
const conexion = require('./src/services/database/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:8081' }));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/categories', categoryRoutes);
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});