import pg from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB
});

const testConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Conexão bem-sucedida! Data/Hora no banco:', res.rows[0].now);
  } catch (err) {
    console.error('Erro ao conectar no banco:', err);
  }
};

/*
O PostgreSQL vê $1 e substitui pelo primeiro valor do array (name = "João").
O valor é tratado como dado, e não como código SQL.
Evita SQL Injection!
*/

export const executeQuery = async (query, params = []) => {
  try {
    const { rows } = await pool.query(query, params);
    return rows;
  } catch (error) {
    console.error('Erro ao executar query:', error);
    throw error;
  }
};

testConnection();
