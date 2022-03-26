import{s as e,U as c,C as n,j as P,u as m,R as nt,a as at}from"./vendor.c51eefac.js";const st=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))w(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const v of l.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&w(v)}).observe(document,{childList:!0,subtree:!0});function d(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function w(s){if(s.ep)return;s.ep=!0;const l=d(s);fetch(s.href,l)}};st();const a=e.div`
    overflow: hidden;
`,x=e.div`
    position: relative;
    width: 100%;
    max-width: 1230px;
    margin: 0 auto;
`,u=c`
    0%, 75% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`,Q=c`
    0%, 45% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`,lt=c`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`,ct=c`
    0%, 75% {
        opacity: 0;
        transform: translateY(10%);
    }   
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`,Z=c`
    0%, 35% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`,dt=c`
    0%, 50% {
        opacity: 0;
        transform: scale(0.2)
    }
    100% {
        opacity: 1;
        transform: scale(1)
    }
`,_=c`
    0%, 65% {
        opacity: 0;
        transform: translateX(-30px)
    } 
    100% {
        opacity: 1;
        transform: translateX(0)
    }
`,pt=c`
    0%, 65% {
        opacity: 0;
        transform: translateX(-120%)
    } 
    100% {
        opacity: 1;
        transform: translateX(0)
    }
`,ht=c`
    0%, 75% {
        height: 0;
    }
    100% {
        height: 100%;
    }
`,g=c`
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
`,ft=c`
    0%, 50% {
        opacity: 0;
        transform: scale(0.2) translate(50%, -50%);
    }
    100% {
        opacity: 1;
        transform: scale(1) translate(0, 0);
    }
`,gt=e.header`
    display: block;
`,mt=e(a)`
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 0 80px;
`,xt=e.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${g} linear 1s forwards;
        `};
`,ut=e.div``,vt=e.img``,bt=e.div``,wt=e.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,f=e.a`
    position: relative;
    width: fit-content;
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
`;var tt="/portfolio-3/assets/logo-full.c3d11e2c.svg";const yt=e.a`
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
        transform: ${({transformValue:i})=>i?n`${i}`:"translateY(-100%)"}
    }
`,$t=e.div`
    position: relative;    
    transition-duration: .3s;
`,T=e.div`
    :nth-child(2) {
        position: absolute;
        color: #222b40;
        top: ${({textDistance:i})=>i&&n`${i}`}
    }
`,kt=e.div`
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
`,t=P.exports.jsx,o=P.exports.jsxs,zt=P.exports.Fragment,O=({children:i,width:r,minHeight:d,backgroundColor:w,padding:s,textDistance:l,transformValue:v})=>o(yt,{style:{width:r,minHeight:d,backgroundColor:w,padding:s},transformValue:v,children:[t(kt,{}),o($t,{children:[t(T,{textDistance:l,children:i}),t(T,{textDistance:l,children:i})]})]}),It=()=>{const[i,r]=m({triggerOnce:!0});return t(gt,{ref:i,children:t(mt,{children:t(x,{children:o(xt,{inView:r,children:[t(ut,{children:t("a",{href:"/",children:t(vt,{src:tt})})}),t(bt,{children:o(wt,{children:[t(f,{href:"#Introduce",children:"Introduce"}),t(f,{href:"#Statistics",children:"Statistics"}),t(f,{href:"#Articles",children:"Articles"}),t(f,{href:"#Mobile-App",children:"Mobile App"})]})}),t(O,{children:"Sign In"})]})})})})};var Ct="/portfolio-3/assets/arrow-input.cd37d6a6.svg";const At=e.section`
    padding: 270px 80px 0;
    position: relative;
`,et=e.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #222b40;
    overflow: hidden;
    z-index: 0;
    margin: 40px;
`,jt=e.div`
    display: flex;
    justify-content: space-between;
`,Lt=e(a)`
    will-change: width;
    width: 0%;
    animation: ${({inView:i})=>i&&n`
            ${Q} 1.5s ease-in-out forwards
        `};
`,Wt=e.div`
    flex-basis: 250px;
`,_t=e.div`
    display: flex;
`,St=e.div`
    z-index: 1;
    margin-right: -85px;
