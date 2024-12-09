import { useEffect, useState } from "react";
import Header from "./Header";
import ToggleMenu from "./ToggleMenu";

const App: React.FC = () => {
  {
    /* becomes TRUE if the scroll reaches scroll 0 or 40 maximum */
  }
  const [isScrolledToTop, setIsScrolledToTop] = useState<boolean>(false);
  const handleScroll = (event: Event) => {
    const scrollPosition: number = window.scrollY;
    if (scrollPosition > 50) {
      setIsScrolledToTop(true);
      console.log("IsScrolledToTop < 50px:", isScrolledToTop);
    } else {
      setIsScrolledToTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header isScrolled={isScrolledToTop} />
      <ToggleMenu />
      <main className="bg-yellow-400">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          non velit facilis?
        </p>
      </main>
    </div>
  );
};

export default App;
