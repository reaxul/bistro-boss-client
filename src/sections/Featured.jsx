import SectionTitle from "../components/SectionTitle";
import featuredImage from "../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div className="featured-img pt-4 text-white bg-fixed">
      <SectionTitle
        heading={"features"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="md:flex items-center gap-8 px-24 pb-24 pt-12">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div>
          {" "}
          <p>March 20, 2023</p> <p>WHERE CAN I GET SOME?</p>{" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            dolore aspernatur sint necessitatibus molestias enim delectus velit
            dicta, commodi dolorem reprehenderit eius nisi fugiat officia sunt
            nesciunt eum nostrum itaque repudiandae harum assumenda. Nisi quos
            ex magnam, saepe neque iste!
          </p>
          <button className="btn btn-outline mt-4 border-b-4 border-t-0 border-x-0 text-white">
            order online
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
