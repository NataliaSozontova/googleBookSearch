import React, {useEffect}from 'react';
import axios from 'axios';







function Search(props) {

    useEffect(() => {
        // For demonstration purposes, we mock an API call.
        // searchBooks();
      }, []);

    const searchBooks = (event) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${event.target.value.toLowerCase()}`)
    .then(response => {
      console.log(response.data.items);
      

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
     Search page
  </div>
    );
  }
  
  export default Search;