const pool = require("../db/db");
const bcrypt = require("bcrypt");

async function registerUser(name, email, phone, password) {
  const existingUser = await pool.query(
    "select id FROM users where email = $1",
    [email]
  );

  if (existingUser.rows.length > 0) {
    return {
      error: "Email already registered"
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await pool.query(
    "insert into users (name, email, phone, password) values ($1, $2, $3, $4) returning id, name, email, phone, role",
    [name, email, phone, hashedPassword]
  );

  return {
    user: result.rows[0]
  };
}

module.exports = { registerUser};