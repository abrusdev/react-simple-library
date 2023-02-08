import Show from "./show";
import {useContext} from "react";
import BooksContext from "../../context/books";

function List() {

  const {books} = useContext(BooksContext)

  const renderedBooks = books.map((book) => {
    return <Show key={book.id} book={book}/>
  })

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default List