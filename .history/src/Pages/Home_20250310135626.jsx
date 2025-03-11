import React from 'react'

import Header from '../components/Header'
import bg from "../assets/bg.png";
import photo1 from "../assets/photo1.png";
import bureau from "../assets/bureau1.png";
import regulier from "../assets/fememenage.png";
import special from "../assets/vitre.png";
import eco from "../assets/sceau.png";
import brosse from "../assets/brosse.png";
import gang from "../assets/gang.png";
import laveur from "../assets/laveur vitre.png";





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
              src={brosse}
              alt="Conseils Pratiques"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-sm uppercase font-semibold text-[#0B1F7B] mb-2">
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
              src={gang}
              alt="Hygiène Environnementale"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-sm uppercase font-semibold text-[#0B1F7B] mb-2">
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

{/* section6 */}
<section className="bg-[#0B1F7BFC] text-white py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        
        {/* Texte à gauche */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-24">
            Comment Nous Pouvons Vous Aider à Briller!
          </h2>
          <p className=" text-center text-2xl leading-relaxed">
            Chez <span className="font-semibold">Nessi Service</span>, nous croyons en des 
            espaces de travail propres et accueillants. Notre équipe fiable 
            sʼengage à vous offrir un service personnalisé. Ensemble, créons 
            un environnement qui booste le bien-être et la productivité !
          </p>
        </div>

        {/* Image à droite */}
        <div className="md:w-1/2">
          <img
            src={bg}
            alt="Service de nettoyage"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
      </div>
    </section>

{/* section6 */}

<section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center max-w-2xl">
        
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#312783] mb-6">
          Ce Que Nos Clients Disent
        </h2>

        {/* Témoignage */}
        <p className="  text-2xl italic text-gray-700 leading-relaxed">
          "Depuis que nous avons fait appel à <span className="font-semibold">Nessi Service</span>, 
          notre bureau est plus propre que jamais ! Leur équipe est 
          professionnelle et attentive à nos besoins. Nos employés se sentent 
          plus à lʼaise et motivés. Je recommande vivement leurs services à toutes 
          les entreprises qui souhaitent améliorer leur environnement de travail !"
        </p>

        {/* Nom de la société */}
        <p className="mt-4 font-bold text-[#312783]">Mecatronique automobile</p>

      </div>
    </section>


    <section className="relative bg-cover bg-center w h-64 flex items-center justify-center"
      style={{ backgroundImage: `url(${laveur})` }}>
      
      {/* Overlay transparent */}
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>

      {/* Texte au milieu */}
      <h2 className="relative text-2xl md:text-3xl font-bold text-black text-center px-6">
        Un espace propre inspire la créativité et la productivité.  
        <br />Choisissez <span className="text-[#312783]">Nessi Service</span> pour briller!
      </h2>
      
    </section>

      {/* <Navigation/>
      <Countries/> */}

    </div>
  )
}

export default Home