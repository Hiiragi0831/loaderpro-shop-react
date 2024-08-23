import { useLayoutEffect, useState } from "preact/hooks";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { api } from "../services/api";

export const Team = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadTeam = async () => {
    try {
      const data = await api.getTeams();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void loadTeam(), []);

  return (
    <section className="team">
      <div className="container">
        <div className="title">
          <span className="h1">Наша команда - знай наших в лицо:</span>
          <p>
            Каждый человек в нашей команде имеет большую ценность и является важной частью единого механизма нашей
            компании.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 5,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {isLoading
            ? "Загрузка"
            : data.map((post) => {
                return (
                  <SwiperSlide key={post.id}>
                    <div className="team__slide">
                      <picture>
                        <source srcSet={`/assets/${post.image}`} />
                        <img src={`/assets/${post.image}`} alt={post.title} decoding="async" />
                      </picture>
                      <p>
                        <b>{post.title}</b>
                      </p>
                      <p>{post.position}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
    </section>
  );
};
