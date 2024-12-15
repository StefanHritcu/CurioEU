import React from "react";
import HomepageNews from "./HomepageNews";

const Homepage: React.FC = () => {
  return (
    <>
      <HomepageNews />
    </>
  );
};

export default React.memo(Homepage);
