import React from "react";
import { Link } from "react-router-dom";
import instagram from "./instagram.png";
import LinkedIn from "./linkedin.png";
import email from "./email.png";
import github from "./github.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-600 text-white py-6 w-full text-center mt-20 ">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold">© {year} Amit Kumar, All rights reserved</h1>
        <div className="mt-4 flex justify-center space-x-4">
          <Link to="https://www.instagram.com/amitkumar.6788/">
            <img src={instagram} alt="Instagram" className="w-10 h-10" />
          </Link>
          <Link to="https://www.linkedin.com/in/amit-kumar-a5059624b/">
            <img src={LinkedIn} alt="LinkedIn" className="w-10 h-10" />
          </Link>
          <Link to="mailto:amitk200703@gmail.com">
            <img src={email} alt="Email" className="w-10 h-10" />
          </Link>
          <Link to="https://github.com/amitk2003">
            <img src={github} alt="GitHub" className="w-10 h-10" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
