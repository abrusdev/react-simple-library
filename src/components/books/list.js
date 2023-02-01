import Show from "./show";
import {useContext} from "react";
import BooksContext from "../../context/books";

function List({books, onUpdate, onDelete}) {

  const contextValue = useContext(BooksContext)

  const renderedBooks = books.map((book) => {
    return <Show key={book.id} book={book} onUpdate={onUpdate} onDelete={onDelete}/>
  })

  return (
    <div className="book-list">
      {contextValue}
      {renderedBooks}</div>
  );
}

export default List