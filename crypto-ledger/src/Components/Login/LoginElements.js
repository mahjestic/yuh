import styled from "styled-components";
// import {Link} from "react-router-dom";
import ethImg from "../../Assets/Vector.png";

export const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    height: 100vh;
    background: linear-gradient(180.02deg, #2E3047 25.58%, #707793 99.98%) no-repeat center center fixed;
`;

export const BackgroundImg = styled.div`
    height: 100vh;
    background-image: url(${ethImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 700px;
    transition: 500ms ease;

    @media screen and (max-width: 500px) {
        transition: 500ms ease;
        background-size: auto 350px;
    }
`;


export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
` ;

export const Logo = styled.div`
    margin-top: 32px;
    margin-left: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    cursor: pointer;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 480px){
        padding: 10px;
    }  
`;

export const Form = styled.div`
    background: #2E3047;
    mix-blend-mode: normal;
    max-width: 600px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 120px;
    border-radius: 10px;
    box-shadow: 0px 7px 3px rgba(0, 0, 0, 0.5);
    opacity: .95;
    

    @media screen and (max-width: 480px){
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    text-transform: uppercase;
    margin-bottom: 40px;
    color: #fff;
    font-size: 32px;
    font-weight: 300;
    text-align: center;
    letter-spacing: 0.05em;
`;

export const FormLabel = styled.label`
    margin-bottom: 10px;
    font-size: 16px;
    color: #fff;
`;

export const FormInput = styled.input`
    border: none;
    outline: none;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 32px;
    border-bottom: 1px solid #ABB2CD;
    background-color: transparent;
    color: #fff;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    transform: matrix(1, 0, 0, 1, 0, 0);

    &.pass{
        margin-bottom: 10px;
    }
`;

export const Text = styled.span`
    position: relative;
    text-decoration: none;
    margin-bottom: 30px;
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    justify-self: self-end;

    &.signup-prompt{
        margin: 0 auto;
        margin-top: 20px;
    }
    &.signup-link{
        color: #47DBB8;
    }
    
    &.signup-prompt::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: .5px;
        bottom: 0;
        left: 0;
        background-color: #fff;
        transform: scaleX(0);
        transition: transform 500ms ease;
    }
    
    &:hover::before {
        transform: scaleX(1);
    }
    &:hover:not(.signup-prompt){
        transition: 0.3s ease;
        color: #47DBB8;

    }
`;

export const FormButton = styled.button`
    margin: 0 auto;
    width: 9rem; 
    height: 2.5rem; 
    padding: 10px 25px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    letter-spacing: 1px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .5);

    transition: all .4s ease-in-out;

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
        width: 13rem; 
        height: 2.8rem; 
    }
    &.mint-gradient {
        color: #fff;
        background-color: #47DBB8; 
        background-image: linear-gradient(75deg, #abfbe7, #6dd9c0, #47DBB8, #d2f6ed); 
        background-size: 300% ;
        background-position: left;
        transition: 500ms background-position ease-in-out;
    }
    &.mint-gradient:hover{
        background-position: right; 
        transform: scale(1.05);
        transition: 500ms;
    }
`;


