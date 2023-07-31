import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ScrollToTop from "../components/ScrollToTop";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../Dashboard/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main></Main>
        <ScrollToTop></ScrollToTop>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <>
        <ScrollToTop></ScrollToTop>
        <Dashboard></Dashboard>
      </>
    ),
    children: [
      {
        path: "my-cart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);
