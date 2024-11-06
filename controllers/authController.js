const db = require('../config/db'); // Asegúrate de tener conexión a la base de datos
const bcrypt = require('bcrypt');   // Para encriptar contraseñas

// Iniciar sesión
exports.login = (req, res) => {
    const { nombre_usuario, contrasena } = req.body;

    // Seleccionar el usuario con su rol
    const sql = 'SELECT * FROM usuarios WHERE nombre_usuario = ?';
    db.query(sql, [nombre_usuario], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error en la base de datos' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Verificar la contraseña
        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(contrasena, user.contrasena);
        if (!passwordIsValid) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Si la contraseña es válida, devolver el usuario con su rol
        res.status(200).json({ message: 'Inicio de sesión exitoso', user });
    });
};

// Registrar un nuevo usuario
exports.register = (req, res) => {
    const { nombre_usuario, contrasena, rol } = req.body;

    // Encriptar la contraseña antes de guardarla en la base de datos
    bcrypt.hash(contrasena, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ message: 'Error al encriptar la contraseña' });
        }

        const sql = 'INSERT INTO usuarios (nombre_usuario, contrasena, rol) VALUES (?, ?, ?)';
        db.query(sql, [nombre_usuario, hashedPassword, rol], (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Error en la base de datos' });
            }
            res.status(201).json({ message: 'Usuario registrado exitosamente' });
        });
    });
};
