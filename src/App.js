import {useEffect, useState} from "react";
import Create from "./components/books/create";
import List from "./components/books/list";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [])

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:4000/books");

    setBooks(response.data);
  }

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:4000/books', {
      title: title
    })

    setBooks([...books, response.data])
  };

  const updateBookById = async (newBook) => {
    const response = await axios.put(`http://localhost:4000/books/${newBook.id}`, {
      "title": newBook.title
    })

    setBooks(books.map(book => book.id === newBook.id ? response.data : book));
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:4000/books/${id}`)
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <div className="app">
      <List books={books} onUpdate={updateBookById} onDelete={deleteBookById}/>
      <Create onCreate={createBook}/>
    </div>
  )
}

export default App;