import React from 'react';

function Book(props) {

    return (
    <div>
        <p>{props.bookInfo.volumeInfo.title}</p>

        {props.bookInfo.volumeInfo.authors &&<p>{props.bookInfo.volumeInfo.authors.join(", ")}</p>}

        <p>{props.bookInfo.volumeInfo.description}</p>
        <p>{props.bookInfo.volumeInfo.infoLink}</p>
        <img src = {props.bookInfo.volumeInfo.imageLinks.smallThumbnail}></img>
    </div>
    )
}

export default Book;