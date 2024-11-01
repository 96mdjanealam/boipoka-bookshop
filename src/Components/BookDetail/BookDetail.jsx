import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function BookDetail() {


    const data = useLoaderData();

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id)

    // console.log(id, book);

    const { bookId: currentBookId, image } = book;


    return (
        <div>
            <div>BookDetail: {currentBookId}</div>
            <img className='w-36' src={image} alt="" />
            <br />
            <div className='flex gap-2'>
                <button className='py-1 px-2 border rounded-full' >Read</button>
                <button className='py-1 px-2 border rounded-full' >WishList</button>
            </div>

        </div>

    )
}
