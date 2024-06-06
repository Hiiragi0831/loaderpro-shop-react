import { useLayoutEffect, useState } from "preact/hooks";
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
          <h1>Знай наших в лицо</h1>
        </div>
        <Swiper slidesPerView={5} className="team__slider">
          {isLoading
            ? "Загрузка"
            : data.map((post) => {
                return (
                  <SwiperSlide key={post.id}>
                    <div className="team__slide">
                      <picture>
                        <source srcSet={post.image} />
                        <img src={post.image} alt={post.title} decoding="async" />
                      </picture>
                      <p>{post.position}</p>
                      <p>
                        <b>{post.title}</b>
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
    </section>
  );
};
