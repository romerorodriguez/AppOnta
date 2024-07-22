const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
    const { title, color, icon } = req.body;
    const { id_user } = req.user; // Obtener el id del usuario desde el request del usuario logueado
    if ( !title || !color || !icon || id_user ) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    try {
        await categoryService.createCategory( id_user, title, color, icon );
        res.status(201).json({ message: 'Categoría creada con éxito' });
    } catch (err) {
        res.status(500).json({ message: 'Error al crear la categoría', error: err });
    }
};

const getCategoriesByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const categories = await categoryService.getCategories(userId);
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener la categoría', error: err });
    }
};

module.exports = {
    createCategory,
    getCategoriesByUser,
};