const express = require('express');
const router = express.Router();
const { getProducts, addProduct } = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

// Obtener productos (solo si está autenticado)
router.get('/', authMiddleware, getProducts);

// Agregar un nuevo producto (solo si está autenticado)
router.post('/', authMiddleware, addProduct);

module.exports = router;
