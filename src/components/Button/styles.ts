import styled, { css } from "styled-components"

export const Button = styled.a<{
    transformValue: string | undefined
}>`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    min-height: 40px;
    margin-top: 0px;
    color: #fefdf7;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0 32px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(248, 246, 241, 0.2);
    font-family: 'niveau-grotesk';
    transition-duration: .3s;

    &:hover > div:nth-child(1) {
        transform: translateX(0);
    }
    &:hover > div:nth-child(2) {
        transform: ${({ transformValue }) => 
            transformValue 
                ? css`${transformValue}`
                : 'translateY(-100%)'
        }
    }
`
export const TextWrapper = styled.div`
    position: relative;    
    transition-duration: .3s;
`
export const Text = styled.div<{textDistance: string | undefined}>`
    :nth-child(2) {
        position: absolute;
        color: #222b40;
        top: ${({ textDistance }) => textDistance && css`${textDistance}`}
    }
`
export const HoverBackground = styled.div`
    background-color: #fefdf7;
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: -1;
    border-style: solid;
    border-width: 2px;
    border-color: #fff;
    transform: translateX(-110%);
    transition-duration: .3s;
`