import SectionTitle from "../components/SectionTitle";
import MenuItem from "../shared/MenuItem";
import useMenu from "../Hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular=menu.filter(item => item.category==='popular');

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 my-5">
        {popular.map((item, index) => (
          <MenuItem key={index} item={item}></MenuItem>
        ))}
      </div>
      <Link to={'/menu'}><button className="btn mx-auto block btn-outline mt-4 border-b-4 border-t-0 border-x-0 text-white">
            View full menu
          </button></Link>
    </section>
  );
};

export default PopularMenu;
