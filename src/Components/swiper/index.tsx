import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ModalContentTypes } from "../../constants/projects";

import "swiper/css/navigation";
import "swiper/css";
import "../swiper/swiper.scss";

const SwiperComponent = ({ data }: ModalContentTypes) => {
  return (
    <Swiper
      className="swiperContainer"
      modules={[Navigation]}
      navigation={{
        prev: ".prev",
        next: ".next",
      }}
      spaceBetween={1}
      slidesPerView={1}
    >
      {data?.map((value: any, index: number) => {
        return (
          <div key={index}>
            <SwiperSlide className="slider">
              <img className="swiperImage" src={value?.img} alt="img" />
            </SwiperSlide>
          </div>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;
