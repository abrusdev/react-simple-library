import {useContext, useState} from "react";
import Edit from "./edit";
import BooksContext from "../../context/books";

function Show({book}) {

  const {editBookById, deleteBookById} = useContext(BooksContext)

  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSaveEditClick = (newTitle) => {
    editBookById(book.id, newTitle);
    setShowEdit(false);
  }

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit)
    content = <Edit book={book} onSubmit={handleSaveEditClick}/>

  return (
    <div className="book-show">
      <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
      {content}

      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>

        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Show;
