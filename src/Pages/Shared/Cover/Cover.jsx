import React from "react";

const Cover = ({img, title}) => {
  return (
    <div className="hero h-[500px]"
      style={{backgroundImage: `url("${img}")`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <h2 className="mb-5 text-xl text-red-600">Best Karate Fighters Famous Masters in The World</h2>
          <p className="mb-5 text-xl">          
          It is always inspiring to learn about path-breaking personalities who made a difference through their skills, dedication, and experience. The world of karate is no exception. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
