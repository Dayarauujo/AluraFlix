import styled from "styled-components";

export const NewVideoContainer = styled.div`
    color: white;
    display: flex;

    flex-direction: column;
    margin-inline: 120px;
    padding: 70px 0;

    h1, h2 {
        text-align: center;
    }

    h1 {
        font-size: 60px;
        margin-bottom: 12px;
    }
    
    h2 {
        font-size: 20px;
        margin-bottom: 48px;
    }

    h3 {
        font-size: 36px;
        font-weight: 700;
        border-top: 4px solid #262626;
        border-bottom: 4px solid #262626;
        padding: 12px 0;
        margin: 0;
    }

    form > div {
        margin-top: 60px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 20px;
        row-gap: 60px;
    }
`

export const Button = styled.button`
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-size: 20px;
    background: transparent;
    border: ${({isSpecial}) => isSpecial ? '2px solid #2271D1' : '2px solid #F5F5F5'};
    color: ${({isSpecial}) => isSpecial ? '#2271D1' : '#ffffff'};
    cursor: pointer;
`