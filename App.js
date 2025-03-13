import { useState } from "react";
import './index.css'; // Import custom CSS

function App() {
  // State variables
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsAuthenticated(true);
    }
  };

  // Add book to the list
  const handleAddBook = () => {
    if (bookTitle && bookAuthor) {
      setBooks([...books, { title: bookTitle, author: bookAuthor }]);
      setBookTitle("");  // Reset input fields
      setBookAuthor(""); // Reset input fields
    }
  };

  return (
    <div className="container">
      <h1>Reading List Manager</h1>

      {/* If not authenticated, show login form */}
      {!isAuthenticated ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          {/* Reading List Management */}
          <h2>Your Reading List</h2>

          <input
            type="text"
            placeholder="Book Title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
          />
          <button onClick={handleAddBook}>Add Book</button>

          <ul>
            {/* Display books in the list */}
            {books.map((book, index) => (
              <li key={index}>
                <strong>{book.title}</strong> by {book.author}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;