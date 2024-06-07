import { useLayoutEffect, useMemo, useState } from "preact/hooks";

import { api } from "../../services/api";

export const useVideos = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const videos = useMemo(
    () =>
      data?.map((item) => {
        return {
          link: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
          image: item.snippet.thumbnails.standard.url,
          title: item.snippet.title,
        };
      }) || [],
    [data],
  );

  const loadVideos = async () => {
    try {
      const data = await api.getYoutubeVideos();
      setData(data.items);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };
  useLayoutEffect(() => void loadVideos(), []);
  return { isLoading, videos };
};
