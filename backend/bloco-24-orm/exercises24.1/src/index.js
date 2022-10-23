const express = require('express');
const { bookController, employeeController } = require('./controllers');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get('/books', bookController.getAllBooks);
app.get('/books/:id', bookController.getBookById);
app.post('/books', bookController.insertNewBook);
app.put('/books/:id', bookController.updateBook);
app.delete('/books/:id', bookController.removeBook);
app.get('/employees', employeeController.getAll);



app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
