const express = require('express');
const router = express.Router();
const vehiculosController = require('../controllers/vehiculosController');

// Definir rutas
router.get('/', vehiculosController.getVehiculos);
router.get('/:id', vehiculosController.getVehiculoById);// Ruta para obtener un vehículo por ID
router.post('/', vehiculosController.addVehiculo);
router.put('/:id', vehiculosController.updateVehiculo);
router.delete('/:id', vehiculosController.deleteVehiculo);

module.exports = router;
