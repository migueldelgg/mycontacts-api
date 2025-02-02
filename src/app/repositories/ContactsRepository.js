import { v4 } from 'uuid'

let contacts = [
  {
    id: v4(),
    name: 'Matheus',
    email: 'matheus@gmail.com',
    telefone: '5511981287897',
    category_id: v4()
  },
  {
    id: v4(),
    name: 'Miguel',
    email: 'miguel@gmail.com',
    telefone: '5511998765432',
    category_id: v4()
  },
  {
    id: v4(),
    name: 'Ana',
    email: 'ana@gmail.com',
    telefone: '5511945678901',
    category_id: v4()
  }
];

class ContactsRepository {
  create({
    name, email, telefone, category_id
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        telefone,
        category_id
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }

  findAll() {
    return new Promise((resolve) => {
      resolve(contacts); // retorno implicito
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id)
      ); // retorno implicito
    });
  }

  findByEmail(email) {
    return new Promise((resolve, _reject) => {
      resolve(
        contacts.find((contact) => contact.email === email)
      ); // retorno implicito
    });
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
