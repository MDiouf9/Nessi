
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F7B] text-white py-10">
        <img src={logo} alt="Logo" className="h-16" />
      <div className="w-full items-center">
        {/* Première section */}
        <div className=" flex ">
          {/* Première colonne */}
          <div className="lg:w-1/3">
            
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
          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>+221 77 096 41 65</li>
              <li>Dakar, Sénégal, HLM 4, Villa n°1195</li>
              <li><a href="mailto:nessiservice@gmail.com" className="hover:text-gray-300">nessiservice@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Texte footer avec mentions légales et copyright */}
        <div className="mt-10 border-t border-gray-600 pt-6 text-center">
          <p className="text-sm">
            <a href="/mentions-legales" className="hover:text-gray-300">Mentions légales</a> |{" "}
            <a href="/conditions-confidentialite" className="hover:text-gray-300">Conditions de confidentialité</a>
          </p>
          <p className="mt-2 text-sm">
            @Bysouadou © 2024 NESSI Service. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
