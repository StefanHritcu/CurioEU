import { Link } from "react-router-dom";
import MainLogo from "./assets/logo/main-logo.png";
import ResponsiveLogo from "./assets/logo/responsive-logo.png";
import { useEffect, useState } from "react";
import Hamburger from "./assets/hedear/hamburger.svg";
import Close from "./assets/hedear/close.svg";
import Typography from "./Typography";
import AnsewerQuestionsIcon from "./assets/hedear/question-mark.svg";
import { FaFacebookF } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";
import { ImLinkedin2 } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./features/MainSlice";
import RealTimeData from "./components/RealTimeData";
import { useAppSelector } from "./hook";

{
  /* INTERFACE specifies what props a component expects */
}
interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleOpenToggleMenu = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  const dispatch = useDispatch();
  //TOGGLE MENU CLICKED
  const handleIsToggleMenuClicked = () => {
    dispatch(toggleMenu());
  };

  const ToggleMenuStats = useAppSelector(
    (state) => state.main.isToggleMenuOpen
  );

  const handleCloseToggleMenu = () => {
    if (ToggleMenuStats) {
      dispatch(toggleMenu());
    }
  };

  return (
    <>
      <header className="h-auto z-50 overflow-hidden">
        {/* LOGO, LINKS AND BUTTON */}
        <div className="flex items-center justify-between">
          <section className="flex items-center">
            {/* --- --- --- BUTTON (only for mobile devices) --- --- ---  */}
            <button
              onClick={handleOpenToggleMenu}
              className="w-8 h-8 tablet-lg:hidden m-2"
              aria-label={isToggleMenuOpen ? "Close menu" : "Open menu"}
            >
              {isToggleMenuOpen ? (
                <motion.img
                  initial={{ x: 0 }}
                  animate={{ x: isScrolled ? -100 : 0 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  src={Close}
                  alt="Close Menu"
                  onClick={handleIsToggleMenuClicked}
                />
              ) : (
                <motion.img
                  initial={{ x: 0 }}
                  animate={{ x: isScrolled ? -100 : 0 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  src={Hamburger}
                  alt="Hamburger Menu"
                  onClick={handleIsToggleMenuClicked}
                />
              )}
            </button>

            {/* --- --- --- Logo --- --- ---  */}
            <div>
              <Link to="/" onClick={handleCloseToggleMenu}>
                <motion.img
                  initial={{ x: 0 }}
                  animate={{ x: isScrolled ? -200 : 0 }}
                  transition={{ type: "spring", stiffness: 100, duration: 0.7 }}
                  className="hidden tablet-lg:block pl-12 p-2"
                  src={MainLogo}
                  alt="main Logo image"
                />
              </Link>
              <Link to="/" onClick={handleCloseToggleMenu}>
                <motion.img
                  initial={{ x: 0 }}
                  animate={{ x: isScrolled ? -200 : 0 }}
                  transition={{ type: "spring", stiffness: 100, duration: 0.7 }}
                  className="tablet-lg:hidden pl-10 p-2"
                  src={ResponsiveLogo}
                  alt="main Logo image"
                />
              </Link>
            </div>
          </section>

          {/* --- --- --- tablet and laptops LINKS --- --- ---  */}
          <section className="hidden tablet-lg:block">
            <nav className="flex justify-between">
              <Link to="/random-curiosity">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: isScrolled ? -50 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 1,
                  }}
                >
                  <Typography
                    variant="h3"
                    className="font-bold mx-4 p-2 hover:scale-105 duration-1000 transition-transform ease-in-out hover:text-second-bg"
                  >
                    Random Curiosity
                  </Typography>
                </motion.div>
              </Link>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: isScrolled ? -70 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 130,
                  duration: 1.3,
                }}
              >
                <Link to="/big-questions">
                  <Typography
                    variant="h3"
                    className="font-bold mx-4 p-2 hidden tablet-xl:block hover:scale-105 duration-1000 transition-transform ease-in-out hover:text-second-bg"
                  >
                    Big Questions
                  </Typography>
                </Link>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: isScrolled ? -90 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  duration: 1.7,
                }}
              >
                <Link to="/eu-countries">
                  <Typography
                    variant="h3"
                    className="font-bold mx-4 p-2 hover:scale-105 hidden laptop-md:block duration-1000 transition-transform ease-in-out hover:text-second-bg"
                  >
                    Eu-Countries
                  </Typography>
                </Link>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: isScrolled ? -120 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 190,
                  duration: 2,
                }}
              >
                <Link to="/data-charts">
                  <Typography
                    variant="h3"
                    className="font-bold mx-4 p-2 hidden laptop-middle:block hover:scale-105 duration-1000 transition-transform ease-in-out hover:text-second-bg"
                  >
                    Data Charts
                  </Typography>
                </Link>
              </motion.div>
            </nav>
          </section>

          {/* --- --- --- question mark --- --- ---  */}
          <section className="flex items-center">
            <Typography
              variant="p"
              className="hidden tablet:block text-[56px] mb-2 font-thin z-10 overflow-hidden"
            >
              |
            </Typography>

            <motion.div
              initial={{ x: 0 }}
              animate={{ x: isScrolled ? 120 : 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                duration: 3,
              }}
            >
              <Link to="/answer-questions">
                <img
                  className="w-12 h-12 mx-8 hover:scale-110 duration-700 transform-transition"
                  src={AnsewerQuestionsIcon}
                  alt="Answer questions icon"
                />
              </Link>
            </motion.div>
          </section>
        </div>
        {/* --- --- --- PROGRAMMER FACEBOOK, YOUTUBE, LINKEDIN, GITHUB AND MAIL LINKS --- --- ---  */}
        <section
          className={`h-14 bg-second-bg z-50 flex items-center justify-between ${
            ToggleMenuStats ? "hidden" : "block"
          }`}
        >
          <RealTimeData />

          <div className="hidden tablet-lg:block">
            <nav className="flex items-center justify-center">
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

// REACT.MEMO(HEADER) avoid unnecessary rendering of a component if the props are not changed
export default React.memo(Header);
