const mysql = require('mysql'); 

const dbConfig = {
    host: process.env.APPONTA_DB_HOST,
    user: process.env.APPONTA_DB_USER,
    password: process.env.APPONTA_DB_PASSWORD,
    database: process.env.APPONTA_DB_NAME,
    port: process.env.APPONTA_DB_PORT
};

const conexion = mysql.createConnection(dbConfig);

conexion.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida con éxito');
});

module.exports = conexion;