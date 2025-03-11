import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F7B] text-white py-10">  <div className="w-1/3">
            <img src={logo} alt="Logo" className="h-16" />
          </div>
      <div className="container mx-auto px-6">
        {/* Première section avec logo à gauche et espace égal entre les autres éléments */}
        <div className="flex justify-between items-center">
          {/* Logo à gauche */}
        

          {/* Autres éléments avec espacement égal */}
          <div className="flex justify-between w-2/3">
            {/* Première colonne */}
            <div>
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
            <div className="px-8">
              <h3 className="text-xl font-bold">Services</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="/services" className="hover:text-gray-300">Accueil</a></li>
                <li><a href="/services" className="hover:text-gray-300">Nos Services</a></li>
                <li><a href="/about" className="hover:text-gray-300">À propos de nous</a></li>
              </ul>
            </div>

            {/* Troisième colonne */}
            <div className="px-8">
              <h3 className="text-xl font-bold">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li>+221 77 096 41 65</li>
                <li>Dakar, Sénégal, HLM 4, Villa n°1195</li>
                <li><a href="mailto:nessiservice@gmail.com" className="hover:text-gray-300">nessiservice@gmail.com</a></li>
              </ul>
            </div>
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
