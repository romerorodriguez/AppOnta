//conexion a base de datos

 const mysql = require('mysql');

 const conexion = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     port: '3307',
     password: '122333',
     database: 'AppOnta' //apponta
 });

 conexion.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida y con éxito');
})

module.exports = conexion;