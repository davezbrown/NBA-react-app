import { Client } from 'pg';

export const ServerCalls = {
  async create(userData) {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    const query = 'INSERT INTO users(email, password) VALUES($1, $2)';
    const values = [userData.email, userData.password];
    try {
      await client.query(query, values);
    } catch (err) {
      console.error(err.stack);
    } finally {
      await client.end();
    }
  },
  async read(userData) {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    const values = [userData.email, userData.password];
    try {
      const res = await client.query(query, values);
      return res.rows[0];
    } catch (err) {
      console.error(err.stack);
    } finally {
      await client.end();
    }
  },
  async update(userData) {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    const query = 'UPDATE users SET password = $1 WHERE email = $2';
    const values = [userData.newPassword, userData.email];
    try {
      await client.query(query, values);
    } catch (err) {
      console.error(err.stack);
    } finally {
      await client.end();
    }
  },
  async delete(userData) {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    const query = 'DELETE FROM users WHERE email = $1';
    const values = [userData.email];
    try {
      await client.query(query, values);
    } catch (err) {
      console.error(err.stack);
    } finally {
      await client.end();
    }
  },
};
