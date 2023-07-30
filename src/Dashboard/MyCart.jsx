import { Helmet } from "react-helmet-async";
import useCart from "../Hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const price = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div className="mt-4">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <h3 className="text-2xl">Total Items:{cart.length} </h3>
      <h3 className="text-2xl">Total price: ${price} </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Pay</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>+1</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={""} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">hi</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>hello</td>
              <td>$ 400</td>
              <td>
                <button className="btn bg-[#9a212b] btn-xs"> Delete</button>
              </td>
              <td>
                <button className="btn bg-[#1d424f] btn-xs">Pay</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
