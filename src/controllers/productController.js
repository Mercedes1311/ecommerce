const Product = require('../models/productModel');

// Obtener todos los productos
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
};

// Agregar un nuevo producto
const addProduct = async (req, res) => {
    const { name, description, price, stock } = req.body;

    try {
        const product = new Product({ name, description, price, stock });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al agregar el producto' });
    }
};

module.exports = { getProducts, addProduct };
