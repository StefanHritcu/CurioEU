import React, { useState } from "react";
import Typography from "../Typography";
import { FaFacebook, FaArrowRight } from "react-icons/fa";
import { RandomFactsDATA } from "./../dataJSON/RandomFactsDATA";
import RandomFactImage from "./../assets/homepageImages/randomFatcImg.png";

//20 IMAGES
import imgId1 from "./../assets/random20imgId/img1.png";
import imgId2 from "./../assets/random20imgId/img2.png";
import imgId3 from "./../assets/random20imgId/img3.png";
import imgId4 from "./../assets/random20imgId/img4.png";

const AmazingRandomCuriosity: React.FC = () => {
  // Gestisci lo stato della curiosità casuale
  const [randomFact, setRandomFact] = useState(RandomFactsDATA[0]);

  // Funzione per cambiare curiosità
  const handleChangeRandomFact = () => {
    const newFact =
      RandomFactsDATA[Math.floor(Math.random() * RandomFactsDATA.length)];
    setRandomFact(newFact);
  };

  return (
    <div className="relative my-12 items-center px-4 tablet-lg:px-8 w-full max-w-7xl mx-auto">
      {/* MAIN TITLE AND FACEBOOK SHARE LINK BUTTON */}
      <section className="flex justify-between items-center mb-8">
        <Typography
          variant="h2"
          className="font-extrabold text-[32px] tablet-lg:text-[40px]"
        >
          Amazing Random Curiosity
        </Typography>
        <div>
          <a href="#TODO" title="Share this news on Facebook">
            <FaFacebook className="w-10 h-10 text-sky-700" />
          </a>
        </div>
      </section>

      {/* CARD CURIOSITY */}
      <div className="relative mx-auto flex flex-col gap-8 tablet-xl:flex-row tablet-xl:justify-between tablet-xl:items-start border border-blue-300 px-4 rounded-xl p-6">
        {/* Immagine */}
        <img
          src={RandomFactImage}
          alt={randomFact.description}
          className="w-full h-auto mb-2 tablet-xl:w-[400px] tablet-xl:max-w-[400px] tablet-xl:h-auto object-contain"
        />
        {/* Descrizione */}
        <div className="mr-0 tablet-xl:mr-20 text-extrabold text-2xl tablet-xl:text-3xl">
          <p>{randomFact.description}</p>
        </div>
        {/* Photo Source */}
        <p className="absolute bottom-1 left-4 text-sm text-extrabold">
          Photo source:{" "}
          <span className="text-sky-400">{randomFact.photoSource}</span>
        </p>
      </div>

      {/* BUTTON MORE FACTS PLS! */}
      <div className="absolute right-20 -bottom-4 rounded-full bg-violet-600 py-2 px-4 text-white">
        <section
          onClick={handleChangeRandomFact}
          className="flex items-center justify-center cursor-pointer"
        >
          <h2 className="text-lg tablet-xl:text-xl">MORE FACTS PLEASE!</h2>
          <FaArrowRight className="ml-4" />
        </section>
      </div>
    </div>
  );
};

export default React.memo(AmazingRandomCuriosity);
