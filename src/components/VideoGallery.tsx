import FsLightbox from "fslightbox-react";
import delay from "lodash-es/delay";
import { useMemo, useState } from "preact/hooks";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useVideos } from "../utils/hooks/useVideos";

export const VideoGallery = () => {
  const [toggler, setToggler] = useState(false);
  const [productIndex, setProductIndex] = useState(0);

  const { videos, isLoading } = useVideos();
  const sources = useMemo(() => videos.map((video) => video.link), [videos]);

  return (
    <section className="videoGallery">
      <div className="container">
        <div className="title">
          <span className="h1">Мы на YOUTUBE</span>
        </div>
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {isLoading
            ? "Загрузка"
            : videos.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <button
                      className="videoGallery__slide"
                      onClick={() => {
                        setProductIndex(index);
                        delay(() => setToggler(!toggler), 100);
                      }}
                    >
                      <picture>
                        <source srcSet={item.image} />
                        <img src={item.image} alt={item.title} decoding="async" />
                      </picture>
                      <p className="h4">{item.title}</p>
                    </button>
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
      <FsLightbox toggler={toggler} sources={[sources[productIndex]]} key={productIndex} />
    </section>
  );
};
