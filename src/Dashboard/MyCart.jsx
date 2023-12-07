import { Helmet } from "react-helmet-async";
import useCart from "../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Loading from "../components/Loading";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const price = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bistro-boss-server-three-gamma.vercel.app/carts/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      {cart.length ? (
        <div className="mt-8 px-4 lg:px-8">
          <Helmet>
            <title>Bistro Boss | My Cart</title>
          </Helmet>
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl">Total Items: {cart.length}</h3>
            <h3 className="text-2xl">Total Price: ${price.toFixed(2)}</h3>
            <button className="btn btn-primary btn-sm">Pay All</button>
          </div>
          <div className="overflow-x-auto max-h-[600px]">
            <table className="table w-full max-w-4xl mx-auto">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Food</th>
                  <th>Price</th>
                  <th>Delete</th>
                  <th>Pay</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id} className="hover">
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Food Item"
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          <div className="text-sm opacity-50">
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>$ {item.price.toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-red btn-xs"
                      >
                        <FaTrashAlt></FaTrashAlt>Delete
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-blue btn-xs">Pay</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};

export default MyCart;
