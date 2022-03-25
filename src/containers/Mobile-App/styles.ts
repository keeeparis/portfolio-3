import styled, { css } from "styled-components";

import phoneBg from '../../media/app_phone-bg.svg'
import phoneLine from '../../media/app_phone-line.svg'

import { fadeIn, fadeInFromBelow, translateLeftToRight } from "../../styles/animations";
import { inViewProp } from "../../types";

export const Wrapper = styled.section`
    position: relative;
    padding: 112px 80px;
`
export const Columns = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
export const Column1 = styled.div``
export const H2 = styled.h2<inViewProp>`
    text-transform: capitalize;
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeInFromBelow} 1s linear forwards;
        `
    };
`
export const Links = styled.div<inViewProp>`
    margin-top: 60px;
    opacity: 0;
    display: flex;
    align-items: center;
    gap: 15px;
    animation: ${({ inView }) => 
        inView && css`
            ${translateLeftToRight} 1s linear forwards;
        `
    };
`
export const Button = styled.a`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    min-height: 56px;
    min-width: 154px;
    margin-top: 0px;
    color: #fefdf7;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    cursor: pointer;
    border-style: solid;
    border-width: 2px;
    border-color: #c8c9cd;
    font-family: 'niveau-grotesk';
    transition-duration: .5s;

    &:hover { border-color: transparent; }
    &:hover > div:nth-child(1) {
        transform: translateX(0);
    }
    &:hover > div:nth-child(2) {
        transform: translateY(-140%);
        
    }
`
export const TextWrapper = styled.div`
    position: relative;    
    transition-duration: .5s;
`
export const Text = styled.div`
    :nth-child(2) {
        position: absolute;
        color: #222b40;
        transform: translateY(50%);
    }
`
export const HoverBackground = styled.div`
    background-color: #583bac;
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: -1;
    border-style: solid;
    border-width: 2px;
    border-color: #583bac;
    transform: translateX(-110%);
    transition-duration: .5s;
`
export const Column2 = styled.div<inViewProp>`
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeIn} 1s linear forwards;
        `
    };
`
export const PhoneBg = styled.div`
    overflow: hidden;
    padding-top: 40px;
    padding-right: 46px;
    padding-left: 46px;
    background-color: #583bac;
    background-image: url(${phoneBg});
    background-position: 50% 100%;
    background-size: auto;
    background-repeat: no-repeat;
`
export const Phone = styled.div`
    position: relative;
    transform: translateY(5px);

    img{
        width: 271px;
    }
`
export const PhoneLine = styled.div`
    position: absolute;
    left: 0%;
    top: 0%;
    right: auto;
    bottom: 0%;
    z-index: 1;
    width: 100%;
    background-image: url(${phoneLine});
    background-size: auto;
    height: 259px;
`
export const Column3 = styled.div<inViewProp>`
    max-width: 376px;
    flex: 1;
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${translateLeftToRight} 1s linear forwards;
        `
    };

    h3 {
        text-transform: capitalize;
        font-weight: 500;
        margin-bottom: 35px;
    }
`
export const Form = styled.form`
    position: relative;
`
export const Input = styled.input`
    display: block;
    width: 100%;
    height: 58px;
    padding: 8px 20px 8px 0;
    margin-bottom: 24px;
    border-style: solid;
    border-width: 0px 0px 2px;
    background-color: transparent;
    font-family: niveau-grotesk;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    border-bottom-color: rgba(34, 43, 64, 0.15);
    color: #222b40;

    ::placeholder {
        transition-duration: .3s;
        color: currentColor;
    }

    :focus::placeholder {
        transition-duration: .3s;
        color: transparent;
    }
`