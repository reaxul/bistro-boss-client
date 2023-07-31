import { FaShoppingCart, FaHome } from "react-icons/fa";
import { BsFillCalendarPlusFill, BsFillWalletFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillShopping } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import {  Outlet, NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-3">Open drawer</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <li>
            <NavLink to={"/dashboard/my-classes"} className="active-link">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/reservation"} className="active-link">
              <BsFillCalendarPlusFill /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/payment-history'} className="active-link">
              <BsFillWalletFill /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to='my-cart' className="active-link">
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <div className="divider">OR</div>
          <li>
            <NavLink to={'/'} className="active-link">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/menu'} className="active-link">
              <GiHamburgerMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={'/classes'} className="active-link">
              <AiFillShopping /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={'/instructors'} className="active-link">
              <TiContacts /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
