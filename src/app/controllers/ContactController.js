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

  async store(req, res) {
    const { name, email, telefone, category_id } = req.body;

    if (!name) {
      return res.status(400).json({ error: `The property "name" is required` })
    }

    const contactExist = await ContactsRepository.findByEmail(email);
    if(contactExist) {
      return res.status(400).json({ error: `${email} already exists in data base` })
    }

    const contact = await ContactsRepository.create({
      name, email, telefone, category_id
    });

    res.json(contact);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, telefone, category_id } = req.body;

    const contactExist = await ContactsRepository.findById(id);
    if (!contactExist) {
      return res.status(404).json({
        message: `${id} Not Found in data source`,
      });
    }

    if (!name) {
      return res.status(400).json({ error: `The property "name" is required` })
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);
    if(contactByEmail && contactByEmail.id !== id) {
      return res.status(400).json({ error: `${email} already exists in data base` })
    }

    const contact = await ContactsRepository.update(id, {
      name, email, telefone, category_id
    });

    res.json(contact);
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
