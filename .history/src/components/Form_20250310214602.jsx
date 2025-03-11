import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: [],
    locationType: [],
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesOptions = [
    "Nettoyage des sols",
    "Nettoyage des vitres et fenêtres",
    "Dépoussiérage",
    "Autre",
  ];

  const locationOptions = ["Bureau", "Entreprise", "Maison", "Autre"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setIsSubmitted(true);

    // Réinitialiser le formulaire après soumission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        services: [],
        locationType: [],
        message: "",
      });
    }, 3000);
  };

  return (
    <section className=" py-16 px-6 md:px-16">
      <div className="container mx-auto max-w-3xl  p-8 ">
        <h2 className="text-3xl font-bold text-center mb-6">Formulaire de contact</h2>

        {isSubmitted && (
          <p className="text-green-600 text-center mb-4">Message bien envoyé !</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Champ Nom */}
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-1 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Champ Email */}
          <div>
            <label className="block font-semibold mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Services souhaités */}
          <div>
            <label className="block font-semibold mb-2">Quels services de nettoyage souhaitez-vous ?</label>
            <div className="grid grid-cols-2 gap-2">
              {servicesOptions.map((service, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* Type de lieu */}
          <div>
            <label className="block font-semibold mb-2">
              Quel type de lieu souhaiteriez-vous voir nettoyé par NESSI Service ?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {locationOptions.map((location, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="locationType"
                    value={location}
                    checked={formData.locationType.includes(location)}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  {location}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Décrivez votre demande..."
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Bouton Envoyer */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
