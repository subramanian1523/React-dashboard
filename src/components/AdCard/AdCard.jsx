import React from 'react';

export const RightCard = ({ image, trendingText, vsYesterdayText, productText, price }) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-md flex flex-col">
      <div className="relative w-full h-[100%]">
        <img src={image} alt="Trending" className="w-full h-full object-cover" />

        <div className="absolute top-2 left-6 p-2 bg-white bg-opacity-60 rounded-lg">
          <div className="text-lg font-[600]">{trendingText}</div>
          <div className="flex items-center text-sm font-[400]">
            <span className="text-green-500 mr-2">↑</span>
            <span>{vsYesterdayText}</span>
          </div>
        </div>
        <div className="absolute bottom-2 left-6 p-2 bg-white rounded-lg">
          <div className="text-[16px] font-[500]">{productText}</div>
          <div className="text-2xl font-[500] text-black">{price}</div>
        </div>
      </div>
    </div>
  );
};
