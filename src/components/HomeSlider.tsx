// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = ["1", "2", "3", "4", "5", "6"];

const HomeSlider = () => {
  return (
    <section className="home__slider">
      <div className="slider slider--main">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          // @ts-expect-error @ts-expect-error
          autoplay={{ delay: 4000 }}
        >
          {slides.map((slide, key) => {
            return (
              <SwiperSlide key={key} className="SwiperSlide">
                <div className="slider__content">
                  <picture className="for-desktop">
                    <source srcSet={`/assets/images/slider/${slide}.jpeg`} />
                    <img
                      src={`/assets/images/slider/${slide}.jpeg`}
                      alt=""
                      decoding="async"
                    />
                  </picture>
                  <picture className="for-devices">
                    <source srcSet={`/assets/images/slider/${slide}m.jpeg`} />
                    <img
                      src={`/assets/images/slider/${slide}m.jpeg`}
                      alt=""
                      decoding="async"
                    />
                  </picture>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
