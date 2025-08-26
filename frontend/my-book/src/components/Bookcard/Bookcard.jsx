import React from 'react'
import {Link} from 'react-router-dom'
const Bookcard = ({book}) => {
    console.log(book);
  return (
    <>
    <Link to={`/view-book-details/${book._id}`}>
    {/* i want that data inside col should return  column wisse not row wise */}
    <div className='bg-zinc-800 rounded p-4 flex flex-col h-[55vh] sm:h-[70vh] sm:w-[180%]  w-full'>
      <div className='bg-zinc-900 rounded flex items-center justify-center'>
        <img src={book.url} alt="/" className='h-[20vh] '/>
      </div>
      <h2 className='mt-4 text-xl text-zinc-300 font-semibold'>{book.title}</h2>
      <p className='mt-2 text-zinc-400 font-semibold'>by {book.author}</p>
      <p className='mt-2 text-zinc-200 font-semibold text-xl'> {book.price}₹</p>
    </div>
    
    </Link>
     
    </>
   
  )
}

export default Bookcard
