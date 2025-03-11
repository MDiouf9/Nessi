import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F7B] text-white py-10">
      <div className="container mx-auto px-6">
        {/* Première section */}
        <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
          {/* Première colonne */}
          <div className="lg:w-1/3">
            <img 
              src={process.env.PUBLIC_URL + '/assets/logo1.png'} 
              alt="Logo" 
              className="h-16"
            />
            <p className="mt-4 text-lg">
              NESSI Service garantit des services de nettoyage professionnels pour un espace propre, sain et accueillant.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Deuxième colonne */}
          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/services" className="hover:text-gray-300">Accueil</a></li>
              <li><a href="/services" className="hover:text-gray-300">Nos Services</a></li>
              <li><a href="/about" className="hover:text-gray-300">À propos de nous</a></li>
            </ul>
          </div>

          {/* Troisième colonne */}
          <div
