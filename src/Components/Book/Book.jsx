import React from 'react'
import { Link } from 'react-router-dom';

export default function Book({ book }) {

    const {bookId, image, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 shadow-xl border-2">
                <figure className='h-40 py-4 bg-gray-400 m-4 rounded-lg'>
                    <img className='h-full object-contain'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body p-4">
                    <div className='flex gap-2'>
                        {
                            tags.map((tag,index) => <button key={index} className='py-1 px-2 text-sm font-semibold text-green-600 bg-green-200 rounded-full'>{tag}</button>)
                        }
                    </div>

                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>Author: {author}</p>
                    <div className='border-t-2 border-gray-500 border-dashed my-2'></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline text-yellow-300">Rating: {rating} / 5</div>
                    </div>
                </div>
            </div>
        </Link>

    )
}
