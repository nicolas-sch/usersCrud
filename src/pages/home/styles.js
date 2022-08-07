import styled from "styled-components";
import Background from '../../assets/bg_image.svg'

export const Container = styled.div `
    height: 100%;
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

export const InputLabel = styled.p `
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left: 25px;

`;

export const Input = styled.input `
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    padding-left: 25px;
    margin-bottom: 34px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
`;