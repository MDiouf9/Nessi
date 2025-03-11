import Header from "../components/Header"
import mousse from "../assets/mousse.png";
import facebook from "../assets/facebook.png";
import ContactForm from "../components/Form";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
<Header/>
 <section className="relative bg-cover bg-center py-16 h-96 flex items-center justify-center"
      style={{ backgroundImage: `url(${mousse})` }}>
      
      {/* Overlay transparent */}
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>

      {/* Texte au milieu */}
      <h2 className="relative  text-3xl md:text-3xl font-bold text-black text-center ">
      CONTACTEZ-NOUS 
       </h2>
      
    </section>

    <ContactForm/>

    <section 
      className="h-[500px] bg-cover bg-center mb" 
      style={{ backgroundImage: `url(${facebook})` }}
    >
    </section>

<Footer/>
    </div>
  )
}

export default Contact