import styled, { css } from "styled-components";
import { fadeIn } from "../../styles";
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

        :hover {
            opacity: 1;
        }
    }
`
export const UnderLogoDiv = styled.div`
    
`