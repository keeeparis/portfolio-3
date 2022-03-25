import { keyframes } from "styled-components"

export const fadeIn = keyframes`
    0%, 75% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export const fadeInLeftToRight = keyframes`
    0%, 45% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`
export const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
export const fadeInImage = keyframes`
    0%, 75% {
        opacity: 0;
        transform: translateY(10%);
    }   
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`
export const fadeInLine = keyframes`
    0%, 35% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`
export const scaleUp = keyframes`
    0%, 50% {
        opacity: 0;
        transform: scale(0.2)
    }
    100% {
        opacity: 1;
        transform: scale(1)
    }
`
export const translateLeftToRight = keyframes`
    0%, 65% {
        opacity: 0;
        transform: translateX(-30px)
    } 
    100% {
        opacity: 1;
        transform: translateX(0)
    }
`
export const translateLeftToRight120 = keyframes`
    0%, 65% {
        opacity: 0;
        transform: translateX(-120%)
    } 
    100% {
        opacity: 1;
        transform: translateX(0)
    }
`
export const traslateFromBelow = keyframes`
    0%, 75% {
        height: 0;
    }
    100% {
        height: 100%;
    }
`
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
export const articlesAnimation1 = keyframes`
    0%, 50% {
        opacity: 0;
        transform: scale(0.2) translate(50%, -50%);
    }
    100% {
        opacity: 1;
        transform: scale(1) translate(0, 0);
    }
`