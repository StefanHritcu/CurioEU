import React from "react";
import Typography from "./Typography";

const ToggleMenu: React.FC = () => {
  return (
    <>
      <div className="absolute top-[129.5px] left-0 h-2/3 bg-red-200 w-2/3">
        <section>
          <Typography variant="h1">ToggleMenu</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            facere in nihil?
          </Typography>
        </section>
      </div>
    </>
  );
};

// REACT.MEMO(TOGGLEMENU) avoid unnecessary rendering of a component if the proprs are not changed
export default React.memo(ToggleMenu);
