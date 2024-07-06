const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Ruta para crear una nueva categoría
router.post('/create', categoryController.createCategory);

// Ruta para obtener todas las categorías de un usuario
router.get('/:userId', categoryController.getCategoriesByUser);

module.exports = router;