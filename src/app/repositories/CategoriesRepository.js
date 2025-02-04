import db from '../../database/index.js';

class CategoryRepository {
  async create({ name }) {
    const [row] = await db.executeQuery(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
      `, [name])

    return row;
  }

  async findAll() {
    const rows = await db.executeQuery(`
        SELECT * FROM categories ORDER BY name
      `)
    return rows;
  }

  async findById(id) {
    console.log(`id capturado na funcao findById: ${id}`)
    const [row] = await db.executeQuery('SELECT * FROM categories WHERE id = $1', [id]);
    console.log(`row retorno: ${row}`)
    return row;
  }
}

export default new CategoryRepository();
