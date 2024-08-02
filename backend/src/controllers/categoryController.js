const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
    const { title, icono, color } = req.body;
    const { id_user } = req.user;
    try {
        const newCategory = await categoryService.createCategory(title, icono, color, id_user);
        res.status(201).json({ message: 'Categoría creada con éxito', category: newCategory });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la categoría', error: error.message });
    }
};

const getCategories = async (req, res) => {
    const { id_user } = req.params;
    try {
        const categories = await categoryService.getCategories(id_user);
        res.status(200).json({ message: 'Categorías obtenidas con éxito', categories });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorías', error: error.message });
    }
};

module.exports = {
    createCategory,
    getCategories,
};