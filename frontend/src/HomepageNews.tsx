import React, { useEffect, useState } from "react";
import mainNewsImage from "./assets/homepageImages/mainNews.jpg";
import Typography from "./Typography";
import { FourLastNewsHomePageData } from "./dataJSON/FourLastNewsHomePageData";

const HomepageNews: React.FC = () => {
  type FourLastNewsType = {
    tag: string;
    description: string;
    author: string;
    date: string;
  };

  const [FourLastNewsDataState, setFourLastNewsDataState] = useState<
    FourLastNewsType[] | null
  >(null);

  useEffect(() => {
    setFourLastNewsDataState(FourLastNewsHomePageData);
  });
  return (
    <div className="flex flex-col items-center my-12 px-4 tablet-lg:px-8">
      {/* MAIN HOMEPAGE IMAGE AND LAST 3 NEWS */}
      <div className="flex flex-col gap-8 tablet-xl:flex-row tablet-xl:justify-between tablet-xl:items-start w-full max-w-7xl">
        {/* MAIN HOMEPAGE IMAGE */}

        {FourLastNewsDataState
          ? FourLastNewsHomePageData.slice(0, 1).map((news, index) => (
              <div className="relative mx-auto tablet-xl:w-3/4 flex-shrink-0">
                <img
                  src={mainNewsImage}
                  className="w-full max-w-[800px] min-w-[320px] mx-auto rounded-md shadow-lg"
                  alt="first news image"
                  loading="lazy"
                />

                {/* RESPONSIVE TEXT   */}
                <div className="absolute bottom-[14%] left-[2%] tablet-xl:left-[10%] bg-pink-600 text-white z-10">
                  <p className="p-1">{news.tag}</p>
                </div>
                {/* RESPONSIVE DESCRTIPTION */}
                <div className="absolute bottom-[4%] left-[2%] tablet-xl:left-[10%] text-white font-extrabold z-10">
                  <h2 className="p-1">{news.description}</h2>
                </div>
              </div>
            ))
          : "Loading..."}

        {/* LAST 3 NEWS */}
        <div className="flex flex-col gap-6 min-w-[300px] tablet-xl:w-1/4 flex-shrink-0">
          {FourLastNewsDataState
            ? FourLastNewsHomePageData.slice(1, 4).map((news, index) => (
                <section className="px-2">
                  {/* TITLE */}
                  <Typography
                    variant="p"
                    className="text-purple-600 text-[24px] font-semibold"
                  >
                    {news.tag}
                  </Typography>
                  <Typography
                    variant="p"
                    className="font-extrabold text-[14px]"
                  >
                    {news.description}
                  </Typography>
                  <div className="flex items-center justify-start mt-4 text-gray-500">
                    <p className="mr-4">{news.author}</p>
                    <p>{news.date}</p>
                  </div>
                  <div className="text-transparent border border-t-2 border-second-bg w-auto h-0 my-2">
                    .
                  </div>
                </section>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomepageNews);
