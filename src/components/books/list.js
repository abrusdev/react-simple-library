import Show from "./show";
import useBooksContext from "../../hooks/use-books-context";

function List() {

  const {books} = useBooksContext();

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