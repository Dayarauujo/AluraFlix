import styled from "styled-components";

export const VideoCard = styled.div`
    background-color: black;
    width: 432px;
    border: 4px solid white;
    border-radius: 8px 8px 20px 20px;

`

export const VideoThumbnail = styled.a`
    img {
        width: 432px;
        height: 260px;
        object-fit: cover;
        border-bottom: 4px solid white;
    }
`

export const VideoActions = styled.div`
    display: flex;

    button {
        flex: 1;
        color: white;
        background: transparent;
        border: 0;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 900;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 0;
        cursor: pointer;

    }
    button:hover {
        color:rgb(175, 175, 175);
    }
`