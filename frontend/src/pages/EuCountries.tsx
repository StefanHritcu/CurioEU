import React, { useState } from "react";
import { motion } from "framer-motion";
import Country from "../components/Country";
import { countryData } from "../dataJSON/countryData"; // Importa il file countryData

const EuCountries: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const [countryInfo, setCountryInfo] = useState<any | null>(null); // Stato per i dettagli del paese

  const radius = 100; // Raggio del cerchio
  const countries = [
    {
      name: "Romania",
      color: "bg-gradient-to-b from-blue-300 via-yellow-300 to-red-300",
      info: "Romania is known for its scenic landscapes and medieval castles, including Dracula's Castle.",
    },
    {
      name: "Ireland",
      color: "bg-gradient-to-b from-green-300 via-white to-orange-300",
      info: "Ireland, the Emerald Isle, is famous for its lush greenery and rich folklore.",
    },
    {
      name: "Germany",
      color: "bg-gradient-to-b from-black via-red-400 to-yellow-400",
      info: "Germany is renowned for its engineering, beer festivals, and historical landmarks.",
    },
    {
      name: "Italy",
      color: "bg-gradient-to-b from-green-500 via-white to-red-500",
      info: "Italy is known for its historical sites, art, and delicious cuisine like pasta and pizza.",
    },
    {
      name: "France",
      color: "bg-gradient-to-b from-blue-300 via-white to-red-400",
      info: "France is famous for its cuisine, art, and landmarks like the Eiffel Tower.",
    },
    {
      name: "Belgium",
      color: "bg-gradient-to-b from-black via-yellow-300 to-red-400",
      info: "Belgium is the home of chocolates, waffles, and the European Union headquarters.",
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleCountryClick = (countryName: string) => {
    setSelectedCountry(countryName);
    setCountryInfo(countryData[countryName]); // Imposta i dati del paese selezionato
  };

  return (
    <div className="tablet-xl:flex tablet-xl:items-center tablet-xl:justify-center min-h-screen bg-gray-50 p-5">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl text-center">
        {/* Description */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Select a Country
        </h2>
        <p className="text-gray-600 mb-6">
          Click the central button to explore European countries.
        </p>

        {/* Interactive Area */}
        <div className="relative w-48 h-48 mx-auto">
          {/* Toggle Button */}
          <motion.button
            onClick={toggleMenu}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-4 bg-blue-400 text-white rounded-full shadow-lg"
            initial={{ scale: 1 }}
            animate={{ scale: isOpen ? 1.1 : 1 }}
            whileHover={{ scale: 1.2 }}
          >
            Select Country
          </motion.button>

          {/* Menu Options */}
          {countries.map((country, index) => {
            // Calcola la posizione lungo l'arco
            const angle = (index / (countries.length - 1)) * Math.PI; // Da 0 a π (semicerchio)
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={country.name}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: isOpen ? x : 0,
                  y: isOpen ? -y : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  delay: isOpen ? index * 0.1 : 0,
                }}
              >
                <button
                  onClick={() => handleCountryClick(country.name)} // Gestisci il click
                  className={`shadow-md text-sm font-bold text-white px-4 py-2 rounded-md cursor-pointer transition-transform transform ${country.color} hover:scale-110`}
                >
                  {country.name}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Country Info */}
        {selectedCountry && (
          <div className="mt-6 bg-gray-200 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">
              {selectedCountry}
            </h3>
            <p className="text-gray-600 mt-2">
              {
                countries.find((country) => country.name === selectedCountry)
                  ?.info
              }
            </p>
          </div>
        )}
      </div>

      {/* Passa i dati del paese selezionato al componente Country */}
      {countryInfo && <Country countryInfo={countryInfo} />}
    </div>
  );
};

export default React.memo(EuCountries);
