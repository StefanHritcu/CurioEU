import { Link } from "react-router-dom";
import MainLogo from "./assets/logo/main-logo.png";
import ResponsiveLogo from "./assets/logo/responsive-logo.png";
import { useState } from "react";
import Hamburger from "./assets/hedear/hamburger.svg";
import Close from "./assets/hedear/close.svg";
import Typography from "./Typography";
import AnsewerQuestionsIcon from "./assets/hedear/question-mark.svg";
import { FaFacebookF } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";
import { ImLinkedin2 } from "react-icons/im";
import { FiGithub } from "react-icons/fi";

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
          <section className="flex items-center">
            {/* --- --- --- BUTTON (only for mobile devices) --- --- ---  */}
            <button
              onClick={handleOpenToggleMenu}
              className="w-8 h-8 tablet:hidden m-2"
            >
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
                  className="hidden tablet:block pl-12 p-2"
                  src={MainLogo}
                  alt="main Logo image"
                />
              </Link>
              <Link to="/">
                <img
                  className="tablet:hidden pl-10 p-2"
                  src={ResponsiveLogo}
                  alt="main Logo image"
                />
              </Link>
            </div>
          </section>

          {/* --- --- --- tablet and laptops LINKS --- --- ---  */}
          <section className="hidden tablet:block">
            <nav className="flex justify-between">
              <Link to="/random-curiosity">
                <Typography
                  variant="h3"
                  className="font-bold mx-4 p-2 hover:scale-105 duration-1000 transition-transform ease-in-out hover:text-second-bg"
                >
                  Random Curiosity
                </Typography>
              </Link>

              <Link to="/big-questions">
                <Typography
                  variant="h3"
                  className="font-bold mx-4 p-2 hover:scale-105 duration-1000 transition-transform ease-in-out hover:text-second-bg"
                >
                  Big Questions
                </Typography>
              </Link>

              <Link to="/eu-countries">
                <Typography
                  variant="h3"
                  className="font-bold mx-4 p-2 hover:scale-105 duration-1000 transition-transform ease-in-out hover:text-second-bg"
                >
                  Eu-Countries
                </Typography>
              </Link>

              <Link to="/data-charts">
                <Typography
                  variant="h3"
                  className="font-bold mx-4 p-2 hover:scale-105 duration-1000 transition-transform ease-in-out hover:text-second-bg"
                >
                  Data Charts
                </Typography>
              </Link>
            </nav>
          </section>

          {/* --- --- --- question mark --- --- ---  */}
          <section className="flex items-center">
            <Typography
              variant="p"
              className="hidden tablet:block text-[52px] font-thin"
            >
              |
            </Typography>
            <Link to="/answer-questions">
              <img
                className="w-12 h-12 mx-8 hover:scale-110 duration-700 transform-transition"
                src={AnsewerQuestionsIcon}
                alt="Answer questions icon"
              />
            </Link>
          </section>
        </div>
        {/* --- --- --- PROGRAMMER FACEBOOK, YOUTUBE, LINKEDIN, GITHUB AND MAIL LINKS --- --- ---  */}
        <section className="bg-second-bg h-14">
          <div className="hidden tablet:block">
            <nav className="flex items-center justify-end">
              <a
                href="https://www.facebook.com/profile.php?id=61563101911367"
                target="_blank"
                className="hover:text-gray-800"
                rel="noopener"
                title="facebook"
              >
                <FaFacebookF className="text-white m-4 h-5 w-auto" />
              </a>

              <a
                href="https://www.youtube.com/@ilpellegrinostefano.7216"
                target="_blank"
                className="hover:text-gray-800"
                rel="noopener"
                title="youtube"
              >
                <LuYoutube className="text-white m-4 h-5 w-auto" />
              </a>

              <a
                href="https://www.linkedin.com/in/stefan-florian-hritcu-ba615431b/"
                target="_blank"
                className="hover:text-gray-800"
                rel="noopener"
                title="linkedin"
              >
                <ImLinkedin2 className="text-white m-4 h-5 w-auto" />
              </a>

              <a
                href="https://github.com/StefanHritcu"
                target="_blank"
                className="hover:text-gray-800"
                rel="noopener"
                title="github"
              >
                <FiGithub className="text-white m-4 h-5 w-auto" />
              </a>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
