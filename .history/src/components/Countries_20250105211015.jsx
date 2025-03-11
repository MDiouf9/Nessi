import React, { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
  // Liste des continents
  const continent = ["Amerique", "Asie", "Europe", "Afrique", "Oceanie"];
  // États pour la gestion des pays et du continent sélectionné
  const [data, setData] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState(""); // Continent sélectionné

  // Récupération des pays depuis l'API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,population,region,capital"
        );
        setData(response.data);
        console.log("Données récupérées :", response.data);
      } catch (error) {
        console.error("Erreur de l'API", error);
      }
    };
    fetchCountries();
  }, []);

  // Fonction de gestion du changement de continent sélectionné
  const handleSelect = (e) => {
    setSelectedContinent(e.target.value); // Met à jour le continent sélectionné
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Countries</h1>
      <div className="flex justify-center items-center flex-col space-y-4">
        {/* Liste des continents sous forme de boutons radio */}
        <div className="flex space-x-4">
          {continent.map((count, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                name="continent"
                value={count}
                onChange={handleSelect}
                className="accent-blue-500 cursor-pointer"
              />
              <span>{count}</span>
            </label>
          ))}
        </div>

        {/* Barre de volume */}
        <div className="w-4/6 h-8 bg-blue-800 rounded-full flex items-center">
          <input
            type="range"
            min="0"
            max="250"
            step="1"
            defaultValue="0"
            className="w-full h-1 bg-white cursor-pointer accent-cyan-500"
          />
        </div>

        {/* Liste des pays */}
        <ul className="space-y-2">
          {data
            .filter((country) =>
              selectedContinent
                ? country.region === selectedContinent
                : true
            ) // Filtre par continent si un continent est sélectionné
            .map((country, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded shadow-md w-80 mx-auto"
              >
                <strong>{country.name.common}</strong> <br />
                Population : {country.population.toLocaleString()} <br />
                Région : {country.region} <br />
                Capitale : {country.capital ? country.capital[0] : "N/A"}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Countries;
