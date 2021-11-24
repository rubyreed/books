import {useState} from "react";

const NewBook = (props) => {
const [title, setTitle]=useState('');
const [author, setAuthor]=useState('');
const [genre, setGenre]=useState('');
const [description, setDescription]=useState('');

const handleSubmit = (event) => {
  // by default we refresh the page here, add the next line to prevent that
  event.preventDefault();
// get values from the form
  console.log('title:', title)
  console.log('author:', author)
  console.log('genre:', genre)
  console.log('description:', description)
  props.read({title:title, author:author, genre:genre, description:description});

  //this next part makes it so the form empties itself out after you add a new book
  setTitle('')
  setAuthor('')
  setGenre('')
  setDescription('')
};


return (
  <div className = "book-form">
    <h2>New Book Form</h2>
    <form onSubmit = {handleSubmit}>
  <p>Title</p>
  <input value ={title} onChange={(e)=>setTitle(e.target.value)}/>
  <p>Author</p>
  <input value ={author} onChange={(e)=>setAuthor(e.target.value)}/>
  <p>Genre</p>
  <input value ={genre} onChange={(e)=>setGenre(e.target.value)}/>
  <p>Description</p>
  <textarea value ={description} onChange={(e)=>setDescription(e.target.value)}/>
  {/* <img src={book.image}height='50' width '50'/> */}
    <br/>
    <br/>
    <button className="button">Add Book</button>
    </form>
  </div>
  );
};

export default NewBook;