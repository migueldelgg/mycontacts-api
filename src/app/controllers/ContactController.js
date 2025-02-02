import ContactsRepository from '../repositories/ContactsRepository.js';

class ContractController {
  async index(_req, res) {
    const contacts = await ContactsRepository.findAll();
    res.json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({
        message: `${id} Not Found in data source`,
      });
    }

    res.json(contact);
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editaar registro
  }

  async delete(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({
        message: `${id} Not Found in data source`,
      });
    }

    await ContactsRepository.delete(id);
    res.sendStatus(204);
  }
}

// Singleton
export default new ContractController();
