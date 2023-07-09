import { useEffect, useState } from "react";

const useMenu = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-server-three-gamma.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);
  
  return [menu, loading];
};

export default useMenu;