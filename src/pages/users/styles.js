import styled from "styled-components";
import Background from '../../assets/bg_image2.svg'

export const Container = styled.div `
    height: 100%;
    min-height: 100vh;
    background: url('${Background}');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

export const Image = styled.img `
    margin-top: 30px;
    
`;

export const User = styled.li `
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;