`,Bt=e.h3`
    text-transform: capitalize;
    font-size: 34px;
    line-height: 1.2em;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #fefdf7;
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${u} 1s linear forwards;
        `};
`,Ht=e.form`
    margin-top: 80px;
    width: 210px;
    position: relative;
`,Pt=e.input`
    outline: none;
    width: 100%;
    height: 40px;
    margin-bottom: 0px;
    padding: 8px 8px 8px 0;
    border-style: solid;
    border-width: 0px 0px 2px;
    border-color: #000 #000 #f8f6f1;
    border-radius: 0px;
    background-color: transparent;
    font-family: niveau-grotesk, sans-serif;
    color: #fefdf7;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.07em;
    text-transform: uppercase;

    &::placeholder {
        transition-duration: .3s;
        color: currentColor;
    }

    &:focus::placeholder {
        transition-duration: .3s;
        color: transparent;
    }
`,Ot=e.a`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 1;
    display: block;
    width: 40px;
    margin-right: -13px;
    background-image: url(${Ct});
    background-position: 50% 50%;
    background-size: auto;
    background-repeat: no-repeat;
    transition-duration: 0.2s;

    &:hover {
        transition-duration: 0.2s;
        top: -10px;
        right: -5px;
    }
`,S=e.h1`
    text-transform: capitalize;
    opacity: 0;
    font-size: 86px;
    line-height: 1.15em;
    font-weight: 500;
    color: #fcdfd8;
    animation: ${({inView:i})=>i&&n`
            ${g} 1s linear forwards;
        `};

    span {
        font-size: 0.5em;
        vertical-align: super;
    }
`,Tt=e.div`
    position: relative;
`,Mt=e.div`
    img {
        margin-top: -35px;
        opacity: 0;
        animation: ${({inView:i})=>i&&n`
                ${ct} 1s linear forwards;
            `}
    }
`,Ut=e(a)`
    will-change: width;
    width: 0%;
    position: absolute;
    bottom: 60px;
    left: 40px;
    animation: ${({inView:i})=>i&&n`
            ${Z} 2s linear forwards;
        `};
`,it=e.div`
    position: absolute;
    top: -20px;
    right: -40px;
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${dt} 1.5s forwards;
        `};
    
    img {
        animation: ${({inView:i})=>i&&n`
                ${lt} infinite 10s linear forwards;
            `};
    }
`;var Yt="/portfolio-3/assets/graph_invest-bg.b152c5b0.svg",Ft="/portfolio-3/assets/hero_graph-line.86969cf5.svg",ot="/portfolio-3/assets/circle-txt_learn.dd072887.svg";const Gt=()=>{const[i,r]=m({triggerOnce:!0});return o(At,{ref:i,children:[t(et,{}),t(x,{children:o(jt,{children:[o(Wt,{children:[t(Bt,{inView:r,children:"Your financial future"}),t(Lt,{inView:r,children:o(Ht,{children:[t(Pt,{type:"text",placeholder:"Sign Up"}),t(Ot,{href:"#"})]})})]}),o(_t,{children:[o(St,{children:[t(a,{children:o(S,{inView:r,children:["Personal 360",t("span",{children:"\xB0"})]})}),t(a,{children:t(S,{inView:r,children:"investments"})}),t(a,{children:t(S,{inView:r,children:"for everyone"})})]}),o(Tt,{children:[t(Mt,{inView:r,children:t("img",{src:Yt,alt:""})}),t(Ut,{inView:r,children:t("img",{src:Ft,alt:""})}),t(it,{inView:r,children:t("img",{src:ot,alt:""})})]})]})]})})]})},Xt=e.section`
    position: relative;
    padding: 56px 80px;
