import React from "react";
import img from "../../../assets/home/category.jpg";

const Category = () => {
  return (
    <div className="pb-12">
      <div className="flex bg-red-50 p-6 items-center">
        <div>
          <h1 className="text-2xl font-bold text-center mb-4 pr-3">What Is the World’s Most Popular Martial Art?</h1>
          <p className="text-xl pr-12 text-center text-stone-400">
            What is the world’s most popular martial art? Well, that depends on who you ask…and what parameters you use
            to define it. There isn’t official data that counts how many practitioners of each sport exist. On top of
            that, the popularity of martial arts styles ebbs and flows with time. It is influenced by different factors,
            one of the most notable being Hollywood movies, as we’ll see. So, which one is the most popular? Let’s find
            out.
          </p>
        </div>
        <img className="w-3/5 h-80 rounded" src={img} alt="" />
      </div>
    </div>
  );
};

export default Category;
