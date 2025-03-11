import Header from "../components/Header"


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
        Un espace propre inspire la créativité et la productivité.  
        <br />Choisissez <span className="text-[#312783]">Nessi Service</span> pour briller!
      </h2>

    </div>
  )
}

export default Contact