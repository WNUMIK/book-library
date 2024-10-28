
# Book Library Application

A simple book library application that allows users to manage a collection of books. This project is split into two parts: a backend API built with Node.js and Express, and a frontend built with React.

## Project Structure

```
book-library/
├── book-library-api/       # Backend API for managing books
└── book-library-client/    # Frontend React application for user interface
```

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: React, Axios
- **Environment**: Node, npm
- **Database**: (Optional) Can be extended to MongoDB or SQLite
- **Styling**: Basic CSS or a UI framework (e.g., Bootstrap)

## Features

- **Backend**: RESTful API with CRUD operations for managing books.
- **Frontend**: User interface for viewing, adding, editing, and deleting books.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** and **npm** (https://nodejs.org/)

### Backend Setup (book-library-api)

1. Navigate to the backend folder:
   ```bash
   cd book-library-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   node app.js
   ```
   The server will run on `http://localhost:3001`.

### Frontend Setup (book-library-client)

1. Open a new terminal, then navigate to the frontend folder:
   ```bash
   cd book-library-client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend React app:
   ```bash
   npm start
   ```
   The React app will run on `http://localhost:3000`.

## Usage

1. **Start both servers** (backend and frontend) as per setup instructions.
2. Access the React frontend in your browser at `http://localhost:3000`.
3. Use the interface to add, edit, view, or delete books.

## Future Enhancements

- Add database support with MongoDB or SQLite.
- Implement user authentication for secure access to the API.
- Add filtering and sorting options on the frontend.
- Deploy the application on a hosting platform.

## License

This project is licensed under the MIT License.
