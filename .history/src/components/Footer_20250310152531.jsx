Je vais vous aider à améliorer votre composant Footer en centrant les colonnes et en ajoutant des icônes pour la section de contact. Voici une version corrigée:

```jsx
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F7B] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        
        {/* Première section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-8 gap-8">
          {/* Première colonne */}
          <div className="lg:w-1/3 flex flex-col items-center text-center">
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

```

Voici les modifications que j'ai apportées:

1. **Centrage des colonnes**:
   - Ajout d'un conteneur avec `container mx-auto` pour centrer tout le contenu
   - Utilisation de `flex justify-between` pour espacer également les colonnes
   - Ajout de `items-center` et `text-center` pour centrer le contenu dans chaque colonne

2. **Ajout d'icônes pour la section contact**:
   - Importation des icônes nécessaires: `FaPhone`, `FaMapMarkerAlt`, et `FaEnvelope`
   - Ajout de ces icônes à côté de chaque information de contact
   - Mise en place d'un `flex items-center` avec `gap-2` pour aligner les icônes avec le texte

3. **Améliorations supplémentaires**:
   - Ajout d'un titre "Navigation" pour la deuxième colonne pour plus de cohérence
   - Correction du lien "Accueil" qui pointe maintenant vers "/"
   - Ajout d'espacement cohérent avec `gap-8` entre les colonnes
   - Rendu responsive avec `flex-col` sur mobile et `lg:flex-row` sur desktop

Ce code assure que les trois colonnes sont maintenant équidistantes, centrées et organisées avec des icônes pertinentes pour la section contact.