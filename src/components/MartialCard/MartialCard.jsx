import React from "react";

const MartialCard = ({item}) => {
    const { name, image, course, price } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="font-bold">{course}</p>
        <p className="font-bold text-orange-500">{price}</p>
        <div className="card-actions justify-end">
          <button className="btn border-0 border-b-4 border-red-500">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MartialCard;
