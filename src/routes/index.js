const { Router } = require('express');
const routes = Router();

const productsRoutes = require('./products.route');

routes.use('/products', productsRoutes);

module.exports = routes;