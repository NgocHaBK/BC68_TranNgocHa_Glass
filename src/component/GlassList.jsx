import React from "react";

const GlassesList = ({ glassesData, onSelect }) => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      {glassesData.map((glass) => (
        <img
          key={glass.id}
          src={glass.url}
          alt={glass.name}
          className="w-16 cursor-pointer hover:opacity-75"
          onClick={() => onSelect(glass)}
        />
      ))}
    </div>
  );
};

export default GlassesList;
