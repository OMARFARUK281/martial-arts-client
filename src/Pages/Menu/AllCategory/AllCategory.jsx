import React from "react";
import Class from "../../Home/Class/Class";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const AllCategory = ({ items, title, img }) => {
  return (
    <div className="pt-4">
       { title && <Cover img={img} title={title}></Cover> }

      <div className="grid md:grid-cols-2 gap-6 pb-6">
        {
           items.map(item => <Class
            key={item.id} 
            item={item}>                
            </Class>)
            
        }
      </div>
      <div className="text-center p-8">
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 text-xl border-red-500 text-lime-500">add now</button>
        </Link>
      </div>
    </div>
  );
};

export default AllCategory;
