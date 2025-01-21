import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { VideoActions, VideoCard, VideoThumbnail, VideoTitle } from "./styled";
import { deleteVideo } from "../../service/api";
import Modal from "../Modal";
import EditVideo from "../EditVideo";

const VideoCards = ({ video, refetch, color }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteVideo(video.id);
      await refetch();
      toast.success("Vídeo Deletado");
    } catch (error) {
      toast.error("Erro ao deletar vídeo");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    refetch();
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <VideoCard $color={color}>
      <Modal show={showModal}>
        <EditVideo video={video} closeModal={closeModal} />
      </Modal>
      <VideoTitle $color={color}>{video.title}</VideoTitle>
      <VideoThumbnail href={video.video} target="_blank">
        <img src={video.image} alt={video.title} />
      </VideoThumbnail>
      <VideoActions>
        <button onClick={openModal}>
          <AiFillEdit size={28} /> Editar
        </button>
        <button onClick={handleDelete}>
          <AiFillDelete size={28} /> Excluir
        </button>
      </VideoActions>
    </VideoCard>
  );
};

export default VideoCards;
