const { bookService } = require("../services");

const getAllBooks = async (_req, res) => {
  try {
    const { type, response } = await bookService.getAllBooks();
    console.log(type);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: "there's an error" });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, response } = await bookService.getById(Number(id));
    console.log(type);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: "there's an error" });
  }
};

const insertNewBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, createdAt, updatedAt } = req.body;
    const { type, response } = await bookService.
      create({ title, author, pageQuantity, createdAt, updatedAt });
    console.log(response);
    return res.status(201).json({ message: "created" });
  } catch (error) {
    console.log(error.message);
    return res.status(402).json({ message: "there's an error" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, createdAt, updatedAt } = req.body;
    const { id } = req.params;
    const response = await bookService.update(Number(id), { title, author, pageQuantity, createdAt, updatedAt });
    console.log(response);
    return res.status(201).json({ message: "book updated!" });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: "there's an eror" });
  }
};

const removeBook = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await bookService.remove(Number(id));
    console.log(response);
    return res.status(201).json({ message: "book deleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: "book not found." });
  }
}

module.exports = {
  getAllBooks,
  getBookById,
  insertNewBook,
  updateBook,
  removeBook
};