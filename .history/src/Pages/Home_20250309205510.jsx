import React from 'react'

import Header from '../components/Header'
import bg from "../assets/bg.png";
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
        <div className="text-white text-4xl font-bold mb-4">
          <h1>VOTRE ESPACE, NOTRE EN PROPRETÉ</h1>
        </div>

        {/* Carré transparent à droite */}
        <div className="bg-white bg-opacity-50 text-black p-4 w-64 flex items-center justify-center">
          <p className="text-center">UNous  offrons des services de nettoyage sur mesure pour
 un environnement de travail  sain et agraeble.
 Votre bien être ,notre  priorité</p>
        </div>
      </div>
    </section>
      {/* <Navigation/>
      <Countries/> */}

    </div>
  )
}

export default Home