const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/books');

dotenv.config();

const app = express();

// Allow requests from localhost:3000 only
app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Set up routes
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
