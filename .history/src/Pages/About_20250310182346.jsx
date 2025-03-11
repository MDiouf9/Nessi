
import Header from '../components/Header'
import SectionWithImage from '../components/Sectionlesft'
import regulier from "../assets/fememenage.png";


const About = () => {
  return (
    <div>
        
        <Header/>
        <section className="bg-[#312783] text-white py-16 flex justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold">PURE EXCELLENCE</h1>
    </section>
    {/* section 2 */}
    <section className=" text-white py-16 flex justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold"> <section className=" text-black py-16 flex justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center">Engagé pour votre espace <br /> propre !</h1>
    </section></h1>
    </section>
        
        <SectionWithImage
             imageSrc={regulier} // Image à afficher
             altText="Nettoyage en action" // Texte alternatif
             title="" // Titre de la section
             content="Chez Nessi Service, nous pensons qu’un espace de travail propre conduit à des équipes plus heureuses et plus productives. Notre objectif est de fournir des services de nettoyage de premier ordre adaptés à vos besoins uniques. Nous sommes fiers d’utiliser des techniques modernes et des produits respectueux de l’environnement, garantissant que votre bureau non seulement a fière allure, mais favorise également un environnement sain. Avec notre équipe dévouée d’experts en nettoyage, nous promettons de transformer votre espace de travail en un espace frais et accueillant où la créativité et la productivité peuvent s’épanouir. Créons ensemble un avenir plus propre !"
           />
























<
  imageSrc="ton_image.png"
  altText="Nettoyage professionnel"
  title="Pure Excellence"
  content="Chez Nessi Service, nous pensons qu’un espace de travail propre conduit à des équipes plus heureuses et plus productives..."
/>

    </div>
  )
}

export default About