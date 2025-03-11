const SectionWithImage = ({ imageSrc, altText, title, content }) => {
    return (
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image à gauche */}
          <div className="md:w-1/2">
            <img src={imageSrc} alt={altText} className="w-full rounded-lg shadow-lg" />
          </div>
          
          {/* Texte à droite */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg leading-relaxed">{content}</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default SectionWithImage;
  