`,Dt=e.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`,rt=e.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
`,M=e(rt)`
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${_} 1s linear forwards
        `};

    h4 {
        text-transform: capitalize;
    }

    img {
        height: 125px;
        object-fit: scale-down;
        margin-bottom: 35px;
        object-position: 0 100%;
    }
`,Rt=e.div`
    position: relative;
    cursor: pointer;
    margin-bottom: 32px;
    width: fit-content;
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${u} .5s linear forwards;
        `};

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
`,Vt=e.div`
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
`,B=e.h3`
    text-transform: capitalize;
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${g} .5s linear forwards
        `}
`;var Et="/portfolio-3/assets/illustr_cubes-01.c31bda32.svg",Nt="/portfolio-3/assets/illustr_cubes-02.ec0e1b8f.svg",qt="/portfolio-3/assets/introducing-ava.1e3046db.jpg",Kt="/portfolio-3/assets/play-triangle.295d99f9.svg";const Jt=()=>{const[i,r]=m({triggerOnce:!0,threshold:.75});return t(Xt,{id:"Introduce",children:t(x,{children:o(Dt,{ref:i,children:[o(rt,{children:[o(Rt,{inView:r,children:[t("img",{src:qt,alt:"",loading:"lazy"}),o(Vt,{children:[t("img",{src:Kt,alt:"",loading:"lazy"}),t("div",{})]})]}),t(a,{children:t(B,{inView:r,children:"introducing"})}),t(a,{children:t(B,{inView:r,children:"fractional"})}),t(a,{children:t(B,{inView:r,children:"shares"})})]}),o(M,{inView:r,children:[t("img",{src:Et,alt:"",loading:"lazy"}),t("h4",{children:"invest any amount"}),t("p",{children:"Choose how much you want to invest, and we\u2019ll convert from dollars to parts of a whole share."})]}),o(M,{inView:r,children:[t("img",{src:Nt,alt:"",loading:"lazy"}),t("h4",{children:"build a balanced portfolio"}),t("p",{children:"Customize your portfolio with pieces of different companies and funds to help reduce risk."})]})]})})})};var Qt="/portfolio-3/assets/graph_grow-bg.bf541350.svg",Zt="/portfolio-3/assets/graph_grow-val.5bfb6e62.svg";const te=e.div`
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
`,ee=e.div`
    position: absolute;
    top: 0%;
    left: 0px;
    right: auto;
    bottom: 0px;
    z-index: 0;
    width: 0;
    overflow: hidden;
    background-color: #583bac;
    background-image: url(${Qt});
    background-position: 0px 0px;
    background-repeat: no-repeat;
    animation: ${({inView:i})=>i&&n`
            ${Q} 1s linear forwards;
        `};
`,ie=e.div`
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
        animation: ${({inView:i})=>i&&n`
                ${ht} 1s linear forwards;
            `};
        overflow: ${({inView:i})=>i?"unset":"hidden"};
    }

    &:hover > div:nth-child(1) {
        opacity: 1;
    }
    &:hover > div:nth-child(2) {
        opacity: 1;
        top: -35px;
    }
`,oe=e.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(180deg, rgba(239, 235, 231, 0), rgba(239, 235, 231, 0.3));
    opacity: 0;
    transition: all .3s ease;
`,re=e.div`
    position: relative;
    top: -10px;
    z-index: 1;
    display: flex;
    min-width: 64px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    justify-content: center;
    background-image: url(${Zt});
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
`,ne=["20 000","40 000","10 000","30 000","20 000","30 000","40 000"],ae=({inView:i})=>o(te,{children:[t(ee,{inView:i}),ne.map((r,d)=>o(ie,{inView:i,children:[t(oe,{}),o(re,{children:["$ ",r,"k"]})]},d+1))]}),se=e.section`
    position: relative;
    padding: 56px 80px 112px;
`,le=e.div`
    display: flex;
    justify-content: space-between;
`,ce=e.div`
    padding-right: 85px;
    flex: 1;
`,de=e.div`
    display: flex;
    max-width: 720px;
    margin-top: 32px;
    justify-content: space-between;
`,pe=e.div`
    max-width: 192px;
`,he=e.div`
    max-width: 375px;
    margin-top: -10px;

    p {
        margin: 32px 0 42px;
    }
`,U=e.h2`
    overflow: hidden;
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${g} 1s linear forwards;
        `};
`,Y=e.p`
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${u} 1s linear forwards;
        `};
`,fe=e.h3`
    margin-bottom: 10px;
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${_} .8s linear forwards;
        `};
`,ge=e.div`
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${u} 1s linear forwards;
        `};
