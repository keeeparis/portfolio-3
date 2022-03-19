import styled, { css, keyframes } from "styled-components";
import { OverFlowHidden } from "../../styles";
import { inViewProp } from "../../types";

export const fadeInFromBelow = keyframes`
    0% {
        opacity: 0;
        transform: translateY(75%);
    }
    75% {
        opacity: 0;
        transform: translateY(45%);
    }     
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const Header = styled.header`
    display: block;
`
export const Wrapper = styled(OverFlowHidden)`
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 0 80px;
`
export const Content = styled.div<inViewProp>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeInFromBelow} linear 1s forwards;
        `
    };
`
export const Logo = styled.div``
export const LogoImage = styled.img``
export const NavWrapper = styled.div``
export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const NavLink = styled.a`
    position: relative;
    display: block;
    margin-right: 20px;
    margin-bottom: -3px;
    margin-left: 20px;
    flex-direction: column;
    font-family: 'niveau-grotesk';
    color: #f8f6f1;
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 0.02em;

    &:after {
        content: '';
        width: 0%;
        background-color: white;
        display: block;
        height: 2px;
        transition: all .3s;
        margin: 3px auto 0;
    }

    &:hover:after {
        width: 100%;
    }
`