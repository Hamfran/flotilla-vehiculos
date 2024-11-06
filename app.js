const express = require('express');
const app = express();
const vehiculosRoutes = require('./routes/vehiculos'); // ruta de servicos 
const authRoutes = require('./routes/auth'); // ruta de autenticación usuarios
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Middleware para procesar datos en formato JSON
app.use(express.json());

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public')); // Aquí estamos sirviendo la carpeta 'public'

// Rutas
app.use('/vehiculos', vehiculosRoutes);
app.use('/auth', authRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('API para gestionar flotilla de vehículos');
});

// Levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
