import React, { useEffect, useState } from "react";
import { EuropaRealTimeData } from "./../dataJSON/EuropaRealTimeData";
import Typography from "../Typography";

type EuropeRealTimeData = {
  title: string;
  value: number;
  timer: number; // Timer in secondi o millisecondi
  newDataForValue: number;
};

const RealTimeData: React.FC = () => {
  const [randomItem, setRandomItem] = useState<EuropeRealTimeData | null>(null);

  useEffect(() => {
    // Seleziona un oggetto casuale dall'array
    const getRandomObject = () => {
      const randomIndex = Math.floor(Math.random() * EuropaRealTimeData.length);
      return EuropaRealTimeData[randomIndex];
    };

    const selectedItem = getRandomObject();
    setRandomItem(selectedItem);

    if (selectedItem) {
      const interval = setInterval(() => {
        setRandomItem((prevItem) => {
          if (prevItem) {
            return {
              ...prevItem,
              value: prevItem.value + prevItem.newDataForValue,
            };
          }
          return null;
        });
      }, selectedItem.timer * 1000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div>
      {randomItem ? (
        <div className="flex items-center justify-start ml-2 text-white font-semibold">
          <Typography className="mr-4" variant="h3">
            {randomItem.title}:
          </Typography>
          <Typography variant="p">{randomItem.value}</Typography>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default React.memo(RealTimeData);
