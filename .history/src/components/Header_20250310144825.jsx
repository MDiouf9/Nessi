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
    <header className="bg-[#312783] text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-20" />

        {/* Menu burger pour mobile */}
        <button 
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <span>&#10005;</span>  // Croix de fermeture du menu
          ) : (
            <span>&#9776;</span>  // Icône hamburger
          )}
        </button>

        {/* Navigation */}
        <nav className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:bg-transparent bg-[#312783]`}>
          <ul className="lg:flex lg:space-x-8 flex-col lg:flex-row space-y-4 lg:space-y-0 p-6 lg:p-0">
            {navLinks.map((link, index) => (
              <li key={index} className="relative">
                <Link 
                  to={link.path} 
                  className="hover:text-gray-300 text-lg transition-colors duration-300 ease-in-out"
                >
                  {link.name}
                </Link>
                {/* Ajouter une barre sous le lien actif */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4c56a1] rounded-full hidden lg:block"></div>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mini barre de page active */}
      <div className="bg-[#4c56a1] h-1"></div>
    </header>
  );
};

export default Header;
