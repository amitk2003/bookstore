import React from 'react'
import Loader from '../components/Loader/Loader';
import Bookcard from '../components/Bookcard/Bookcard';
import axios from 'axios'
import { useState, useEffect } from 'react';
export default function AllBooks() {
  const [book,setBook] =useState();
  // to run every api in project need to use useEffect
  useEffect(()=>{
  const fetch= async()=>{
  const Response= await axios.get("http://localhost:3000/api/get-all");
  // console.log(Response.data.data);
  setBook(Response.data.data);
  }
  fetch();
  },[])
  return (
    <div className='bg-zinc-900 px-5'>
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
