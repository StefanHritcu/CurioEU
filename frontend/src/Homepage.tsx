import React from "react";
import HomepageNews from "./HomepageNews";

const Homepage: React.FC = () => {
  return (
    <>
      <div className="mx-6 tablet-lg:mx-12 tablet-xl:mx-14 laptop:mx-20">
        <HomepageNews />
      </div>
    </>
  );
};

export default React.memo(Homepage);
