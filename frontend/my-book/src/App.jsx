import ViewBookDetails from './components/View-book-details/ViewBookDetails'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Routes, Route} from "react-router-dom"
import AllBooks from './pages/AllBooks'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
function App() {

  return (
    <>
      <div>
        
        <Navbar />
          <Routes>
            <Route exact path="/" element ={<Home/>}/>
            <Route path="/all-books" element={<AllBooks/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route path="/view-book-details/:id" element={<ViewBookDetails/>}/>

          </Routes>
          <Footer />
        
       
        
      </div>
      
    </>
  )
}

export default App
