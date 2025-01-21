import React from "react";
import VideoCard from "../VideoCards";
import { CategoriaContainer, VideosContainer } from "./styled";
import { TECH_COLORS } from "../../utils/colors";

const Categoria = ({ categoria, videos, refetch }) => {
  return (
    <CategoriaContainer $color={TECH_COLORS[categoria.toLowerCase()]}>
      <h2>{categoria}</h2>
      <VideosContainer>
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            refetch={refetch}
            color={TECH_COLORS[categoria.toLowerCase()]}
          />
        ))}
      </VideosContainer>
    </CategoriaContainer>
  );
};

export default Categoria;
