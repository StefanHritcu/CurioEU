import React from "react";
import Typography from "./Typography";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";
import { ImLinkedin2 } from "react-icons/im";
import { FiGithub } from "react-icons/fi";

import { motion } from "framer-motion";
import { toggleMenu } from "./features/MainSlice";
import { useAppSelector } from "./hook";
import { useDispatch } from "react-redux";

const ToggleMenu: React.FC = () => {
  const toggleMenuOpenStatus = useAppSelector(
    (state) => state.main.isToggleMenuOpen
  );
  const dispatch = useDispatch();

  const handleLinkClicked = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: toggleMenuOpenStatus ? 0 : -1000 }}
        className="absolute tablet-lg:hidden top-[76px] bg-second-bg w-min-[320px] w-max-[768px] w-full h-screen"
      >
        <div className="flex flex-col items-start justify-center pl-4 mt-6">
          {/* Random Curiosity LINK */}
          <Link
            to="/random-curiosity"
            className="mb-4"
            onClick={handleLinkClicked}
          >
            <Typography
              variant="p"
              className="text-white font-semibold hover:scale-105 duration-500 transition-transform ease-in-out"
            >
              Random Curiosity
            </Typography>
          </Link>
          {/* Big Questions LINK */}
          <Link
            to="/big-questions"
            className="mb-4"
            onClick={handleLinkClicked}
          >
            <Typography
              variant="p"
              className="text-white font-semibold hover:scale-105 duration-500 transition-transform ease-in-out"
            >
              Big Questions
            </Typography>
          </Link>

          {/* Eu-Countries LINK */}
          <Link to="/eu-countries" className="mb-4" onClick={handleLinkClicked}>
            <Typography
              variant="p"
              className="text-white font-semibold hover:scale-105 duration-500 transition-transform ease-in-out"
            >
              Eu-Countries
            </Typography>
          </Link>
          {/* Data Charts LINK */}
          <Link to="/data-charts" className="mb-4" onClick={handleLinkClicked}>
            <Typography
              variant="p"
              className="text-white font-semibold hover:scale-105 duration-500 transition-transform ease-in-out"
            >
              Data Charts
            </Typography>
          </Link>
        </div>

        <div className="mt-4">
          <nav className="flex items-center justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=61563101911367"
              target="_blank"
              className="hover:text-gray-800"
              rel="noopener"
              title="facebook"
            >
              <FaFacebookF className="text-white m-4 h-6 w-auto" />
            </a>

            <a
              href="https://www.youtube.com/@ilpellegrinostefano.7216"
              target="_blank"
              className="hover:text-gray-800"
              rel="noopener"
              title="youtube"
            >
              <LuYoutube className="text-white m-4 h-6 w-auto" />
            </a>

            <a
              href="https://www.linkedin.com/in/stefan-florian-hritcu-ba615431b/"
              target="_blank"
              className="hover:text-gray-800"
              rel="noopener"
              title="linkedin"
            >
              <ImLinkedin2 className="text-white m-4 h-6 w-auto" />
            </a>

            <a
              href="https://github.com/StefanHritcu"
              target="_blank"
              className="hover:text-gray-800"
              rel="noopener"
              title="github"
            >
              <FiGithub className="text-white m-4 h-6 w-auto" />
            </a>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

// REACT.MEMO(TOGGLEMENU) avoid unnecessary rendering of a component if the proprs are not changed
export default React.memo(ToggleMenu);
