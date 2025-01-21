import { toast } from "react-toastify";

import { saveVideo } from "../../service/api";
import Input from "../Input";
import { Button, NewVideoContainer } from "./styled";
import { useRef } from "react";

function NewVideoForm() {
  const formRef = useRef(null);

  const handleOnCreate = async (event) => {
    try {
      event.preventDefault();
      const body = Object.fromEntries(new FormData(event.target));

      await saveVideo(body);

      toast.success("Vídeo criado com sucesso!");
      event.target.reset();
    } catch (error) {
      toast.error("Erro ao criar vídeo");
    }
  };

  const cleanForm = () => {
    formRef.current.reset();
  };

  return (
    <NewVideoContainer>
      <h1>Novo Vídeo</h1>
      <h2>Complete o formulário para criar um novo card de vídeo.</h2>

      <form onSubmit={handleOnCreate} ref={formRef}>
        <h3>Criar Card</h3>

        <div>
          <Input title="Título" id="title" />
          <Input
            title="Categoria"
            id="category"
            type="select"
            selectValues={["Backend", "Frontend", "Mobile"]}
          />
          <Input title="Imagem" id="image" />
          <Input title="Vídeo" id="video" />
          <Input title="Descrição" id="description" type="area" />
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
    </NewVideoContainer>
  );
}

export default NewVideoForm;