`,me=[{h:"20M+",t:"People who are joined Personal Investments"},{h:"5 900+",t:"Interested people use Personal investment"},{h:"50+",t:"We cooperate with famous companies"}],xe=()=>{const[i,r]=m({triggerOnce:!0,threshold:.5});return t(se,{ref:i,id:"Statistics",children:t(x,{children:o(le,{children:[o(ce,{children:[t(ae,{inView:r}),t(de,{children:me.map(d=>o(pe,{children:[t(a,{children:t(fe,{inView:r,children:d.h})}),t(Y,{inView:r,children:d.t})]},d.h))})]}),o(he,{children:[t(a,{children:t(U,{inView:r,children:"\u041Eur growth"})}),t(a,{children:t(U,{inView:r,children:"over the years"})}),t(Y,{inView:r,children:"Customize your portfolio with pieces of different companies and funds to help reduce risk and raise the chances."}),t(ge,{inView:r,children:t(O,{width:"170px",minHeight:"56px",backgroundColor:"#222b40",padding:"0",textDistance:"30px",transformValue:"translateY(-150%)",children:"Learn more"})})]})]})})})};var ue="/portfolio-3/assets/graph_portfolio-bg.1642f7fd.svg",ve="/portfolio-3/assets/graph_portfolio-line.5c5494d8.svg",be="/portfolio-3/assets/read_dollar.65c1acb0.svg";const we=e.section`
    position: relative;
    padding: 112px 80px;
    color: #fefdf7;
`,ye=e.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #222b40;
    overflow: hidden;
    z-index: 0;
    margin: 40px;
`,F=e.h2`
    opacity: 0;
    color: #fcdfd8;
    text-align: center;
    animation: ${({inView:i})=>i&&n`
            ${g} 1s linear forwards;
        `};
`,$e=e.div`
    display: grid;
    margin-top: 35px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;  
    grid-auto-columns: 1fr;
    `,y=e.div`
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
`,G=e.div`
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${g} 1s linear forwards;
        `};
`,X=e.div`
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${pt} 1s linear forwards;
        `};
`,$=e.div`
    position: relative;
    padding: 72px 32px 32px;
    display: flex;
    flex-direction: column;
    border: 2px solid #222b40;
    transition: all .3s ease;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    background: ${({graph:i})=>i&&`#414a9c url(${ue}) no-repeat 50% 50%`};
`,k=e.div`
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
        filter: ${({black:i})=>i?"invert(1)":"invert(0)"}
    }
`,W=e.h3`
    margin-bottom: 32px;
    flex: 1;
    color: ${({pink:i})=>i&&"#fcdfd8"};
