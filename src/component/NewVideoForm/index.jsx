import { saveVideo } from "../../service/api";
import Input from "../Input";
import { Button, NewVideoContainer } from "./styled";

function NewVideoForm() {
    const handleOnCreate = async (event) => {
        event.preventDefault()
        const body = Object.fromEntries(new FormData(event.target))

        await saveVideo(body)

        alert("Video Criado")
    }

    return <NewVideoContainer>
        <h1>Novo Vídeo</h1>
        <h2>Complete o formulário para criar um novo card de vídeo.</h2>

        <form onSubmit={handleOnCreate}>
            <h3>Criar Card</h3>

            <div>
                <Input title="Título" id="title" />
                <Input title="Categoria" id="category" />
                <Input title="Imagem" id="image" />
                <Input title="Vídeo" id="video" />
                <Input title="Descrição" id="description" type="area" />
            </div>

            <div>
                <Button isSpecial type="submit">Guardar</Button>
                <Button>Limpar</Button>
            </div>
        </form>
    </NewVideoContainer>
}

export default NewVideoForm