import React from 'react'
import { Link } from 'react-router-dom'

const Bookcard = ({ book }) => {
  return (
    <Link to={`/view-book-details/${book._id}`}>
      <div className="bg-zinc-700 rounded p-5 flex flex-col h-[50vh] sm:h-[60vh] w-full max-w-xs mx-auto">
        {/* Image */}
        <div className="bg-zinc-600 rounded flex items-center justify-center">
          <img
            src={book.url}
            alt={book.title}
            className="h-[20vh] w-full object-cover rounded"
          />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-lg text-zinc-300 font-semibold truncate">
          {book.title}
        </h2>

        {/* Author */}
        <p className="mt-2 text-zinc-400">by {book.author}</p>

        {/* Price */}
        <p className="mt-2 text-zinc-200 font-semibold text-lg">
          {book.price}₹
        </p>
      </div>
    </Link>
  )
}

export default Bookcard
