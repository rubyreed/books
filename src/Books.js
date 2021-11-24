import NewBook from "./NewBook";
import { useState, useEffect } from "react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
// import { getByTitle } from "@testing-library/dom";
// import userEvent from "@testing-library/user-event";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  useEffect (() => {
    getBooks();
  }, []);

  const addBook = (book) => {

  let newBookArray = [book, ...books];
  setBooks(newBookArray);
};

const deleteBook = (isbn)=> {
  console.log("delete here");
  console.log(isbn);
  //TODO: delete book from database

  //remove book from UI here
  let filterBooks = books.filter((b) => b.isbn !==isbn);
  setBooks(filterBooks);
};

  const getBooks = async () => {
    let response = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5");
    console.log(response.data.data);
    setBooks(response.data.data);
  };

  const renderBooks = () => {
    if(books.length === 0)
    return 
    <p>No Books</p>
    return books.map((book) => {
      return(
      <div key={book.isbn} className="book-container">
        <h1>
           Title: {book.title} Author: {book.author} Genre: {book.genre}
        </h1>
        <p>Description: {book.description}</p>
        <button className="button" onClick = {()=>deleteBook(book.isbn)}>Delete Book</button>
      </div>
    );
  });
};
return (
  <div className="books">
    <h1>~ List of all Books Here ~</h1>
    < NewBook read={addBook}/>
    <div className = "books-list">
      {renderBooks()}
    </div>
  </div>
  );
};

export default Books;