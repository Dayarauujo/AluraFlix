import React from "react";
import VideoCard from "../VideoCards";
import { CategoriaContainer, VideosContainer } from "./styled";

const Categoria = ({ categoria, videos, refetch, color }) => {
  return (
    <CategoriaContainer $color={color}>
      <h2>{categoria}</h2>
      <VideosContainer>
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            refetch={refetch}
            color={color}
          />
        ))}
      </VideosContainer>
    </CategoriaContainer>
  );
};

export default Categoria;
