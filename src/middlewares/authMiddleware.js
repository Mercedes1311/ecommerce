// src/middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Acceso no autorizado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Asegúrate de tener JWT_SECRET en tu .env
        req.user = decoded;  // Agrega el usuario decodificado a la solicitud
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
};

module.exports = authMiddleware;


