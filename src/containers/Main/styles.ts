import styled, { keyframes } from "styled-components";
import arrowIcon from '../../media/arrow-input.svg'

export const Main = styled.main`
    background-image: linear-gradient(130deg, #fefdf7 40%, #e8e4e1);
`
export const Section = styled.section`
    padding: 0 80px;
    position: relative;
    color: #fefdf7;
`
export const Intro = styled(Section)`
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
export const H3 = styled.h3`
    text-transform: capitalize;
    font-size: 34px;
    line-height: 1.2em;
    font-weight: 500;
    letter-spacing: 0.02em;
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
export const H1 = styled.h1`
    text-transform: capitalize;
    font-size: 86px;
    line-height: 1.15em;
    font-weight: 500;
    color: #fcdfd8;
    span {
        font-size: 0.5em;
        vertical-align: super;
    }
`

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const GraphWrap = styled.div`
    position: relative;

    img:nth-child(1) {
        margin-top: -35px;
    }
    img:nth-child(2) {
        position: absolute;
        bottom: 60px;
        left: 40px;
    }
    img:nth-child(3) {
        position: absolute;
        top: 10px;
        right: -40px;
        animation: ${spin} infinite 10s linear;
    }
`

