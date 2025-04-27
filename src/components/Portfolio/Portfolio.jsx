import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://github.com/Nikita2428/CLG_PROJECT" target="_blank" rel="noopener noreferrer">
          <img src={Sidebar} alt="Placement project" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://mom-care-omega.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={Ecommerce} alt="MomCare Project" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://ai-chatbot-ed1b.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={MusicApp} alt="Ai-Chatbot Project" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://weather-react-rho-murex.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={HOC} alt="Weather Project" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
