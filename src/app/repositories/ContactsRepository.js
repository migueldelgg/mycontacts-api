import { v4 } from 'uuid';
import db from '../../database/index.js';

class ContactsRepository {
  async create({
    name, email, phone, category_id
  }) {
    const [row] = await db.executeQuery(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
      `, [name, email, phone, category_id]);

      return row;
  }

  async findAll() {
    const rows = await db.executeQuery('SELECT * FROM contacts');
    return rows;
  }

  async findById(id) {
    const [row] = await db.executeQuery('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.executeQuery('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  update(id, {
    name, email, telefone, category_id
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        telefone,
        category_id
      };

    // Itera sobre contacts, compara se o id é igual; se for igual, atualiza o contato na lista
    // Se não for igual, mantém o contato original na lista
    contacts = contacts.map((contact) => {
        return contact.id === id ? updatedContact : contact
      })

      resolve(updatedContact);
    });
  }

  delete(id) {
    return new Promise((resolve, _reject) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

// Singleton
export default new ContactsRepository();
