import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: cart=[] } = useQuery({
    queryKey: ['carts', user?.email],
      queryFn: async () => {
          const response = await fetch(`https://bistro-boss-server-three-gamma.vercel.app/carts?email=${user?.email}`)
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
      },
  })
  return [cart, refetch]
};

export default useCart;
