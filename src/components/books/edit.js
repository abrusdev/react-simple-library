import {useState} from "react";

function Edit({book, onSubmit}) {

  const [value, setValue] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);

    setValue("");
  }

  const handleOnChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={value} onChange={handleOnChange}/>

      <button className="button is-primary">Save</button>
    </form>
  )
}

export default Edit;