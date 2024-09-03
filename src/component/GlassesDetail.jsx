import React from "react";

const GlassesDetail = ({ selectedGlass }) => {
  return (
    <div className="flex flex-col items-center mt-8">
      <img src={selectedGlass.url} alt={selectedGlass.name} className="w-1/2" />
      <h2 className="text-xl font-bold mt-4">{selectedGlass.name}</h2>
      <p className="text-gray-600 mt-2">{selectedGlass.desc}</p>
    </div>
  );
};

export default GlassesDetail;
