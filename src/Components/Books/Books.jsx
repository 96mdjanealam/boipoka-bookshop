import React, { useEffect, useState } from 'react'
import Book from '../Book/Book'

export default function Books() {

    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch("./booksData.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
                {
                    books.map(book =><Book book={book} key={book.bookId} ></Book>)
                }
            </div>
        </div>
    )
}

/*
1. State to store the book
2.  useEffect
*/