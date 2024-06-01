// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ProjectsSlider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        id="ProjectsSlider"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"1.5"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          initialSlide: 1,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a
            className="NewWifu"
            href="https://samicheurfi.github.io/Gericht/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./IMG/Frame 1.png" alt="g" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className="NewWifu"
            href="https://samicheurfi.github.io/Restaurant/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./IMG/Frame 2.png" alt="g" className="image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className="NewWifu"
            href="https://samicheurfi.github.io/Bank-Deploy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./IMG/Frame 3.png" alt="g" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className="NewWifu"
            href="https://samicheurfi.github.io/Foodie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./IMG/Frame 4.png" alt="g" />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
