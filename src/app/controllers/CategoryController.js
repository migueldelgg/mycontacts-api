import CategoryRepository from '../repositories/CategoriesRepository.js';
import validator from 'validator';

class CategoryController {

  async index(request, response) {
    const categories = await CategoryRepository.findAll();
    return response.json(categories);
  }

  async show(req, res) {
    const { id } = req.params;
    if (!validator.isUUID(id)) {
      return res.status(400).json({ message: "Invalid UUID format" });
    }

    const category = await CategoryRepository.findById(id);

    if (!category) {
      return res.status(404).json({
        message: `${id} Not Found in data source`,
      });
    }
    res.json(category);
  };

  async store(req, res) {
    let { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: `The property "name" is required` })
    }
    const category = await CategoryRepository.create({ name: name.toUpperCase() });
    res.json(category);
  }

  async update(req, res) {
    const { id } = req.params;
    if (!validator.isUUID(id)) {
      return res.status(400).json({ message: "Invalid UUID format" });
    }
    const { name } = req.body;

    const categoryExist = await CategoryRepository.findById(id);
    if (!categoryExist) {
      return res.status(404).json({
        message: `${id} Not Found in data source`,
      });
    }

    if (!name) {
      return res.status(400).json({ error: `The property "name" is required` })
    }

    const category = await CategoryRepository.update(id, { name: name.toUpperCase() });
    res.json(category);
  };

  async delete(req, res) {
    const { id } = req.params;
    if (!validator.isUUID(id)) {
      return res.status(400).json({ message: "Invalid UUID format" });
    }

    const category = await CategoryRepository.findById(id);
    if (!category) {
      return res.status(404).json({ error: `Category not found` });
    }
    await CategoryRepository.delete(id);
    res.sendStatus(204);
  };
}

export default new CategoryController();
