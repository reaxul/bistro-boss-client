import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";

const Main = () => {
    const location = useLocation();
    const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup";
    return (
        <div>
            {hideHeaderFooter||<NavBar></NavBar>}
            <Outlet></Outlet> 
            {hideHeaderFooter||<Footer></Footer>}
        </div>
    );
};

export default Main;