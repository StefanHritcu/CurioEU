import React, { lazy as ReactLazy, Suspense, useEffect, useState } from "react";
import Header from "./Header";
import ToggleMenu from "./ToggleMenu";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";

const Homepage = ReactLazy(() => import("./Homepage"));
const RandomCuriosity = ReactLazy(() => import("./pages/RandomCuriosity"));
const BigQuestions = ReactLazy(() => import("./pages/BigQuestions"));
const EuCountries = ReactLazy(() => import("./pages/EuCountries"));
const DataCharts = ReactLazy(() => import("./pages/DataCharts"));
const AnswerQuestions = ReactLazy(() => import("./pages/AnswerQuestions"));

const App: React.FC = () => {
  // becomes TRUE if the scroll reaches scroll 0 or 50 maximum
  const [isScrolledToTop, setIsScrolledToTop] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollPosition: number = window.scrollY;
    setIsScrolledToTop(scrollPosition > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <header>
        <Header isScrolled={isScrolledToTop} />
      </header>
      <ToggleMenu />

      <main className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading Homepage...</div>}>
                <Homepage />
              </Suspense>
            }
          />
          <Route
            path="/random-curiosity"
            element={
              <Suspense fallback={<div>Loading Random Curiosity...</div>}>
                <RandomCuriosity />
              </Suspense>
            }
          />
          <Route
            path="/big-questions"
            element={
              <Suspense fallback={<div>Loading Big Questions...</div>}>
                <BigQuestions />
              </Suspense>
            }
          />
          <Route
            path="/eu-countries"
            element={
              <Suspense fallback={<div>Loading Eu-Countries...</div>}>
                <EuCountries />
              </Suspense>
            }
          />
          <Route
            path="/data-charts"
            element={
              <Suspense fallback={<div>Loading Data Charts...</div>}>
                <DataCharts />
              </Suspense>
            }
          />
          <Route
            path="/answer-questions"
            element={
              <Suspense fallback={<div>Loading Answer Questions...</div>}>
                <AnswerQuestions />
              </Suspense>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
