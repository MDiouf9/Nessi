const SectionWithTitle = ({ imageSrc, altText, title, content }) => {
    return (
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-6xl font-bold text-gray-800">{title}</h2>
        </div>
  
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Texte à gauche */}
          <div className="md:w-1/2 flex flex-col justify-center h-full text-gray-800">
            <p className="text-lxl leading-relaxed">{content}</p>
          </div>
  
          {/* Image à droite */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img src={imageSrc} alt={altText} className="w-full h-full max-h-[400px] object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    );
  };
  
  export default SectionWithTitle;
  