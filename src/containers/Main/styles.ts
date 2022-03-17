import styled from "styled-components";

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
export const Column = styled.div`
    position: relative;
`
export const H3 = styled.h3`
    text-transform: capitalize;
    font-size: 34px;
    line-height: 1.2em;
    font-weight: 500;
    letter-spacing: 0.02em;
`
export const H1 = styled.h1`
    text-transform: uppercase;
    font-size: 86px;
    line-height: 1.15em;
    font-weight: 500;
    color: #fcdfd8;
`
export const GraphWrap = styled.div`
    position: absolute;
`