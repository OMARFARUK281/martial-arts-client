import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {FaDownload, FaWallet, FaCalendarAlt, FaHome, } from 'react-icons/fa';
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#55d394]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content">
          {/* Sidebar content here */}
          <li><NavLink className="text-xl" to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
          <li><NavLink className="text-xl" to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
          <li><NavLink className="text-xl" to="/dashboard/payment history"><FaWallet></FaWallet> Payment History</NavLink></li>
          <li>
            <NavLink className="text-xl" to="/dashboard/mycart"><FaDownload></FaDownload>My Cart
            <span className="badge badge-secondary">+{cart?.length || 0}</span>
            </NavLink>             
          </li>
          <div className="divider"></div>

          <li><NavLink className="text-xl" to="/"><FaHome></FaHome></NavLink></li>
          <li><NavLink className="text-xl" to="/allclass">All Class</NavLink></li>
      <li><NavLink className="text-xl" to="/order">Order Now</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
