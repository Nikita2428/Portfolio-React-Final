import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I hold a Bachelor's degree in Information Technology from SIES College of Arts, Science, and Commerce graduating with a CGPA of 7.50 . My coursework covered key subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, equipping Bachelor of Science - Information Technology",

    },
    {
      img: profilePic2,
      review:
        "I completed my Higher Secondary Certificate (HSC) from Tilak College of Science, Commerce, and Arts. I secured 69.17% in my final examination. I gained knowledge in core subjects essential to my field..",
    },
    {
      img: profilePic3,
      review:
        "I completed my Secondary School Certificate (SSC) from R.F.Naik Vidyalaya Bonkode, Koparkhairane. I secured 63.70% in my final examination. This education provided me with a strong academic foundation.",
    },
    
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">     
        <span>My educational journey has been one of </span>
        <span>growth and discovery, </span>
        <span> Shaping my knowledge and skills as follows...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
