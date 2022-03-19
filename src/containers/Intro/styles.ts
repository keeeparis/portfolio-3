import styled, { css } from "styled-components"
import { OverFlowHidden } from "../../styles"
import { fadeIn, fadeInImage, fadeInLeftToRight, fadeInLine, scaleUp, Section, spin } from "../Main/styles"
import arrowIcon from '../../media/arrow-input.svg'
import { fadeInFromBelow } from "../Header/styles"
import { inViewProp } from "../../types"

export const Wrapper = styled(Section)`
    padding-top: 270px;
`
export const IntroBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #222b40;
    overflow: hidden;
    z-index: 0;
    margin: 40px;
`
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Animation = styled(OverFlowHidden)<inViewProp>`
    will-change: width;
    width: 0%;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeInLeftToRight} 1.5s ease-in-out forwards
        `
    };
`
export const ColumnOne = styled.div`
    flex-basis: 250px;
`
export const ColumnTwo = styled.div`
    display: flex;
`
export const HeadersWrap = styled.div`
    z-index: 1;
    margin-right: -85px;
`
export const H3 = styled.h3<inViewProp>`
    text-transform: capitalize;
    font-size: 34px;
    line-height: 1.2em;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #fefdf7;
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeIn} 1s linear forwards;
        `
    };
`
export const SignUp = styled.form`
    margin-top: 80px;
    width: 210px;
    position: relative;
`
export const SignUpInput = styled.input`
    outline: none;
    width: 100%;
    height: 40px;
    margin-bottom: 0px;
    padding: 8px 8px 8px 0;
    border-style: solid;
    border-width: 0px 0px 2px;
    border-color: #000 #000 #f8f6f1;
    border-radius: 0px;
    background-color: transparent;
    font-family: niveau-grotesk, sans-serif;
    color: #fefdf7;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.07em;
    text-transform: uppercase;

    &::placeholder {
        transition-duration: .3s;
        color: currentColor;
    }

    &:focus::placeholder {
        transition-duration: .3s;
        color: transparent;
    }
`
export const SignUpButton = styled.a`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1;
    display: block;
    width: 40px;
    margin-right: -20px;
    background-image: url(${arrowIcon});
    background-position: 50% 50%;
    background-size: auto;
    background-repeat: no-repeat;
    transition-duration: 0.2s;

    &:hover {
        transition-duration: 0.2s;
        top: -10px;
        right: -5px;
    }
`
export const H1 = styled.h1<inViewProp>`
    text-transform: capitalize;
    opacity: 0;
    font-size: 86px;
    line-height: 1.15em;
    font-weight: 500;
    color: #fcdfd8;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeInFromBelow} 1s linear forwards;
        `
    };

    span {
        font-size: 0.5em;
        vertical-align: super;
    }
`
export const GraphWrap = styled.div`
    position: relative;
`
export const AnimationGraph = styled.div<inViewProp>`
    img {
        margin-top: -35px;
        opacity: 0;
        animation: ${({ inView }) => 
            inView && css`
                ${fadeInImage} 1s linear forwards;
            `
        }
    }
`
export const AnimationLine = styled(OverFlowHidden)<inViewProp>`
    will-change: width;
    width: 0%;
    position: absolute;
    bottom: 60px;
    left: 40px;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeInLine} 2s linear forwards;
        `
    };
`
export const AnimationSpinner = styled.div<inViewProp>`
    position: absolute;
    top: 10px;
    right: -40px;
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${scaleUp} 1.5s forwards;
        `
    };
    
    img {
        animation: ${({ inView }) => 
            inView && css`
                ${spin} infinite 10s linear forwards;
            `
        };
    }
`