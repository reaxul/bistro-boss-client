import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const AllUsers = () => {

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

    const handleDelete = () => { };
    
    const handleUser = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
          if (data.modifiedCount) {
            refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full px-28">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h3 className="font-bold text-3xl">Total Users: {users.length}</h3>
      {users.length?<div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleUser(user)}
                      className="btn btn-ghost bg-orange-700 btn-xs"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost bg-red-700 btn-xs"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>:<Loading></Loading>}
    </div>
  );
};

export default AllUsers;
