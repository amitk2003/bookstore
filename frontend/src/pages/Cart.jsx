import React, { useState, useEffect } from 'react';
import emptyCart from '../assets/empty-cart.png';
import Loader from '../components/Loader/Loader.jsx';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { div } from 'framer-motion/client';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [total, setTotal] = useState(0);

  // Define headers at the top to avoid reference issues
  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  // Fetch cart data
  useEffect(() => {
    const fetchCart = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const response = await axios.get('/api/get-user-cart', { headers });
        console.log('Fetched cart:', response.data);
        setCart(response.data.data || []); // Ensure cart is always an array
        // Calculate total price if needed
        const totalPrice = response.data.data.reduce((sum, item) => sum + (item.price || 0), 0);
        setTotal(totalPrice);
      } catch (error) {
        console.error('Error fetching cart:', error);
        alert('Something went wrong while fetching the cart');
        setCart([]); // Reset cart on error
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };
    fetchCart();
  }, []); // Empty dependency array for initial fetch

  // Delete item from cart
  const deleteItem = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/remove-book-from-cart/${id}`,
        {},
        { headers }
      );
      console.log('Delete response:', response.data);
      // Update cart state by filtering out the deleted item
      setCart((prevCart) => prevCart.filter((item) => item._id !== id));
      // Update total price
     setTotal((prevTotal) => prevTotal - (cart.find((item) => item._id === id)?.price || 0));

      alert(response.data.message);
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item');
    }
  };
  useEffect(()=>{
    if(cart && cart.length>0){
      let total=0;
      cart.map((item)=>{
        total+=item.price;
      })
      setTotal(total);
      total=0;
    }
  },[cart])

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && cart.length === 0 && (
        <div className="h-screen px-12 py-8 bg-zinc-800">
          <div className="h-[100%] flex items-center justify-center flex-col">
            <h1 className="text-5xl lg:text-6xl font-semibold text-zinc-400">Empty Cart</h1>
            <img src={emptyCart} alt="empty-cart" className="h-[50vh]" />
          </div>
        </div>
      )}
      {!isLoading && cart.length > 0 && (
        <>
          <h1 className="text-5xl font-semibold text-zinc-500 mb-8">My Cart</h1>
          {cart.map((item) => (
            <div
              className="w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center"
              key={item._id} // Use item._id consistently
            >
              <img
                src={item.url}
                alt="book image"
                className="h-[15vh] w-3xs md:h-[10vh] object-contain"
              />
              <div className="w-full md:w-auto">
                <h1 className="text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0">
                  {item.title}
                </h1>
                <p className="text-normal text-zinc-300 mt-2 hidden lg:block">
                  {item.desc.slice(0, 100)}
                </p>
                <p className="text-normal text-zinc-300 mt-2 hidden md:block lg:hidden">
                  {item.desc.slice(0, 50)}
                </p>
                <p className="text-normal text-zinc-300 mt-2 block md:hidden">
                  {item.desc.slice(0, 100)}
                </p>
              </div>
              <div className="flex mt-4 w-full md:w-auto items-center justify-between">
                <h2 className="text-zinc-100 text-3xl font-semibold flex">{item.price}₹</h2>
                <button
                  className="bg-red-100 text-red-700 border-red-700 rounded p-2 ms-2"
                  onClick={() => deleteItem(item._id)} // Use item._id consistently
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 text-2xl text-zinc-100 font-semibold">
            Total: {total}₹
          </div>
        </>
      )}
      {cart && cart.length>0 && (
        <div className='mt-4 w-full flex items-center '></div>
      )}
    </>
  );
}