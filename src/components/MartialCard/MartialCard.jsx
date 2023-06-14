import React from "react";

const MartialCard = ({item}) => {
    const { name, image, course, price } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-[400px] h-[350px]" src={image} alt="Shoes" />
      </figure>
      <div>
      <div className="card-body flex flex-col">
        <div className="flex items-center">
        <div>
        <h2 className="card-title text-xl p-2 uppercase">{name}</h2>
        <p className="font-bold p-2">{course}</p>
        </div>
        <div className="items-center">
        <p className="font-bold text-orange-500 px-16">{price}</p>
        </div>
        </div>
        <div className="card-actions justify-center">
          <button className="btn border-0 border-b-4 border-red-500">Add to Cart</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MartialCard;
