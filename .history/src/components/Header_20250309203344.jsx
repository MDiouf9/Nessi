import React from "react";
import logo from "../assets/PNG LO.png";

const Header = () => {
  return (
    <header className="bg-[#312783] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8" />  {/* Réduit la taille du logo */}
        <div className="text-2xl font-bold">MonLogo</div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-300">Accueil</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">À propos</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Nos services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
