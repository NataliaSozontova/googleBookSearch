import React, {useEffect, useState}from 'react';
import axios from 'axios';
import Book from '../components/Book';

function Search(props) {

    useEffect(() => {
        // For demonstration purposes, we mock an API call.
        // searchBooks();
      }, []);

    
    const [books, setBooks] = useState([]);




    const searchBooks = (event) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${event.target.value.toLowerCase()}`)
    .then(response => {
      console.log(response.data.items);
      setBooks(response.data.items);
  });
    }

    return (
      <div>
           <form className="form-inline">
          <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search by book's name"
              aria-label="Search"
              onChange={event => searchBooks(event)}
          />
          {/* <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Search
           </button> */}
      </form>
     
           {books.map(book => (
          <Book
          bookInfo = {book}
          />
          

          )
          )}
      
     Search page
  </div>
    );
  }
  
  export default Search;