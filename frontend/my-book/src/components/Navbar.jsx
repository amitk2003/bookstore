import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the menu
import books from "./books.png";
import { Link} from "react-router-dom";
// <FaHamburger />

export default function Navbar() {
    const [MobileNav, setMobileNav] = useState("hidden"); // State for mobile menu toggle

    const links = [
        { title: "Home", link: "/" },
        // { title: "About Us", link: "/about-us" },
        { title: "AllBooks", link: "/all-books" },
        { title: "Cart", link: "/cart" },
        { title: "Profile", link: "/profile" },
    ];

    return (
        <>
        <nav relative className="fixed top-0 left-0 w-full bg-zinc-800 text-white px-6 py-4 flex items-center justify-between z-50 ">
            {/* Logo Section */}
            <Link to="/" className="flex items-center">
                <img src={books} alt="logo" className="h-10 me-4" />
                <div className="text-2xl font-semibold">Books Unbound</div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="nav-links-booksunbound block  md:flex items-center justify-between">
                <div className=" md:block flex gap-8">
                    {links.map((item, i) => (
                        <Link to={item.link}  key={i}  className="hover:text-blue-500 transition-all duration-300">
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Login / Signup Buttons */}
                <div className="md:block flex gap-4">
                    <Link to="/login" className="px-7 py-2 border border-blue-500 rounded hover:bg-white hover:text-zinc-700 transition-all duration-300">
                        Login
                    </Link>
                    <Link to="/sign-up"  className="px-5 py-2 border border-blue-500 rounded hover:bg-white hover:text-zinc-700 transition-all duration-300">
                        Signup
                    </Link>
                </div>
            </div>
            <button className="text-white text-2xl hover:text-zinc-500">
            <FaHamburger />
            </button>

                
            
        </nav>
        {/* i want that this div would visible only if user clicks on hamburger menu */}
        <div className={`${MobileNav}bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-between items-center justify-center`}>
        {links.map((item, i) => (
                        <Link to={item.link}  key={i}  className={` ${MobileNav} hover:text-blue-500 transition-all duration-300 text-white text-4xl font-semibold mb-4`}>
                            {item.title}{" "}
                        </Link>
                    ))}

<Link to="/login" className={` ${MobileNav} px-7 py-2 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300 mb-4 text-3xl text-white`}>
                        Login
                    </Link>
                    <Link to="/sign-up"  className={` ${MobileNav} px-4 py-2 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300 text-3xl text-white`}>
                        Signup
                    </Link>
        </div>
        </>
        
    );
}
