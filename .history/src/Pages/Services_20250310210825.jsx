import Header from "../components/Header"
import SectionWithImage from "../components/Sectionlesft"
import magou from "../assets/magou.png";
import aspirateur from "../assets/aspirateur.png";
import SectionWithTitle from "../components/SectionTitle";

function Services() {
  return (
    <div>
         <Header/>
         <section className="bg-[#312783] text-white py-16 flex justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold">La brillance libérée</h1>
    </section>
  
    <SectionWithImage
             imageSrc={magou} // Image à afficher
             altText="Nettoyage en action" // Texte alternatif
             title="" // Titre de la section
             content="Chez Nessi Service, nous pensons qu’un espace de travail propre conduit à des équipes plus heureuses et plus productives. Notre objectif est de fournir des services de nettoyage de premier ordre adaptés à vos besoins uniques. Nous sommes fiers d’utiliser des techniques modernes et des produits respectueux de l’environnement, garantissant que votre bureau non seulement a fière allure, mais favorise également un environnement sain. Avec notre équipe dévouée d’experts en nettoyage, nous promettons de transformer votre espace de travail en un espace frais et accueillant où la créativité et la productivité peuvent s’épanouir. Créons ensemble un avenir plus propre !"
           />


<div>


<SectionWithTitle
  imageSrc={aspirateur}
  altText="Nettoyage professionnel"
  title="Soin Spécialisé"
  content=" Faites l'expérience de notre service Soin Spécialisé, conçu pour les zones qui nécessitent une attention particulière. Nous nous concentrons sur le nettoyage en profondeur et la désinfection pour créer un environnement sûr et sain pour votre personnel et vos visiteurs.
Notre équipe d'experts s'occupe des surfaces fréquemment touchées, des tapis et des tissus d'ameublement, garantissant que chaque recoin soit impeccable. Grâce à des techniques avancées, nous éliminons les allergènes et les bactéries, favorisant ainsi un espace de travail plus sain pour tous.
Nous reconnaissons que chaque espace présente des défis uniques. C'est pourquoi nous personnalisons notre service Soin Spécialisé pour répondre à vos besoins spécifiques, garantissant des résultats optimaux tout en respectant votre horaire et vos routines de travail.
Votre tranquillité d'esprit est notre priorité! Nos professionnels qualifiés s'engagent à vous offrir des résultats exceptionnels et nous sommes toujours à l'écoute de vos commentaires pour nous assurer de répondre à vos attentes à chaque étape du processus.
Découvrez la propreté et le confort accrus que vous apporte notre service Soin Spécialisé. Améliorez votre espace de travail et favorisez le bien-être de votre équipe. Associez-vous à nous dès aujourd'hui pour un environnement plus propre et plus sain!"
/>
<div className="mt- ">
              <button className="bg-[#0B1F7B] px-4 py-2 text-white rounded-md">Rejoignez-nous</button>
            </div>
</div>
    </div>
  )
}

export default Services