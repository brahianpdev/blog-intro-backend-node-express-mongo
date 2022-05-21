const productRepository = require('../repositories/product-repository');

class PostService {
  async findAll() {
    try {
      return await productRepository.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }
  
  async findById(id) {
    try {
      return await productRepository.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(product) {
    try {
      return await productRepository.create(product);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, product) {
    try {
      return await productRepository.update(id, product, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      return await productRepository.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new PostService();