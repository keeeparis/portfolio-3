import styled, { css } from "styled-components";
import { inViewProp } from "../../types";
import { fadeInFromBelow } from "../Header/styles";
import { fadeIn, Section, translateLeftToRight, fadeInImage } from "../Main/styles";

export const Wrapper = styled(Section)`
    padding-top: 56px;
    padding-bottom: 112px;
`
export const DisplayFlex = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Column1 = styled.div`
    padding-right: 85px;
    flex: 1;
`
export const Columns = styled.div`
    display: flex;
    max-width: 720px;
    margin-top: 32px;
    justify-content: space-between;
`
export const DataColumn = styled.div`
    max-width: 192px;
`
export const Column2 = styled.div`
    max-width: 375px;
    margin-top: -10px;

    p {
        margin: 32px 0 42px;
    }
`
export const H2 = styled.h2<inViewProp>`
    overflow: hidden;
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeInFromBelow} 1s linear forwards;
        `
    };
`
export const P = styled.p<inViewProp>`
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeIn} 1s linear forwards;
        `
    };
`
export const H3 = styled.h3<inViewProp>`
    margin-bottom: 10px;
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${translateLeftToRight} .8s linear forwards;
        `
    };
`
export const ButtonWrapper = styled.div<inViewProp>`
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeIn} 1s linear forwards;
        `
    };
`