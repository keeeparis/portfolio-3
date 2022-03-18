import styled from "styled-components";

export const Header = styled.header`
    display: block;
`
export const Wrapper = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 0 80px;
`
export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 1230px;
    margin: 0 auto;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
export const SignIn = styled.a`
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
        transform: translateY(-100%);
    }
`
export const Text = styled.div`
    position: relative;    
    transition-duration: .3s;
`
export const SignInText = styled.div`
    :nth-child(2) {
        position: absolute;
        color: #222b40;
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