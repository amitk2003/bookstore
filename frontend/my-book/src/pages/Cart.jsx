import React,{useState,useEffect} from 'react'
import emptyCart from '../assets/empty-cart.png'
import Loader from '../components/Loader/Loader.jsx';
import axios from 'axios';
export default function Cart() {
  const [cart,setCart]=useState([]);
  const [total,setTotal]=useState(0);
  // useffect
  const headers={
    id:localStorage.getItem("id"),authorization:`Bearer ${localStorage.getItem("token")}`
  };
  useEffect(()=>{
    const fetchCart=async()=>{
      try {
        const response=await axios.get("http://localhost:3000/api/get-user-cart",{headers});
        console.log(response.data);
        setCart(response.data.data)
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    }
    fetchCart()
  },[])
  return (
    <>
    {!cart && <Loader/>}
    {/* if length is 0 means array is empty */}
    {cart.length==0 && (
      <div className='h-screen px-12 py-8 bg-zinc-800'>
        <div className='h-[100%] flex items-center justify-center flex-col'>
          <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>
            Empty Cart
          </h1>
          <img src={emptyCart} alt="empty-image" className='h-[50vh]' />
        </div>
      </div>
    )}
    {cart && cart.length>0 && (<>
    <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>My Cart</h1>
    {cart.map((item,i)=>(
    <div className="w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center" key={i}>
      <img src={item.url} alt="book image" className='h-[15vh] w-3xs md:h-[10vh] object-contain' />
      <div className='w-full md:w-auto'>
        <h1 className="text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0">{item.title}</h1>
        <p className="text-normal text-zinc-300 mt-2 hidden lg:block">{item.desc.slice(0,100)}</p>
         <p className="text-normal text-zinc-300 mt-2 hidden md:block lg:hidden">{n.desc.slice(0,50)}</p>
          <p className="text-normal text-zinc-300 mt-2 block md:hidden">{item.desc.slice(0,100)}</p>
      </div>
      <div></div>
    </div>  
   
    ))}
    </>)}
    </>
    
  )
}
