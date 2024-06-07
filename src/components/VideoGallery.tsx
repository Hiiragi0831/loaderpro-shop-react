import FsLightbox from "fslightbox-react";
import { useMemo, useState } from "preact/hooks";

import { useVideos } from "../utils/hooks/useVideos";

export const VideoGallery = () => {
  const [toggler, setToggler] = useState(false);
  const [productIndex, setProductIndex] = useState(0);

  const { videos, isLoading } = useVideos();
  const sources = useMemo(() => videos.map((video) => video.link), [videos]);

  return (
    <ul>
      <button onClick={() => setToggler(!toggler)}>Open the lightbox.</button>
      <button onClick={() => setProductIndex(1)}>Load the second product.</button>
      <FsLightbox toggler={toggler} sources={[sources[productIndex]]} key={productIndex} />

      {isLoading
        ? "Загрузка"
        : videos.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link}>
                  <p>
                    <img src={item.image} alt="" />
                  </p>
                  <h3>{item.title}</h3>
                </a>
              </li>
            );
          })}
    </ul>
  );
};
