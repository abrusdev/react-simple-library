import {useContext, useState} from "react";
import BooksContext from "../../context/books";

function Create() {

  const [value, setValue] = useState("");

  const {createBook} = useContext(BooksContext);

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    createBook(value);

    setValue("");
  }

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label> </label>
        <input className="input" value={value} onChange={handleChange}/>
        <button className="button">Create</button>
      </form>
    </div>
  )
}

export default Create;