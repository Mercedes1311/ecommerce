const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Registrar un nuevo usuario
router.post('/register', registerUser);

// Iniciar sesión
router.post('/login', loginUser);

module.exports = router;

