const { pool } = require("../db/db");

class Question {
  async create(id, text) {
    const query =
      "INSERT INTO questions (id, text) VALUES ($1, $2) RETURNING *";
    const values = [id, text];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async getById(id) {
    const query = "SELECT * FROM questions WHERE id = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async getAll() {
    const query = "SELECT * FROM questions";
    const { rows } = await pool.query(query);
    return rows;
  }

  async delete(id) {
    const query = "DELETE FROM questions WHERE id = $1 RETURNING *";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

module.exports = Question;
