import React from 'react'

import Header from '../components/Header'
import bg from "../assets/bg.png";
import photo1 from "../assets/photo1.png";
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
      {/* <Navigation/>
      <Countries/> */}

    </div>
  )
}

export default Home