`,z=e.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`,I=e.div`
    text-transform: uppercase;
    letter-spacing: 0.02em;
    font-size: 14px;
`,C=e.a`
    display: flex;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    background-color: ${({color:i})=>i?`${i}`:"#f8b940"};
    cursor: pointer;

    &:hover > div > div :nth-child(1) {
        transform: translateX(100%);
    }
    &:hover > div > div :nth-child(2) {
        transform: translateX(-100%);
    }
`,A=e.div`
    position: relative;

    img {
        filter: ${({black:i})=>i?"invert(90%)":"invert(0)"};
        transition: all .3s ease;
    }
    img:nth-child(2) {
        position: absolute;
        top: 2px;
        transform: translateX(-200%);
    }
`,ke=e.div`
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
        animation: ${({inView:i})=>i&&n`
                ${ft} 2s ease-in-out forwards;
            `};
    }
`,ze=e.div`
    position: absolute;
    top: -15px;
    right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        opacity: 0;
        animation: ${({inView:i})=>i&&n`
                ${g} 1.8s linear forwards;
            `}
    }
`,Ie=e.div`
    position: absolute;
    inset: 0;
    padding: 0 36px 170px;
    z-index: -1;
`,Ce=e.div`
    background: url(${ve}) no-repeat 0 100%;
    width: 0%;
    height: 550px;
    animation: ${({inView:i})=>i&&n`
            ${Z} 1s cubic-bezier(0.63, 0.06, 0.38, 0.68) 1s forwards;
        `};
`,Ae=e.span`
    background: url(${be}) no-repeat 50% 50%;
    background-size: contain;
    width: 50px;
    margin-right: 20px;
    display: block;
    flex: 1 0 auto;
`,je=e(W)`
    display: flex;
    max-width: 450px;
    justify-content: center;
`,Le=e.p`
    text-transform: none;
    max-width: 480px;
`,We=e.div`
    position: absolute;
    top: -100px;
    right: -70px;

    img:nth-child(2) {
        position: absolute;
        left: -60px;
        top: 180px;
    }
`;var p="/portfolio-3/assets/arrow-btn.cf52341b.svg",_e="/portfolio-3/assets/read_ava.f16f32ef.jpg",Se="/portfolio-3/assets/articles_stat-date.67516242.svg",Be="/portfolio-3/assets/articles_stat-lines.52678214.svg",He="/portfolio-3/assets/read_chart.304ea8e5.svg",Pe="/portfolio-3/assets/read_chart-part.bf578e5d.svg";const Oe=()=>{const[i,r]=m({triggerOnce:!0,threshold:.3});return o(we,{ref:i,id:"Articles",children:[t(ye,{}),o(x,{children:[t(a,{children:t(F,{inView:r,children:"Read our interesting"})}),t(a,{children:t(F,{inView:r,children:"articles about investments"})}),o($e,{children:[t(y,{children:t(G,{inView:r,children:o($,{children:[o(k,{children:[t("span",{children:"\xA0"}),"Explore expert videos"]}),t(W,{pink:!0,children:"User benefits of the Investments Personal 360\xB0"}),o(z,{children:[t(I,{children:"Play video for more"}),t(C,{children:t(a,{children:o(A,{black:!0,children:[t("img",{src:p,alt:""}),t("img",{src:p,alt:""})]})})})]}),t(ke,{inView:r,children:t("img",{src:_e,alt:""})})]})})}),t(y,{children:t(G,{inView:r,children:o($,{children:[o(k,{black:!0,children:[t("span",{children:"\xA0"}),"Explore expert videos"]}),t(W,{children:"Growth of the most popular stocks in 2022"}),o(z,{children:[t(I,{children:"Swipe right for more"}),t(C,{color:"#222b40",children:t(a,{children:o(A,{children:[t("img",{src:p,alt:""}),t("img",{src:p,alt:""})]})})})]}),o(ze,{inView:r,children:[t("img",{src:Se,alt:""}),t(a,{children:t("img",{src:Be,alt:""})})]})]})})}),t(y,{children:t(X,{inView:r,children:o($,{graph:!0,children:[o(k,{children:[t("span",{children:"\xA0"}),"Explore expert videos"]}),t(W,{pink:!0,children:"Measure your portfolio value correctly"}),o(z,{children:[t(I,{children:"Play video for more"}),t(C,{children:t(a,{children:o(A,{black:!0,children:[t("img",{src:p,alt:""}),t("img",{src:p,alt:""})]})})})]}),o(Ie,{children:[t(Ce,{inView:r}),t(it,{inView:r,children:t("img",{src:ot,alt:""})})]})]})})}),t(y,{children:t(X,{inView:r,children:o($,{children:[o(k,{black:!0,children:[t("span",{children:"\xA0"}),"Explore expert videos"]}),o(je,{children:[t(Ae,{children:"\xA0"}),"View useful statistics on famous stocks"]}),o(z,{children:[t(I,{children:t(Le,{children:"Read our article and choose how much you invest in a stock. We will convert it from dollars into fractions of a whole stock."})}),t(C,{color:"#583bac",children:t(a,{children:o(A,{children:[t("img",{src:p,alt:""}),t("img",{src:p,alt:""})]})})})]}),o(We,{children:[t("img",{src:He,alt:""}),t("img",{src:Pe,alt:""})]})]})})})]})]})]})};var Te="/portfolio-3/assets/app_phone-bg.8a6fb798.svg",Me="/portfolio-3/assets/app_phone-line.adf1d47a.svg";const Ue=e.section`
    position: relative;
    padding: 112px 80px;
`,Ye=e.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`,Fe=e.div``,H=e.h2`
    text-transform: capitalize;
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${g} 1s linear forwards;
        `};
`,Ge=e.div`
    margin-top: 60px;
    opacity: 0;
    display: flex;
    align-items: center;
    gap: 15px;
    animation: ${({inView:i})=>i&&n`
            ${_} 1s linear forwards;
        `};
`,D=e.a`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    min-height: 56px;
    min-width: 154px;
    margin-top: 0px;
    color: #fefdf7;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    cursor: pointer;
    border-style: solid;
    border-width: 2px;
    border-color: #c8c9cd;
    font-family: 'niveau-grotesk';
    transition-duration: .5s;

    &:hover { border-color: transparent; }
    &:hover > div:nth-child(1) {
        transform: translateX(0);
    }
    &:hover > div:nth-child(2) {
        transform: translateY(-140%);
        
    }
`,R=e.div`
    position: relative;    
    transition-duration: .5s;
`,j=e.div`
    :nth-child(2) {
        position: absolute;
        color: #222b40;
        transform: translateY(50%);
    }
`,V=e.div`
    background-color: #583bac;
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: -1;
    border-style: solid;
    border-width: 2px;
    border-color: #583bac;
    transform: translateX(-110%);
    transition-duration: .5s;
`,Xe=e.div`
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${u} 1s linear forwards;
        `};
