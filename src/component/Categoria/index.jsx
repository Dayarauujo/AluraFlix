// Componente Categoria.js
import React from 'react';
import VideoCard from '../VideoCards';
import { CategoriaContainer, VideosContainer } from './styled';

const Categoria = ({ categoria, videos }) => {
  return (
    <CategoriaContainer>
      <h2>{categoria}</h2>
      <VideosContainer>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </VideosContainer>
    </CategoriaContainer>
  );
};

export default Categoria;
