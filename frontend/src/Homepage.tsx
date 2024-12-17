import React from "react";
import HomepageNews from "./HomepageNews";
import AmazingRandomCuriosity from "./components/AmazingRandomCuriosity";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <>
      <div className="mx-2 tablet-lg:mx-4 tablet-xl:mx-6 laptop:mx-20">
        <HomepageNews />
        <Link to="/random-curiosity">
          <AmazingRandomCuriosity />
        </Link>
      </div>
    </>
  );
};

export default React.memo(Homepage);
