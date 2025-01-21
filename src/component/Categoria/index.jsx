import React from "react";
import VideoCard from "../VideoCards";
import { CategoriaContainer, VideosContainer } from "./styled";

const COLORS = {
  frontend: "#6bd1ff",
  backend: "#00C86F",
  mobile: "#FFBA05",
};

const Categoria = ({ categoria, videos, refetch }) => {
  return (
    <CategoriaContainer $color={COLORS[categoria.toLowerCase()]}>
      <h2>{categoria}</h2>
      <VideosContainer>
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            refetch={refetch}
            color={COLORS[categoria.toLowerCase()]}
          />
        ))}
      </VideosContainer>
    </CategoriaContainer>
  );
};

export default Categoria;
