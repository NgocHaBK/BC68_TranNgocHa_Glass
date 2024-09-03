import { useState } from "react";

import "./App.css";

function App() {
  const [selectedGlass, setSelectedGlass] = useState(0);
  const glassData = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./public/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./public/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./public/glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./public/glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./public/glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./public/glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./public/glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./public/glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./public/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  return (
    <div className="wrapper min-h-screen">
      <div className="title py-7 text-center text-white bg-black/70 text-2xl">
        THE GLASSES APP ONLINE
      </div>
      <div className="container mt-5">
        <div className="flex items-center justify-around">
          <div className="size-56 model">
            <img
              src="./public/glassesImage/model.jpg"
              alt=""
              className="object-cover"
            />
            <div className="glass_model w-44">
              <img src={glassData[selectedGlass].url} alt="" className="w-28" />
            </div>
            <div className="description w-full bg-orange-500/60">
              <div>
                <p className="text-blue-600 font-semibold">
                  {glassData[selectedGlass].name}
                </p>
                <span className="text-white inline-block ps-3">
                  {glassData[selectedGlass].desc}
                </span>
              </div>
            </div>
          </div>
          <div className="size-56 ">
            <img
              src="./public/glassesImage/model.jpg"
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-3/5 bg-white min-h-28 mx-auto">
        <div className="flex flex-wrap mt-20 space-x-2 space-y-2 py-2 px-2">
          {glassData.map((glass, index) => {
            return (
              <img
                src={glass.url}
                key={glass.id}
                alt=""
                className="w-28 cursor-pointer"
                onClick={() => setSelectedGlass(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