`,De=e.div`
    overflow: hidden;
    padding-top: 40px;
    padding-right: 46px;
    padding-left: 46px;
    background-color: #583bac;
    background-image: url(${Te});
    background-position: 50% 100%;
    background-size: auto;
    background-repeat: no-repeat;
`,Re=e.div`
    position: relative;
    transform: translateY(5px);

    img{
        width: 271px;
    }
`,Ve=e.div`
    position: absolute;
    left: 0%;
    top: 0%;
    right: auto;
    bottom: 0%;
    z-index: 1;
    width: 100%;
    background-image: url(${Me});
    background-size: auto;
    height: 259px;
`,Ee=e.div`
    max-width: 376px;
    flex: 1;
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${_} 1s linear forwards;
        `};

    h3 {
        text-transform: capitalize;
        font-weight: 500;
        margin-bottom: 35px;
    }
`,Ne=e.form`
    position: relative;
`,E=e.input`
    display: block;
    width: 100%;
    height: 58px;
    padding: 8px 20px 8px 0;
    margin-bottom: 24px;
    border-style: solid;
    border-width: 0px 0px 2px;
    background-color: transparent;
    font-family: niveau-grotesk;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    border-bottom-color: rgba(34, 43, 64, 0.15);
    color: #222b40;

    ::placeholder {
        transition-duration: .3s;
        color: currentColor;
    }

    :focus::placeholder {
        transition-duration: .3s;
        color: transparent;
    }
`;var qe="/portfolio-3/assets/app_app-store.53776427.svg",Ke="/portfolio-3/assets/app_app-store-white.161b2be3.svg",Je="/portfolio-3/assets/app_google-play.9d0be6e2.svg",Qe="/portfolio-3/assets/app_google-play-white.147c354a.svg",Ze="/portfolio-3/assets/app_phone.edfb271d.png";const ti=()=>{const[i,r]=m({triggerOnce:!0,threshold:.3});return t(Ue,{id:"Mobile-App",ref:i,children:t(x,{children:o(Ye,{children:[o(Fe,{children:[t(a,{children:t(H,{inView:r,children:"Download"})}),t(a,{children:t(H,{inView:r,children:"investment"})}),t(a,{children:t(H,{inView:r,children:"mobile app"})}),o(Ge,{inView:r,children:[o(D,{children:[t(V,{}),o(R,{children:[t(j,{children:t("img",{src:qe,alt:""})}),t(j,{children:t("img",{src:Ke,alt:""})})]})]}),o(D,{children:[t(V,{}),o(R,{children:[t(j,{children:t("img",{src:Je,alt:""})}),t(j,{children:t("img",{src:Qe,alt:""})})]})]})]})]}),t(Xe,{inView:r,children:t(De,{children:o(Re,{children:[t("img",{src:Ze,alt:""}),t(Ve,{})]})})}),o(Ee,{inView:r,children:[t("h3",{children:"get in touch"}),o(Ne,{action:"/",children:[t(E,{type:"text",placeholder:"your name",required:!0}),t(E,{type:"text",placeholder:"your email",required:!0}),t(O,{width:"170px",backgroundColor:"#222b40",minHeight:"54px",textDistance:"30px",transformValue:"translateY(-150%)",children:"Submit"})]})]})]})})})},ei=e.section`
    position: relative;
    padding: 105px 80px 110px;
    color: #fefdf7;
`,N=e.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    opacity: 0;
    animation: ${({inView:i})=>i&&n`
            ${u} 1s linear forwards;
        `};
