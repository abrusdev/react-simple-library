import {useState} from "react";
import Edit from "./edit";

function Show({book, onUpdate, onDelete}) {

  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSaveEditClick = (newTitle) => {
    onUpdate({...book, title: newTitle});
    setShowEdit(false);
  }

  const handleDeleteClick = () => {
    onDelete(book.id);
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
