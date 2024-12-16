import React from "react";
import mainNewsImage from "./assets/homepageImages/mainNews.jpg";
import Typography from "./Typography";

const HomepageNews: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16">
      {/* MAIN HOMEPAGE IMAGE AND LAST 3 NEWS */}
      <div className="w-full flex flex-col tablet-xl:flex-row tablet-xl:justify-center tablet-xl:items-start gap-8">
        {/* MAIN HOMEPAGE IMAGE */}
        <div className="relative mx-auto w-full tablet-xl:w-3/5">
          <img
            src={mainNewsImage}
            className="w-full max-w-[700px] min-w-[280px] mx-auto rounded-md"
            alt="first news image"
            loading="lazy"
          />
        </div>

        {/* LAST 3 NEWS */}
        <div className="flex flex-col gap-8 w-full tablet-xl:w-2/5">
          <section className="p-4 border rounded-lg shadow-sm bg-white">
            {/* TITLE */}
            <Typography variant="p" className="text-purple-600 font-semibold">
              Title
            </Typography>
            <Typography variant="p" className="font-extrabold text-[20px] mt-2">
              Io diciamo che ci sono cresciuto li. Ma non pensavo che e
              diventata cosi cara. Io x una stanza abbastanza capiente pagavo d
              affitto 10 Marchi al giorno.
            </Typography>
            <div className="flex items-center justify-between mt-4 text-gray-500">
              <p>Autor</p>
              <p>Datum</p>
            </div>
          </section>

          {/* Additional News Blocks (example placeholder, duplicate for other news items) */}
          <section className="p-4 border rounded-lg shadow-sm bg-white">
            <Typography variant="p" className="text-purple-600 font-semibold">
              Another Title
            </Typography>
            <Typography variant="p" className="font-extrabold text-[20px] mt-2">
              Placeholder content for another news article.
            </Typography>
            <div className="flex items-center justify-between mt-4 text-gray-500">
              <p>Autor</p>
              <p>Datum</p>
            </div>
          </section>

          <section className="p-4 border rounded-lg shadow-sm bg-white">
            <Typography variant="p" className="text-purple-600 font-semibold">
              Final Title
            </Typography>
            <Typography variant="p" className="font-extrabold text-[20px] mt-2">
              Yet another placeholder for news content here.
            </Typography>
            <div className="flex items-center justify-between mt-4 text-gray-500">
              <p>Autor</p>
              <p>Datum</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomepageNews);
