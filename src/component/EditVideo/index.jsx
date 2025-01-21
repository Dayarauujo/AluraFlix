import { toast } from "react-toastify";

import { editVideo } from "../../service/api";
import Input from "../Input";
import { Button, CloseContainer, EditVideoContainer } from "./styled";
import { FiX } from "react-icons/fi";

function EditVideo({ closeModal, video }) {
  const handleOnCreate = async (event) => {
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
  };

  const cleanForm = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <EditVideoContainer>
      <CloseContainer onClick={closeModal}>
        <FiX size={30} />
      </CloseContainer>
      <h1>EDITAR CARD:</h1>

      <form onSubmit={handleOnCreate}>
        <div>
          <Input title="Título" id="title" defaultValue={video.title} />
          <Input
            title="Categoria"
            id="category"
            defaultValue={video.category}
            type="select"
            selectValues={["Backend", "Frontend", "Mobile"]}
          />
          <Input title="Imagem" id="image" defaultValue={video.image} />
          <Input title="Vídeo" id="video" defaultValue={video.video} />
          <Input
            title="Descrição"
            id="description"
            type="area"
            defaultValue={video.description}
          />
        </div>

        <div>
          <Button $isSpecial type="submit">
            Guardar
          </Button>
          <Button onClick={cleanForm}>Limpar</Button>
        </div>
      </form>
    </EditVideoContainer>
  );
}

export default EditVideo;
