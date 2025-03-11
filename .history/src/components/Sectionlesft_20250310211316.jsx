const SectionWithImage = ({ imageSrc, altText, title, content }) => {
    return (
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image à gauche */}
          <div className="md:w-1/2 flex justify-aound items-center">
            <img src={imageSrc} alt={altText} className="w-full h-full max-h-[700px] object-center  rounded-lg shadow-lg" />
          </div>
          
          {/* Texte à droite */}
          <div className="md:w-1/2 flex flex-col justify-center h-full">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-2xl leading-relaxed">{content}</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default SectionWithImage;
  