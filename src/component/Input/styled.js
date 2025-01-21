import styled from "styled-components";

export const InputContainer = styled.div`
    color: white;
    display: flex;

    flex-direction: column;

    label {
        font-weight: 700;
    }

    input, textarea {
        background-color: transparent;
        border: 2px solid rgb(63, 63, 63);
        border-radius: 10px;
        padding: 12px 8px;
        margin-top: 8px;
        color: white;
    }

    :invalid {
        border: 2px solid red;
    }
`