import React from "react";

const Class = ({ item }) => {
  const { name, image, course, price } = item;

  return (
    <div>
      <div>
        <div className="flex items-center pt-6">
          <img style={{ borderRadius: "20px 50px 20px" }} className="w-[200px] h-[200px]" src={image} alt="" />
          <div>
            <h3 className="uppercase text-4xl pl-10 text-orange-400">{name}</h3>
            <h3 className="text-4xl pl-10 p-4">{course}</h3>
          <p className="font-bold pl-10 text-orange-500">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
