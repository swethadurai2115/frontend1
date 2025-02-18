import React, { useState, useEffect } from 'react';
import api from '../api';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the backend
    api.get('/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
