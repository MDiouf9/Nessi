import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/about" },
  { name: "Nos services", path: "/services" },
  { name: "Contact", path: "/contact" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu mobile

  return (
    <header className="bg-[#312783] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-24" />

        {/* Menu burger pour mobile */}
        <button 
          className="lg:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776;
        </button>

        {/* Navigation */}
        <nav className={`lg:flex ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="hover:text-gray-300 text-lg">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mini barre de page active */}

    </header>
  );
};

export default Header;
