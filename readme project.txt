# Reading List Manager

A React-based application to manage a reading list where users can log in, add books, and view their progress.

---

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/reading-list-manager.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd reading-list-manager
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```

   The application will run on `http://localhost:3000`.

---

## API Documentation

This project does not include a backend or external APIs. Future iterations may include endpoints such as:

- **POST /login**: Authenticate user credentials.
- **GET /books**: Retrieve the user’s reading list.
- **POST /books**: Add a new book to the reading list.
- **PUT /books/:id**: Update details of a specific book.
- **DELETE /books/:id**: Remove a book from the list.

Currently, the app uses React state to manage data locally in the browser.

---

## Assumptions and Design Decisions

1. **Authentication:**
   - A simulated login flow where user authentication is managed locally.

2. **State Management:**
   - Used `useState` hooks to manage application state.

3. **Styling:**
   - Applied custom CSS for a lightweight and professional design.

4. **Persistence:**
   - Data is only stored temporarily in memory. Persistence across sessions is not implemented.

---

## Technologies Used

- **React**: For building the user interface and managing application state.
- **CSS**: Custom styles for responsiveness and a professional look.
- **JavaScript (ES6)**: Core language features for logic and functionality.

---

## Future Enhancements

- Integrate a backend API with proper authentication and database storage.
- Add CRUD operations for books using REST APIs.
- Implement user-specific reading progress tracking (e.g., pages read).
- Enhance UI with animations and advanced interactivity.

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project under the terms of the license.

