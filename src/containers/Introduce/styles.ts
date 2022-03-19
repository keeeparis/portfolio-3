import styled, { css } from "styled-components";
import { fadeInFromBelow } from "../Header/styles";
import { fadeIn, Section, translateLeftToRight } from "../Main/styles";
import { inViewProp } from '../../types'

export const Wrapper = styled(Section)`
    padding-top: 56px;
    padding-bottom: 56px;
`
export const Columns = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
`
export const ColumnCubics = styled(Column)<inViewProp>`
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${translateLeftToRight} 1s linear forwards
        `
    };

    h4 {
        text-transform: capitalize;
    }

    img {
        height: 125px;
        object-fit: scale-down;
        margin-bottom: 35px;
        object-position: 0 100%;
    }
`
export const ImageWrapper = styled.div<inViewProp>`
    position: relative;
    cursor: pointer;
    margin-bottom: 32px;
    width: fit-content;
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeIn} .5s linear forwards;
        `
    };

    > img {
        transition: all 300ms ease;
        width: 123px;
        height: 100%;
        border: 2px solid rgba(88, 59, 172, 0);
        border-radius: 999px;
    }

    &:hover > img {
        border-color: #583bac;
    }
    &:hover > div > div {
        transform: scale(1.5)
    }
`
export const PlayButton = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 35px;
    height: 35px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 3px;
    border-radius: 100px;
    background-color: #fefdf7;
    box-shadow: 0 3px 20px 0 rgb(34 43 64 / 12%);

    > img {
        position: relative;
        z-index: 1;
    }

    > div {
        position: absolute;
        left: 0%;
        top: 0%;
        right: 0%;
        bottom: 0%;
        z-index: 0;
        border-radius: 100px;
        background-color: #fefdf7;
        opacity: 0.35;
        transform: scale(1);
        transition: all 300ms ease;
    }
`
export const H3 = styled.h3<{ inView: boolean }>`
    text-transform: capitalize;
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeInFromBelow} .5s linear forwards
        `
    }
`