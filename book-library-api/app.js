const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// In-memory book storage
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", publishedYear: 1925 },
];

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// GET a single book by ID
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    book ? res.json(book) : res.status(404).json({ message: "Book not found" });
});

// POST a new book
app.post('/books', (req, res) => {
    const newBook = { id: books.length + 1, ...req.body };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT update a book by ID
app.put('/books/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex !== -1) {
        books[bookIndex] = { ...books[bookIndex], ...req.body };
        res.json(books[bookIndex]);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// DELETE a book by ID
app.delete('/books/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.json({ message: "Book deleted" });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// Start server
app.listen(3001, () => console.log('Server running on http://localhost:3001'));
