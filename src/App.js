import {useEffect} from "react";
import Create from "./components/books/create";
import List from "./components/books/list";
import useBooksContext from "./hooks/use-books-context";

function App() {
  const {fetchBooks} = useBooksContext();

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