import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { FaQuoteLeft } from 'react-icons/fa';

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-three-gamma.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center flex flex-col items-center">
                    <Rating className="my-8" style={{ maxWidth: 180 }} value={review.rating} readOnly />
                    <FaQuoteLeft className="text-black" size={80}></FaQuoteLeft>
              <p className="px-5 my-5">{review.details}</p>
              <h4 className="text-[#CD9003] text-2xl">{review.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
