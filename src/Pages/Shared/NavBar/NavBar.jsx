import React, { useContext } from "react";
import image from '../../../assets/martial-arts-logo.jpg'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import {FaDownload } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";


const NavBar = () => {
  const {user,  logOut} = useContext(AuthContext);
  const [ cart ] = useCart();

  const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch(error => console.error(error));
  }

  const navOptions = 
    <>
      <li><Link className="text-xl" to="/">Home</Link></li>
      <li><Link className="text-xl" to="/allclass">All Class</Link></li>
      <li><Link className="text-xl" to="/order">Order Now</Link></li>
      <li><Link className="text-xl" to="/secret">Secret</Link></li>

      <li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
          <FaDownload></FaDownload>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      
      {
        user ? <>
        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
        </> : <>
        <li><Link className="text-xl" to="/login">Login</Link></li> 
        </>
      }
      
  </>

    
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-orange-200 text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>          
          <img className="h-16 ml-8 rounded-full" src={image} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex pl-6">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>

      
    </>
  );
};

export default NavBar;
