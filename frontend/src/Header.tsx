import { Link } from "react-router-dom";
import MainLogo from "./assets/logo/main-logo.png";
import ResponsiveLogo from "./assets/logo/responsive-logo.png";
import { useState } from "react";
import Hamburger from "./assets/hedear/hamburger.svg";
import Close from "./assets/hedear/close.svg";

const Header: React.FC = () => {
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  const handleOpenToggleMenu = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  return (
    <>
      <header className="h-auto z-50 sticky">
        {/* LOGO, LINKS AND BUTTON */}
        <div className="flex items-center justify-between">
          {/* --- --- --- BUTTON (only for mobile devices) --- --- ---  */}
          <button onClick={handleOpenToggleMenu}>
            {isToggleMenuOpen ? (
              <img src={Hamburger} alt="Hamburger Menu" />
            ) : (
              <img src={Close} alt="Close Menu" />
            )}
          </button>

          {/* --- --- --- Logo --- --- ---  */}
          <div>
            <Link to="/">
              <img
                className="hidden tablet:block p-2"
                src={MainLogo}
                alt="main Logo image"
              />
            </Link>
            <Link to="/">
              <img
                className="tablet:hidden pl-14 p-2"
                src={ResponsiveLogo}
                alt="main Logo image"
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
