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
  findAll() {
    return new Promise((resolve, _reject) => {
      resolve(contacts); // retorno implicito
    });
  }

  findById(id) {
    return new Promise((resolve, _reject) => {
      resolve(
        contacts.find((contact) => contact.id === id)
      ); // retorno implicito
    });
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editaar registro
  }

  delete(id) {
    return new Promise((resolve, _reject) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve()
    });
  }
}

// Singleton
export default new ContactsRepository();
