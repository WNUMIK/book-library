const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// Create a new book
router.post('/', async (req, res) => {
  console.log('Received POST request with data:', req.body);  // Log the incoming data
  try {
    const book = new Book(req.body);
    await book.save();
    console.log('Book saved:', book);
    res.status(201).json(book);
  } catch (error) {
    console.error('Error saving book:', error);
    res.status(400).json({ error: error.message });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a book by ID
router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a book by ID
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (book) {
      res.json({ message: 'Book deleted' });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
