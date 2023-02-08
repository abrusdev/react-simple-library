import {useContext, useEffect, useState} from "react";
import Create from "./components/books/create";
import List from "./components/books/list";
import BooksContext from "./context/books";

function App() {
  const {fetchBooks} = useContext(BooksContext)

  useEffect(async () => {
    fetchBooks();
  }, [])

  return (
    <div className="app">
      <List/>
      <Create/>
    </div>
  )
}

export default App;