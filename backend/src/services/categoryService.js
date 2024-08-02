const db = require('./database/database');

const createCategory = async (title, icono, color, id_user) => {
    const query = 'INSERT INTO categorias (title, icono, color, id_user) VALUES (?, ?, ?, ?)';
    const values = [title, icono, color, id_user];
    try {
        const [result] = await db.execute(query, values);
        return { id_category: result.insertId, title, icono, color, id_user };
    } catch (error) {
        throw new Error('Error al crear la categoría: ' + error.message);
    }
};

const getCategories = async (id_user) => {
    const query = 'SELECT * FROM categorias WHERE id_user = ?';
    try {
        const [rows] = await db.execute(query, [id_user]);
        return rows;
    } catch (error) {
        throw new Error('Error al obtener las categorías: ' + error.message);
    }
};

module.exports = {
    createCategory,
    getCategories,
};