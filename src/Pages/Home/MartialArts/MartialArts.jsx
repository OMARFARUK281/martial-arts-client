import React from "react";
import image from "../../../assets/home/kick-leg-and-block.jpg";

const MartialArts = () => {
  return (
    <div>
      <div className="hero mb-8" style={{ backgroundImage: `url("${image}")` }}>
        <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl my-8 py-4 bg-gray-50 rounded">
            <h1 className="mb-5 text-4xl uppercase pt-5 text-black">Martial Arts</h1>
            <p className="mb-5 text-black px-6">
            Martial arts are basically a fusion of various practices and traditions, which are used in training for combat. Here we discuss the types of martial arts.
            </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MartialArts;
