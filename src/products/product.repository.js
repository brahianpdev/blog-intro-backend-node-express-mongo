const Product = require("./product.model");

class ProductRepository {
  async findAll() {
    return await Product.find();
  }

  async findById(id) {
    return await Product.findById(id);
  }

  async create(product) {
    return await Product.create(product);
  }

  async update(id, product) {
    return await Product.findOneAndUpdate({ _id: id }, product, { new: true });
  }

  async delete(id) {
    return await Product.deleteOne({ _id: id });
  }
}

module.exports = new ProductRepository();
