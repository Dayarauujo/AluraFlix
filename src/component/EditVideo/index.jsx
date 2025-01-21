import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import { editVideo } from "../../service/api";
import Input from "../Input";
import { Button, CloseContainer, EditVideoContainer } from "./styled";
import { FiX } from "react-icons/fi";

function EditVideo({ closeModal, video }) {
  const [editedVideo, setEditedVideo] = useState(video);

  const handleOnCreate = useCallback(
    async (event) => {
      try {
        event.preventDefault();
        const body = Object.fromEntries(new FormData(event.target));

        await editVideo(video.id, body);

        toast.success("Vídeo editado com sucesso!");
        event.target.reset();
        closeModal();
      } catch (error) {
        toast.error("Erro ao editar vídeo");
      }
    },
    [closeModal, video.id]
  );

  const cleanForm = () => {
    setEditedVideo({
      id: "",
      title: "",
      category: "",
      image: "",
      video: "",
      description: "",
    });
  };

  const Form = useCallback(() => {
    return (
      <form onSubmit={handleOnCreate}>
        <div>
          <Input title="Título" id="title" defaultValue={editedVideo.title} />
          <Input
            title="Categoria"
            id="category"
            defaultValue={editedVideo.category}
            type="select"
            selectValues={["Backend", "Frontend", "Mobile"]}
          />
          <Input title="Imagem" id="image" defaultValue={editedVideo.image} />
          <Input title="Vídeo" id="video" defaultValue={editedVideo.video} />
          <Input
            title="Descrição"
            id="description"
            type="area"
            defaultValue={editedVideo.description}
          />
        </div>

        <div>
          <Button $isSpecial type="submit">
            Guardar
          </Button>
          <Button onClick={cleanForm} type="button">
            Limpar
          </Button>
        </div>
      </form>
    );
  }, [editedVideo, handleOnCreate]);

  return (
    <EditVideoContainer>
      <CloseContainer onClick={closeModal}>
        <FiX size={30} />
      </CloseContainer>
      <h1>EDITAR CARD:</h1>

      <Form />
    </EditVideoContainer>
  );
}

export default EditVideo;
