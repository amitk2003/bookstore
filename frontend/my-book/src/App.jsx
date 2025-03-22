import { Profiler, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Card from './components/Card'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AllBooks from './pages/AllBooks'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
function App() {

  return (
    <>
      <div>
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element ={<Home/>}/>
            <Route path="/all-books" element={<AllBooks/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign-up" element={<Signup/>}/>

          </Routes>
          <Footer/>
        </Router>
        
       
        
      </div>
      
    </>
  )
}

export default App
