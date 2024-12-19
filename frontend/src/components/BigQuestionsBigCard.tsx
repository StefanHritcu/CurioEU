import React from "react";
import RandomImage from "./../assets/random20imgId/img1.png";

const BigQuestionsBigCard: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center min-w-[320px] max-w-[900px] mx-auto my-12 px-4 ">
      {/* IMAGE */}
      <div className="flex-shrink-0 w-full tablet:w-1/2 flex justify-center mb-8 tablet:mb-0">
        <img
          className="w-[120px] h-auto tablet:w-[200px] tablet-xl:w-[300px] tablet-xl:h-[300px] object-contain"
          src={RandomImage}
          alt="image"
        />
      </div>
      {/* CONTENT */}
      <div className="w-full tablet:w-1/2 p-6 tablet:p-12 flex flex-col items-start bg-white shadow-lg rounded-lg">
        {/* Title */}
        <h2 className="text-lg tablet:text-xl tablet-xl:text-2xl font-bold text-gray-800 mb-4">
          TITLE
        </h2>
        {/* Description */}
        <p className="text-sm tablet:text-base text-gray-600 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
          necessitatibus error deleniti ea repudiandae magnam eveniet pariatur
          quasi est temporibus aliquam, vero debitis voluptas quis ipsam eaque
          quibusdam? Deserunt, sit!
        </p>
        {/* Author */}
        <div className="mt-auto pt-4 border-t border-gray-300 w-full text-right">
          <p className="text-xs tablet:text-sm text-gray-500">AUTHOR</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BigQuestionsBigCard);
