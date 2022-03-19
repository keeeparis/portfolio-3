import styled, { css } from "styled-components"
import { fadeInImage, fadeInLeftToRight, translateLeftToRight, traslateFromBelow } from "../../containers/Main/styles"
import graphIcon from '../../media/graph_grow-bg.svg'
import popUpText from '../../media/graph_grow-val.svg'
import { inViewProp } from "../../types"

export const GraphWrap = styled.div`
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 320px;
    padding: 80px 80px 44px 110px;
    justify-content: space-between;
    align-items: flex-end;
    flex: 0 0 auto;
    background-color: #583bac;
    background-image: none;
    background-size: auto;
    background-repeat: repeat;
`
export const GraphImage = styled.div<inViewProp>`
    position: absolute;
    top: 0%;
    left: 0px;
    right: auto;
    bottom: 0px;
    z-index: 0;
    width: 0;
    overflow: hidden;
    background-color: #583bac;
    background-image: url(${graphIcon});
    background-position: 0px 0px;
    background-repeat: no-repeat;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeInLeftToRight} 1s linear forwards;
        `
    };
`
export const EachColumn = styled.div<inViewProp>`
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;
    max-width: 48px;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    height: 0;
    border-left: 4px solid #fefdf7;
    background-image: linear-gradient(180deg, rgba(239, 235, 231, 0), rgba(239, 235, 231, 0.3));

    &:nth-child(2) {
        max-height: 99px;
    }
    &:nth-child(4) {
        max-height: 50px;
    }
    &:nth-child(5) {
        max-height: 147px;
    }
    &:nth-child(6) {
        max-height: 99px;
    }
    &:nth-child(7) {
        max-height: 147px;
    }
    &:not(:first-child) {
        animation: ${({ inView }) => 
            inView && css`
                ${traslateFromBelow} 1s linear forwards;
            `
        };
        overflow: ${({ inView }) => 
            inView ? 'unset' : 'hidden'
        };
    }

    &:hover > div:nth-child(1) {
        opacity: 1;
    }
    &:hover > div:nth-child(2) {
        opacity: 1;
        top: -35px;
    }
`
export const BackgroundOnHover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(180deg, rgba(239, 235, 231, 0), rgba(239, 235, 231, 0.3));
    opacity: 0;
    transition: all .3s ease;
`
export const TextOnHover = styled.div`
    position: relative;
    top: -10px;
    z-index: 1;
    display: flex;
    min-width: 64px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    justify-content: center;
    background-image: url(${popUpText});
    background-position: 50% 100%;
    background-size: auto;
    background-repeat: no-repeat;
    opacity: 0;
    transition: all .3s ease;
    color: #583bac;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.02em;
    white-space: nowrap;
    line-height: 20px;
`