`,q=e.div`
    display: flex;
    max-width: 380px;
    justify-content: space-between;
    flex: 1;
    align-self: flex-start;
`,L=e.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
`,K=e.h4`
    margin-bottom: 32px;
`,J=e.ul`
    list-style-type: none;
    column-count: 2;
    column-gap: 60px;
    margin-bottom: 24px;
`,h=e.li`
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
`,ii=e.div`
    max-width: 210px;
    opacity: .8;
    color: #f8f6f1;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.02em;
`,b=e.a`
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
`,oi=e.div`
    display: flex;
    flex-direction: row;
`,ri=e.a`
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
`;var ni="/portfolio-3/assets/ico_soc-fb.28b85fce.svg",ai="/portfolio-3/assets/ico_soc-behance.baa833e6.svg",si="/portfolio-3/assets/ico_soc-in.d4c99a67.svg",li="/portfolio-3/assets/ico_soc-inst.1d8eea3e.svg",ci="/portfolio-3/assets/ico_soc-dribbble.edc97571.svg",di="/portfolio-3/assets/logo-copyright.0c8ae484.svg";const pi=()=>{const[i,r]=m({triggerOnce:!0,threshold:.3});return o(ei,{ref:i,children:[t(et,{}),o(x,{children:[o(N,{inView:r,children:[t(q,{children:t("a",{href:"/",children:t("img",{src:tt})})}),o(L,{children:[t(K,{children:"Website Map"}),o(J,{children:[t(h,{children:t(f,{href:"#Introduce",children:"Introduce"})}),t(h,{children:t(f,{href:"#Articles",children:"Articles"})}),t(h,{children:t(f,{href:"#Statistics",children:"Statistics"})}),t(h,{children:t(f,{href:"#Mobile-App",children:"Mobile-App"})})]})]}),o(L,{children:[t(K,{children:"Contact Us"}),o(J,{children:[t(h,{children:t("a",{href:"/",children:"www.helloWorld.org"})}),t(h,{children:t("a",{href:"/",children:"hello@world.org"})}),t(h,{children:t("a",{href:"/",children:"+8 555 748 7455"})}),t(h,{children:t("a",{href:"/",children:"Hello, World"})})]})]})]}),o(N,{inView:r,children:[t(q,{children:t(ii,{children:"Commission-free investing, plus all tools that you need."})}),t(L,{children:o(oi,{children:[t(b,{href:"/",children:t("img",{src:ni,alt:""})}),t(b,{href:"/",children:t("img",{src:ai,alt:""})}),t(b,{href:"/",children:t("img",{src:si,alt:""})}),t(b,{href:"/",children:t("img",{src:li,alt:""})}),t(b,{href:"/",children:t("img",{src:ci,alt:""})})]})}),t(L,{children:o(ri,{href:"/",children:[t("img",{src:di,alt:""}),t("div",{children:"2021 Halo Lab \xA9 All rights reserved"})]})})]})]})]})},hi=e.main`
    background-image: linear-gradient(130deg, #fefdf7 40%, #e8e4e1);
`;e.section`
    padding: 0 80px;
    position: relative;
`;function fi(){return o(zt,{children:[t(It,{}),o(hi,{children:[t(Gt,{}),t(Jt,{}),t(xe,{}),t(Oe,{}),t(ti,{}),t(pi,{})]})]})}nt.render(t(at.StrictMode,{children:t(fi,{})}),document.getElementById("root"));
