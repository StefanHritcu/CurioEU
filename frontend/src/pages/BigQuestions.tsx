import React from "react";
import SuperBGImage from "./../assets/superBGImage.png";
import BigQuestionsBigCard from "../components/BigQuestionsBigCard";

const BigQuestions: React.FC = () => {
  return (
    <>
      <div>
        <div className="mt-12">
          <img
            src={SuperBGImage}
            alt="main super bg image"
            className="mx-auto w-[1200px] h-auto"
          />
        </div>
        <div>
          <BigQuestionsBigCard />
        </div>
      </div>
    </>
  );
};
export default React.memo(BigQuestions);
