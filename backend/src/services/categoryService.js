const db = require('./database/database');

const createCategory = async (id_user, title, color, icon) => {
    const query = 'INSERT INTO categorias (id_user, title, color, icon) VALUES (?, ?, ?, ?)';
    const values = [id_user, title, color, icon];
    await db.query(query, values);
};

const getCategories = async (id_user) => {
    const query = 'SELECT * FROM categorias WHERE id_user = ?';
    const [rows] = await db.query(query, [id_user]);
    return rows;
};

module.exports = {
    createCategory,
    getCategories
};