import {useState} from "react";
import useBooksContext from "../../hooks/use-books-context";

function Create() {

  const [value, setValue] = useState("");

  const {createBook} = useBooksContext();

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