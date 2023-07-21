import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../Hooks/useCart";

const FoodCard = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [,refetch] = useCart();
  const { user } = useContext(AuthContext);
  const { name, image, recipe, price, _id } = item;
  const handleAddToCart = () => {
    if (user) {
      const cartItem = { itemId: _id, name, image, price, email: user.email };
      fetch("https://bistro-boss-server-three-gamma.vercel.app/carts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item Added to Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You need to login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="object-cover h-72 w-96" src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 bg-slate-950 px-3 p-1 text-yellow-400 font-bold me-5 mt-5">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline mt-4 border-b-4 border-t-0 border-x-0 text-orange-300 hover:bg-orange-400"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
