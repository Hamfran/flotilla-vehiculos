const db = require('../config/db');
// Expresión regular para validar placas
const placaRegex = /^[A-Z]-[A-Z]{3}[0-9]{3}$/;

// Obtener todos los vehículos
exports.getVehiculos = (req, res) => {
    const sql = 'SELECT * FROM vehiculos';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getVehiculoById = (req, res) => {
    const id = req.params.id; // Obtener el ID del parámetro de la solicitud
    const sql = 'SELECT * FROM vehiculos WHERE id = ?'; // Consulta SQL con un marcador de posición

    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error al buscar el vehículo' });
        }
        if (results.length > 0) {
            res.json(results[0]); // Devolver el primer resultado
        } else {
            res.status(404).json({ message: 'Vehículo no encontrado' });
        }
    });
};

// Agregar un nuevo vehículo
exports.addVehiculo = (req, res) => {
    const { marca, modelo, anio, placa, estado } = req.body;

    // Validar la placa
    if (!placaRegex.test(placa)) {
        return res.status(400).json({ message: 'Formato de placa inválido. Ejemplos válidos: P-ABC123, O-ZXY987' });
    }

    const sql = 'INSERT INTO vehiculos (marca, modelo, anio, placa, estado) VALUES (?, ?, ?, ?, ?)';
    const values = [marca, modelo, anio, placa, estado];

    db.query(sql, values, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Vehículo agregado', id: result.insertId });
    });
}

// Actualizar un vehículo
exports.updateVehiculo = (req, res) => {
    const { id } = req.params;
    const { marca, modelo, anio, placa, estado } = req.body;

    // Validar la placa
    if (!placaRegex.test(placa)) {
        return res.status(400).json({ message: 'Formato de placa inválido. Ejemplos válidos: P-ABC123, O-ZXY987' });
    }

    const sql = 'UPDATE vehiculos SET marca = ?, modelo = ?, anio = ?, placa = ?, estado = ? WHERE id = ?';
    const values = [marca, modelo, anio, placa, estado, id];

    db.query(sql, values, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Vehículo actualizado' });
    });
};

// Eliminar un vehículo
exports.deleteVehiculo = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM vehiculos WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Vehículo eliminado' });
    });
};
