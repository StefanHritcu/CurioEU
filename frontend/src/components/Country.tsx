import React from "react";
import { countryData } from "./../dataJSON/countryData";

interface CountryProps {
  countryInfo: {
    name: string;
    capital: string;
    population: string;
    currency: string;
    language: string;
    landmarks: string[];
    history: {
      founded: string;
      keyEvents: string[];
    };
    trivia: string[];
    tourism: { type: string; description: string }[];
  } | null;
}

const Country: React.FC<CountryProps> = ({ countryInfo }) => {
  if (!countryInfo) {
    return <div>Country not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full p-10 relative overflow-hidden">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-500">
            The Wonders of {countryInfo.name}
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Explore the fascinating details of {countryInfo.name}.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-400 mb-3">
                Quick Facts
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong>Capital:</strong> {countryInfo.capital}
                </li>
                <li>
                  <strong>Population:</strong> {countryInfo.population}
                </li>
                <li>
                  <strong>Currency:</strong> {countryInfo.currency}
                </li>
                <li>
                  <strong>Language:</strong> {countryInfo.language}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-400 mb-3">Trivia</h2>
              <ul className="space-y-2 text-gray-600">
                {countryInfo.trivia.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center Column */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-5">History</h2>
            <p className="text-gray-600 mb-6">
              {countryInfo.name} has a rich history, dating back to{" "}
              {countryInfo.history.founded}.
            </p>
            <h3 className="text-xl font-bold text-blue-300 mb-3">
              Timeline Highlights:
            </h3>
            <ul className="space-y-2 text-gray-600">
              {countryInfo.history.keyEvents.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-5">Tourism</h2>
            <p className="text-gray-600 mb-6">
              {countryInfo.name} offers unique attractions, from its historical
              landmarks to modern cultural experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              {countryInfo.tourism.map((item, index) => (
                <div
                  className="bg-blue-200 rounded-lg p-4 flex-1 min-w-[150px]"
                  key={index}
                >
                  <h3 className="text-lg font-semibold text-blue-500">
                    {item.type}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300 opacity-20 rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400 opacity-10 rounded-full"></div>
      </div>
    </div>
  );
};

export default React.memo(Country);
