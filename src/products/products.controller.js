const productsService = require("./products.service");

class ProductsController {
  async findAll(req, res) {
    const products = await productsService.findAll();

    res.status(200).json(products);
  }

  async findById(req, res) {
    const { id } = req.params;

    const product = await productsService.findById(id);
    res.status(200).json(product);
  }

  async create(req, res) {
    const { title, price, description } = req.body;

    const product = await productsService.create({ title, price, description });
    res.status(201).json(product);
  }

  async update(req, res) {
    const { id } = req.params;
    const { title, price, description } = req.body;

    const product = await productsService.update(id, { title, price, description });
    res.status(200).json(product);
  }

  async delete(req, res) {
    const { id } = req.params;

    const product = await productsService.delete(id);
    res.status(200).json(product);
  }
}

module.exports = new ProductsController();
