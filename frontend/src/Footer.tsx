import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-second-bg text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Stefan Hritcu. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
