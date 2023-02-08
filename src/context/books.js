import {createContext, useCallback, useState} from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}) {

  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:4000/books");
    setBooks(response.data);
  }, []);

  const createBook = async (name) => {
    await axios.post('http://localhost:4000/books', {title: name})
    await fetchBooks()
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:4000/books/${id}`)
    await fetchBooks()
  }

  const editBookById = async (id, name) => {
    await axios.put(`http://localhost:4000/books/${id}`, {"title": name})
    await fetchBooks()
  }

  const valueToShare = {
    books: books,
    fetchBooks, createBook, deleteBookById, editBookById
  }

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  )

}

export {Provider};
export default BooksContext;