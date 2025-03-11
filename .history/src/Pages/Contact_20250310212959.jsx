import Header from "../components/Header"
import laveur from "../assets/laveur vitre.png";

function Contact() {
  return (
    <div>
<Header/>
 <section className="relative bg-cover bg-center py-16 h-96 flex items-center justify-center"
      style={{ backgroundImage: `url(${laveur})` }}>
      
      {/* Overlay transparent */}
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>

      {/* Texte au milieu */}
      <h2 className="relative text-2xl md:text-3xl font-bold text-black text-center px-6">
      CONTACTEZ-NOUS 
       
      </h2>
      
    </section>


    </div>
  )
}

export default Contact