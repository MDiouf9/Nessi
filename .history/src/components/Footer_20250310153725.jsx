import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <div><footer className="bg-[#0B1F7B] text-white py-10"> 
    <div className="flex ">
          <img src={logo} alt="Logo" className="h-28" />
        </div>
      <div className="container mx-auto px-6">
       
        
        {/* Première section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-8 gap-8">
          {/* Première colonne */}
          <div className="lg:w-1/3 flex flex-col items-center text-center">
            <p className="mt-4 text-lg">
              NESSI Service garantit des services de nettoyage professionnels pour un espace propre, sain et accueillant.
            </p>
            <h2 className="py-4">SUIVEZ NOUS:</h2>
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
          <div className="lg:w-1/3 flex flex-col items-center">
            <h3 className="text-xl font-bold">Navigation</h3>
            <ul className="mt-4 space-y-2 text-center">
              <li><a href="/services" className="hover:text-gray-300">Services</a></li>
              <li><a href="/" className="hover:text-gray-300">Accueil</a></li>
              <li><a href="/services" className="hover:text-gray-300">Nos Services</a></li>
              <li><a href="/about" className="hover:text-gray-300">À propos de nous</a></li>
            </ul>
          </div>
          
          {/* Troisième colonne */}
          <div className="lg:w-1/3 flex flex-col items-center">
            <h3 className="text-xl font-bold">Contact</h3>
            <ul className="mt-4 space-y-4 text-center">
              <li className="flex items-center justify-center gap-2">
                <FaPhone className="text-gray-300" />
                +221 77 096 41 65
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-gray-300" />
                Dakar, Sénégal, HLM 4, Villa n°1195
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaEnvelope className="text-gray-300" />
                <a href="mailto:nessiservice@gmail.com" className="hover:text-gray-300">nessiservice@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Texte footer avec mentions légales et copyright */}
       
      </div>
    </footer> <div className="mt-10 border-t border-gray-600 pt-6 text-center">
          <p className="text-sm">
            <a href="/mentions-legales" className="hover:text-gray-300">Mentions légales</a> |{" "}
            <a href="/conditions-confidentialite" className="hover:text-gray-300">Conditions de confidentialité</a>
          </p>
          <p className="mt-2 text-sm">
            @Bysouadou © 2024 NESSI Service. Tous droits réservés.
          </p>
        </div>
         </div>
  );
};

export default Footer;