const { Router } = require('express');
const routes = Router();

const productsRoutes = require('./products.route');
const testRoutes = require('./test.route');

routes.use('/products', productsRoutes);
routes.use('/test', testRoutes);

module.exports = routes;