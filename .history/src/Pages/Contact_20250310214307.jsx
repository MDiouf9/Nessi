import Header from "../components/Header"
import mousse from "../assets/mousse.png";

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

    <form action=""></>


    </div>
  )
}

export default Contact