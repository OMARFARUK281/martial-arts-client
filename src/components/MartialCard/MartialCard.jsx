import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
// import onlineCart from "../../hooks/onlineCart";

const MartialCard = ({item}) => {
    const { name, image, course, price, _id } = item;
    const {user} = useContext(AuthContext);
    // const [, refetch ] = onlineCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToClass = item =>{
      console.log(item);
      if(user && user.email){
        const martialClass = {martialArtsClassId: _id, name, image, price, email: user.email}
        fetch('http://localhost:5000/carts', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(martialClass)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Martial arts on the class',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please login to order the class',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
      }
    }

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
          <button onClick={() =>handleAddToClass(item)} className="btn border-0 border-b-4 border-red-500">Add to Cart</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MartialCard;
