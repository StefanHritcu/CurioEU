import React from "react";
import mainNewsImage from "./assets/homepageImages/mainNews.jpg";

const HomepageNews: React.FC = () => {
  return (
    <div>
      <div className="tablet-xl:flex tablet-xl:justify-center tablet-xl:items-center tablet-lg:mx-12 tablet-xl:mx-14 laptop:mx-16">
        {/* MAIN HOMEPAGE IMAGE */}
        <div className="relative">
          <img src={mainNewsImage} alt="first news image" loading="lazy" />
        </div>
        {/* MAIN HOMEPAGE IMAGE */}
        <div>
          <section>
            <h1>title</h1>
            <h3>Lorem ipsum dolor sit.</h3>
            <div className="flex items-center justify-between">
              <p>autor</p>
              <p>datum</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomepageNews);
