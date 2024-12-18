import React from "react";
import RandomImage from "./../assets/random20imgId/img1.png";

const BigQuestionsBigCard: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center min-w-[320px] max-w-[900px] mx-auto my-12 px-4 ">
      {/* IMAGE */}
      <div className="flex-shrink-0 w-1/3 tablet-xl:w-1/2">
        <img
          className="w-[120px] h-auto tablet:w-[120px] tablet-xl:w-[300px] tablet-xl:h-[300px] object-contain"
          src={RandomImage}
          alt="image"
        />
      </div>
      {/* TITLE / DESCRIPTION / AUTHOR */}
      <div className="flex flex-col w-2/3 tablet-xl:w-1/2 bg-red-50 p-4 rounded-lg shadow-md">
        {/* Title */}
        <h2 className="text-lg tablet:text-xl tablet-xl:text-2xl font-bold text-gray-800 mb-2">
          TITLE
        </h2>
        {/* Description */}
        <p className="text-sm tablet:text-base text-gray-600 leading-relaxed mb-6">
          DESCRIPTION
        </p>
        {/* Author */}
        <p className="mt-auto text-xs tablet:text-sm text-gray-500">AUTHOR</p>
      </div>
    </div>
  );
};

export default React.memo(BigQuestionsBigCard);
