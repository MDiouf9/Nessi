import React from 'react'

import Header from '../components/Header'
import bg from "../assets/bg.png";
import photo1 from "../assets/photo1.png";
import bureau from "../assets/bureau1.png";
import regulier from "../assets/fememenage.png";
import special from "../assets/vitre.png";
import eco from "../assets/sceau.png";
import brosse from "../assets/brosse.jpg";
import article2 from "../assets/article2.jpg";





const Home = () => {
  return (
    <div>
       < Header/>
       <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay transparent */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6">
        {/* Texte à gauche */}
        <div className="text-white text-6xl font-bold mb-4">
          <h1>VOTRE ESPACE,<br /> NOTRE EN PROPRETÉ</h1>
        </div>

        {/* Carré transparent à droite */}
        <div className="bg-white bg-opacity-50 text-black p-4 w-80 h- flex items-center justify-center">
          <p className="text-center">Nous  offrons des services de nettoyage sur mesure pour
 un environnement de travail  sain et agraeble.
 Votre bien être ,notre  priorité</p>
        </div>
      </div>
    </section>
    {/* section2  */}


    <section className="flex items-center justify-between p-10">
      {/* Photo à gauche */}
      <div className="w-1/2">
        <img src={photo1} alt="Qui Nous Sommes" className="w-full h-auto rounded-lg shadow-lg" />
      </div>

      {/* Contenu texte à droite */}
      <div className="w-1/2 pl-10">
        {/* Titre */}
        <h2 className="text-3xl font-semibold text-[#312783] mb-4">
          Qui Nous Sommes
        </h2>
        <h3 className="text-2xl font-medium text-[#312783] mb-6">
          Pourquoi Nous Comptons
        </h3>

        {/* Paragraphe */}
        <p className="text-lg text-gray-700">
          Chez Nessi Service, nous croyons quʼun environnement propre est essentiel pour le bien-être et la productivité. Notre histoire a commencé avec une simple idée : offrir des services de nettoyage professionnels et personnalisés qui répondent aux besoins uniques de chaque entreprise. Notre équipe passionnée utilise des méthodes modernes et efficaces pour transformer vos bureaux en espaces agréables. En choisissant Nessi Service, vous optez pour un partenaire fiable, engagé à créer des lieux de travail sains et accueillants pour vos équipes.
        </p>
      </div>
    </section>

    {/* section3 */}
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Titre de la section */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Nos Services
        </h2>

        {/* Grille des services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Carte 1 */}
          <div className="relative group">
            <img
              src={bureau}
              alt="Nettoyage Bureaux"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-lg">
              <h3 className="text-lg font-semibold ">Nettoyage Bureaux</h3>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="relative group">
            <img
              src={regulier}
              alt="Entretien Régulier"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-lg">
              <h3 className="text-lg font-semibold">Entretien Régulier</h3>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="relative group">
            <img
              src={special}
              alt="Nettoyage Spécial"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-lg">
              <h3 className="text-lg font-semibold ">Nettoyage Spécial</h3>
            </div>
          </div>

          {/* Carte 4 */}
          <div className="relative group">
            <img
              src={eco}
              alt="Service Écologique"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-lg">
              <h3 className="text-lg font-semibold ">Service Écologique</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* section 5 */}


<section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Titre principal */}
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Articles
        </h2>

        {/* Contenu des articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Article 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={article1}
              alt="Conseils Pratiques"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-sm uppercase font-semibold text-blue-700 mb-2">
                Conseils Pratiques
              </h3>
              <p className="text-gray-800 text-lg font-medium">
                5 Astuces pour Garder Votre Bureau Propre et Organisé au Quotidien
              </p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={article2}
              alt="Hygiène Environnementale"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-sm uppercase font-semibold text-green-700 mb-2">
                Hygiène Environnementale
              </h3>
              <p className="text-gray-800 text-lg font-medium">
                Pourquoi Choisir des Produits Écologiques pour le Nettoyage de Votre Bureau?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>











      {/* <Navigation/>
      <Countries/> */}

    </div>
  )
}

export default Home