import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import Bookcard from '../Bookcard/Bookcard.jsx';
import Loader from '../Loader/Loader.jsx';
import { GrLanguage } from "react-icons/gr";
const ViewBookDetails = () => {
    const {id} =useParams();
    const [book,setBook] =useState();
  // to run every api in project need to use useEffect
  useEffect(()=>{
  const fetch= async()=>{
  const Response= await axios.get(`http://localhost:3000/api/get-book-by-id/${id}`);
  console.log(Response);
  setBook(Response.data.data);
  }
  fetch();
  },[])
  return (
    <>
    {book &&(
      <div className='px-12 py-8 bg-zinc-900 flex  flex-col md:flex-row gap-8 ' >
      <div className='bg-zinc-800 rounded p-4 h-[60vh] lg:h-[88vh] w-full lg:w-3/6 flex  items-center justify-cnter mt-15'> {book ? (
        <img src={book.url} alt="Book Cover" className="h-[50vh] lg:h-[70vh] rounded " />
      ) : (
        <p className="text-white"><Loader/></p>
      )} </div>
      <div className='p-4 mt-10 w-1/2'>
      <h1 className='text-2xl text-zinc-300 font-semibold'>{book.title}</h1>
      <p className="text-zinc-500 mt-3">by{book.author}</p>
      <p className="text-zinc-400 mt-3 text-xl">{book.desc}</p>
      <p className='flex mt-4 items-center justify-start text-zinc-400'><GrLanguage
       className='me-3' />{book.language}</p>
       <p className='mt-4 text-zinc-100 text-3xl font-semibold'> Price : ₹{book.price}{" "}</p>
      </div>
    
  </div>
    )}
    </>
    
  )
}

export default ViewBookDetails
