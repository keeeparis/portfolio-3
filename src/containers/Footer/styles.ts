import styled, { css } from "styled-components";

import { fadeIn } from "../../styles/animations";
import { inViewProp } from "../../types";

export const Wrapper = styled.section`
    position: relative;
    padding: 105px 80px 110px;
    color: #fefdf7;
`
export const Row = styled.div<inViewProp>`
    display:flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeIn} 1s linear forwards;
        `
    };
`
export const LogoWrap = styled.div`
    display: flex;
    max-width: 380px;
    justify-content: space-between;
    flex: 1;
    align-self: flex-start;
`
export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
`
export const H4 = styled.h4`
    margin-bottom: 32px;
`
export const UL = styled.ul`
    list-style-type: none;
    column-count: 2;
    column-gap: 60px;
    margin-bottom: 24px;
`
export const LI = styled.li`
    margin-bottom: 24px;
    a { 
        margin-left: 0;
        opacity: 0.7;
        color: #f8f6f1;
        font-size: 17px;
        letter-spacing: 0.02em;
        font-family: 'niveau-grotesk';
        font-weight: 300;       
        transition: all .3s ease;

        :hover { opacity: 1; }
    }
`
export const UnderLogoDiv = styled.div`
    max-width: 210px;
    opacity: .8;
    color: #f8f6f1;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.02em;
`
export const IconWrap = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-right: 25px;
    border: 1px solid rgba(248, 246, 241, 0.25);
    transition: all .1s ease-in-out;

    img { filter: invert(1); }
    :hover { border-color: rgba(248, 246, 241) }
`
export const SocialWrap = styled.div`
    display: flex;
    flex-direction: row;
`
export const CopyrightLink = styled.a`
    display: flex;
    align-items: center;
    color: rgba(248, 246, 241, 0.7);
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.02em;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .1s ease-in-out;

    img { margin-right: 5px; };
    :hover { color: rgba(248, 246, 241) };
`