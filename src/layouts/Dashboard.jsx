import { FaShoppingCart, FaHome } from "react-icons/fa";
import {  BsFillCalendarPlusFill, BsFillWalletFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillShopping } from "react-icons/ai";
import { TiContacts} from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to={"/dashboard/my-classes"}>
              <FaHome></FaHome>User Home
              </Link>
            </li>
            <li>
              <Link to={"/dashboard"}>
                <BsFillCalendarPlusFill></BsFillCalendarPlusFill>Reservation
              </Link>
            </li>
            <li>
              <Link>
                <BsFillWalletFill></BsFillWalletFill> Payment History
              </Link>
            </li>
            <li>
              <Link to='my-cart'>
                <FaShoppingCart></FaShoppingCart>My Cart
              </Link>
            </li>
            <div className="divider">OR</div>
            <li>
              <Link to={'/'}><FaHome></FaHome> Home</Link>
            </li>
            <li>
              <Link to={'/menu'}><GiHamburgerMenu></GiHamburgerMenu>Menu</Link>
            </li>
            <li>
              <Link to={'/classes'}><AiFillShopping></AiFillShopping>Shop</Link>
            </li>
            <li>
              <Link to={'/instructors'}><TiContacts></TiContacts>Contact</Link>
            </li>
          </ul>
  
  </div>
</div>
  );
};

export default Dashboard;
