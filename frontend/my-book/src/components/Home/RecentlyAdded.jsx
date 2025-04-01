import React, { useEffect, useState } from 'react'
import axios from "axios";
import Bookcard from '../Bookcard/Bookcard.jsx';
import Loader from '../Loader/Loader.jsx';
// axios is alternative of fetch . this command is used to fetch api from backend
export default function RecentlyAdded() {
  // now its time to integrate both frontend and backend
  const [book,setBook] =useState();
  // to run every api in project need to use useEffect
  useEffect(()=>{
  const fetch= async()=>{
  const Response= await axios.get("http://localhost:3000/api/get-recent-book");
  // console.log(Response.data.data);
  setBook(Response.data.data);
  }
  fetch();
  },[])
  return (
    <div className='mt-10 px-4'>
      <h4 className='text-3xl flex-start  text-yellow-100'>Recently Added Books</h4>
      {!book && (
        <div className='flex items-center justify-center'>
          <Loader/> {" "}
        </div>
      )}
      <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 '>
     {/* if we have book data then we should procedd further to add books */}
     {/* map contains one key for iteration and other to print that data */}
     {book && book.map((items, i) => {
  return (
    <div key={i}>
      <Bookcard book={items} />
    </div>
  );
})}

      </div>
    </div>
  )
}
