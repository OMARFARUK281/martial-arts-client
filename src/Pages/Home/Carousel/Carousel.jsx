import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";

import "swiper/css/pagination";

import img1 from "../../../assets/martial/01.jpg";
import img2 from "../../../assets/martial/02.jpg";
import img3 from "../../../assets/martial/03.jpg";
import img4 from "../../../assets/martial/04.jpg";
import img5 from "../../../assets/martial/05.jpg";
import img6 from "../../../assets/martial/06.jpg";

const Carousel = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mb-8"
      >
        <SwiperSlide>
          <img className="h-72" src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-72" src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-72" src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-72" src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-72" src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-72" src={img6} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
