const OurJourneySection = () => {
    return (
      <section className="text-black py-16 px-6 md:px-16">
        <div className="container mx-auto text-center">
          {/* Titre */}
          <h2 className="text-4xl font-bold mb-6">Notre voyage vers la propreté</h2>
  
          {/* Texte + bouton aligné à gauche */}
          <div className="max-w-3xl mx-auto text-left">
            <p className="text-lg leading-relaxed">
              Nessi Service a débuté avec une vision simple : élever les normes de propreté dans les espaces de travail partout dans le monde. 
              Fondée par une équipe de passionnés du nettoyage, nous avons décidé de créer un service qui se soucie vraiment du bien-être des personnes et de l'environnement.
              Depuis nos humbles débuts, nous sommes devenus un partenaire de confiance pour les entreprises à la recherche de lieux de travail impeccables et hygiéniques. 
              Notre engagement à utiliser des produits respectueux de l'environnement et des techniques de nettoyage innovantes a toujours été au cœur de nos opérations. 
              Chaque jour, nous nous efforçons d'avoir un impact positif, en veillant à ce que chaque bureau que nous touchons devienne un endroit plus sain et plus accueillant. 
            </p>
  
            {/* Bouton aligné à gauche */}
            <div className="mt-4">
              <button className="bg-[#0B1F7B] px-4 py-2 text-white rounded-md">Rejoignez-nous</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurJourneySection;
  