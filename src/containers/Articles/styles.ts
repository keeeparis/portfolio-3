import styled, { css } from "styled-components";

import graphPortfolio from '../../media/graph_portfolio-bg.svg'
import graphLine from '../../media/graph_portfolio-line.svg'
import dollar from '../../media/read_dollar.svg'

import { articlesAnimation1, fadeInFromBelow, fadeInLine, translateLeftToRight120 } from "../../styles/animations";
import { inViewProp } from "../../types";

export const Wrapper = styled.section`
    position: relative;
    padding: 112px 80px;
    color: #fefdf7;
`
export const Background = styled.div`
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
export const H2 = styled.h2<inViewProp>`
    opacity: 0;
    color: #fcdfd8;
    text-align: center;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeInFromBelow} 1s linear forwards;
        `
    };
`
export const ArticlesGrid = styled.div`
    display: grid;
    margin-top: 35px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;  
    grid-auto-columns: 1fr;
    `
export const Container = styled.div`
    position: relative;
    overflow: hidden;
    padding: 52px 52px 0 0;

    :nth-child(1) > div > div {
        background-color: #583bac;
        &:hover { border-color: #fefdf7; }
    }
    
    :nth-child(2) > div > div {
        background-color: #f8f6f1;
        color: #222b40;
        overflow: unset;
        &:hover { border-color: #927cff; }
    }

    :nth-child(3) {
        grid-row-start: span 2;
        grid-row-end: span 2;
        grid-column-start: span 1;
        grid-column-end: span 1;
        padding-right: 39px;

        > div > div {
            background-color: #414a9c;
            overflow: unset;
            &:hover { border-color: #fefdf7; }
        }
    }

    :nth-child(4) {
        grid-column-start: span 2;
        grid-column-end: span 2;

        > div > div {
            background-color: #fcdfd8;
            color: #222b40;
            padding-top: 48px;
            &:hover { border-color: #927cff; }
        }
    }
`
export const AnimationDiv1 = styled.div<inViewProp>`
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeInFromBelow} 1s linear forwards;
        `
    };
`
export const AnimationDiv2 = styled.div<inViewProp>`
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: ${({ inView }) => 
        inView && css`
            ${translateLeftToRight120} 1s linear forwards;
        `
    };
`
export const Card = styled.div<{graph?: boolean}>`
    position: relative;
    padding: 72px 32px 32px;
    display: flex;
    flex-direction: column;
    border: 2px solid #222b40;
    transition: all .3s ease;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    background: ${({ graph }) => 
        graph && `#414a9c url(${graphPortfolio}) no-repeat 50% 50%`
    };
`
export const OverTitle = styled.div<{black?: boolean}>`
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    margin-bottom: 36px;
    font-size: 14px;

    span {
        display: block;
        width: 20px; 
        height: 1px;
        margin-right: 16px;
        background-color: #f3fdf7;
        filter: ${({ black }) => black ? 'invert(1)' : 'invert(0)'}
    }
`
export const Title = styled.h3<{pink?: boolean}>`
    margin-bottom: 32px;
    flex: 1;
    color: ${({ pink }) => pink && '#fcdfd8'};
`
export const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const BottomText = styled.div`
    text-transform: uppercase;
    letter-spacing: 0.02em;
    font-size: 14px;
`
export const ArticleButton = styled.a<{color?: string}>`
    display: flex;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    background-color: ${({ color }) => color ? `${color}` : '#f8b940'};
    cursor: pointer;

    &:hover > div > div :nth-child(1) {
        transform: translateX(100%);
    }
    &:hover > div > div :nth-child(2) {
        transform: translateX(-100%);
    }
`
export const ArrowIconWrap = styled.div<{black?: boolean}>`
    position: relative;

    img {
        filter: ${({ black }) => black ? 'invert(90%)' : 'invert(0)'};
        transition: all .3s ease;
    }
    img:nth-child(2) {
        position: absolute;
        top: 2px;
        transform: translateX(-200%);
    }
`

export const Avatar = styled.div<inViewProp>`
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;

    img {
        position: relative;
        border-radius: 50%;
        width: 120px;
        height: 100%;
        top: -20px;
        right: -15px;
        animation: ${({ inView }) => 
            inView && css`
                ${articlesAnimation1} 2s ease-in-out forwards;
            `
        };
    }
`
export const Stats = styled.div<inViewProp>`
    position: absolute;
    top: -15px;
    right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        opacity: 0;
        animation: ${({ inView }) => 
            inView && css`
                ${fadeInFromBelow} 1.8s linear forwards;
            `
        }
    }
`
export const GraphLineWrap = styled.div`
    position: absolute;
    inset: 0;
    padding: 0 36px 170px;
    z-index: -1;
`
export const GraphLine = styled.div<inViewProp>`
    background: url(${graphLine}) no-repeat 0 100%;
    width: 0%;
    height: 550px;
    animation: ${({ inView }) => 
        inView && css`
            ${fadeInLine} 1s cubic-bezier(0.63, 0.06, 0.38, 0.68) 1s forwards;
        `
    };
`
export const DollarSign = styled.span`
    background: url(${dollar}) no-repeat 50% 50%;
    background-size: contain;
    width: 50px;
    margin-right: 20px;
    display: block;
    flex: 1 0 auto;
`
export const Title4 = styled(Title)`
    display: flex;
    max-width: 450px;
    justify-content: center;
`
export const P = styled.p`
    text-transform: none;
    max-width: 480px;
`
export const ChartWrap = styled.div`
    position: absolute;
    top: -100px;
    right: -70px;

    img:nth-child(2) {
        position: absolute;
        left: -60px;
        top: 180px;
    }
`