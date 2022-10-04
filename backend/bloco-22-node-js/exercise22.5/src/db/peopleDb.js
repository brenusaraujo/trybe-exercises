const connection = require('./connection');

const insert = (person) => connection.execute(
  `INSERT INTO people (first_name, last_name, email, phone) 
    VALUES (?, ?, ?, ?)`, [person.firstName, person.lastName, person.email, person.phone],
);

const list = () => connection.execute(
  'SELECT * FROM people',
);

const listById = (id) => connection.execute(
  `SELECT first_name FROM people 
    WHERE id = ?`, [id],
);

const listTransactions = () => connection.execute(
  'SELECT * FROM transactions',
);

const insertTransaction = (transaction) => connection.execute(
  `INSERT INTO transactions (name, description, price, type)
    VALUES (?, ?, ?, ?, ?)`, [transaction.name, 
      transaction.description, transaction.price, transaction.price],
);

module.exports = { insert, list, listById, listTransactions, insertTransaction };