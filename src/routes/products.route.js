const { Router } = require("express");
const routes = Router();

const productsController = require("../controllers/products.controller");

routes.get("/", productsController.findAll);
routes.get("/:id", productsController.findById);
routes.post("/create", productsController.create);
routes.put("/update/:id", productsController.update);
routes.delete("/delete/:id", productsController.delete);

module.exports = routes;