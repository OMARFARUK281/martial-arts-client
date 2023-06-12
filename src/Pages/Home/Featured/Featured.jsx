import React from "react";
import './Featured.css';
import featuredImg from '../../../assets/martial/11.jpg'

const Featured = () => {
  return (
    <div className="featured-item my-10 bg-fixed">
      <div className="md:flex justify-center items-center pb-40 pt-40 px-20">
        <div>
            <img style={{ borderRadius: "100px 0px 100px" }} src={featuredImg} alt="" />
        </div>
        <div className="text-center pl-12">
          <p className="text-white text-xl pb-4">
            Shutterstock hereby grants you a non-exclusive, non-transferable right to use, modify (except as expressly
            prohibited herein) and reproduce Visual Content worldwide, in perpetuity, as expressly permitted by the
            applicable license and subject to the limitations set forth herein
          </p >
          <div>
          <button className="btn btn-outline border-red-500 text-yellow-400 text-lg border-0 border-b-4">Add now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
