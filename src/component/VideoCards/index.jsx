import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { VideoActions, VideoCard, VideoThumbnail } from './styled';
import { deleteVideo } from '../../service/api';

const VideoCards = ({ video, onEdit }) => {

  const handleDelete = async () => {
    await deleteVideo(video.id)
    alert("Video Deletado")
  }

  return (
    <VideoCard>
      <VideoThumbnail href={video.video} target='_blank'>
        <img src={video.image} alt={video.title} />
      </VideoThumbnail>
      <VideoActions>
        <button onClick={() => onEdit(video)}>
          <AiFillEdit size={28}/> Editar
        </button>
        <button onClick={handleDelete}>
          <AiFillDelete size={28}/> Excluir
        </button>
      </VideoActions>
    </VideoCard>
  );
};

export default VideoCards;