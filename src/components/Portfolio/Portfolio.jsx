import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import { themeContext } from "../../Context";
import Raunak from "../../img/Raunak.jpg";
import RaunakSir2 from "../../img/RaunakSir2.jpg";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  let wwidth = window.innerWidth;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      {
        (wwidth >= 800 ) ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            // grabCursor={true}
            pagination={{clickable:true}}
            className="portfolio-slider"
          >
            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=uv2JcE-uL8Y" target='_blank'>
                <img src="https://i.ytimg.com/vi/uv2JcE-uL8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCV_IbEh8pdY6cEi-gCvNV7Ho-suw" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=beCxzioIuyQ&t=58s" target="_blank">
                <img src="https://i.ytimg.com/vi/beCxzioIuyQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMCnXPrDfxOGMIfPCCaUslOS95AQ" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=UNA9CeWN8OM&t=2s" target={"_blank"}>
                <img src="https://i.ytimg.com/vi/UNA9CeWN8OM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqBoqaA8s-vnQrZyDRBn8FolqkFA" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=xWC8xNMaiek&t=12s" target={"_blank"}>
                <img src={Raunak} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://youtube.com/shorts/HZy9QjfnKx4?feature=share" target={"_blank"}>
                <img src={RaunakSir2} alt="" />
              </a>
            </SwiperSlide>
          </Swiper>

        ) : (
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            // grabCursor={true}
            pagination={{clickable:true}}
            className="portfolio-slider"
          >
            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=uv2JcE-uL8Y" target='_blank'>
                <img src="https://i.ytimg.com/vi/uv2JcE-uL8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCV_IbEh8pdY6cEi-gCvNV7Ho-suw" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=beCxzioIuyQ&t=58s" target="_blank">
                <img src="https://i.ytimg.com/vi/beCxzioIuyQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMCnXPrDfxOGMIfPCCaUslOS95AQ" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=UNA9CeWN8OM&t=2s" target={"_blank"}>
                <img src="https://i.ytimg.com/vi/UNA9CeWN8OM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqBoqaA8s-vnQrZyDRBn8FolqkFA" alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.youtube.com/watch?v=xWC8xNMaiek&t=12s" target={"_blank"}>
                <img src={Raunak} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://youtube.com/shorts/HZy9QjfnKx4?feature=share" target={"_blank"}>
                <img src={RaunakSir2} alt="" />
              </a>
            </SwiperSlide>
          </Swiper>
        )
      }
    </div>
  );
};

export default Portfolio;
