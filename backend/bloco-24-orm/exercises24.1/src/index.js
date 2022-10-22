const express = require('express');
const { bookController } = require('./controllers');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get('/books', bookController.getAllBooks);
app.get('/books/:id', bookController.getBookById);
app.post('/books', bookController.insertNewBook);
app.put('/books/:id', bookController.updateBook);



app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
