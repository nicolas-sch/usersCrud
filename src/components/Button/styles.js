import styled from "styled-components";

export const Button = styled.button `
    width: 342px;
    height: 74px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 130px;

    &:hover {
      opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

    ${ props => props.isTransparent && `
        background: transparent;
        border: 1px solid #ffffff;
        margin-top: 120px;
        img {
            transform: rotateY(180deg);
        }
    `}
`;