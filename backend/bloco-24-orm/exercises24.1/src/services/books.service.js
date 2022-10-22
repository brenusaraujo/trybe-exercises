const { Book } = require('../models');

const getAllBooks = async () => {
  const response = await Book.findAll();
  console.log(response);
  if (response) return { type: null, response };
  return { type: 'error', response: 'books not found' };
};

const getById = async (id) => {
  const response = await Book.findByPk(id);
  console.log(response);
  if (response) return { type: null, response };
  return { type: 'error', response: 'book not found' };
};

const create = async ({ title, author, pageQuantity, createdAt, updatedAt }) => {
  const response = await Book.create({ title, author, pageQuantity, createdAt, updatedAt });
  return response;
}

const update = async (id, { title, author, pageQuantity, createdAt, updatedAt }) => {
  const response = await Book.update(
    { title, author, pageQuantity, createdAt, updatedAt },
    { where: { id } }
  )
  return response;
}

const remove = async (id) => {
  const destroyedRows = await Book.destroy({
    where: { id },
  });
  return destroyedRows;
};

module.exports = {
  getAllBooks,
  getById,
  create,
  update,
  remove,
};