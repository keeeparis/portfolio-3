import { Inner } from '../../styles'
import { IntroBackground } from '../Intro/styles'
import * as F from './styles'
import LogoIcon from '../../media/logo-full.svg'
import { NavLink } from '../Header/styles'
import { useInView } from 'react-intersection-observer'
import icoFacebook from '../../media/ico_soc-fb.svg'
import icoBehance from '../../media/ico_soc-behance.svg'
import icoLinked from '../../media/ico_soc-in.svg'
import icoInstagram from '../../media/ico_soc-inst.svg'
import icoDribble from '../../media/ico_soc-dribbble.svg'
import iconCopyright from '../../media/logo-copyright.svg'

const Footer = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    })

    return (
        <F.Wrapper ref={ref}>
            <IntroBackground />
            <Inner>
                <F.Row inView={inView}>
                    <F.LogoWrap>
                        <a href="/"><img src={LogoIcon} /></a>
                    </F.LogoWrap>
                    <F.Col>
                        <F.H4>Website Map</F.H4>
                        <F.UL>
                            <F.LI><NavLink href='#Introduce'>Introduce</NavLink></F.LI>
                            <F.LI><NavLink href='#Articles'>Articles</NavLink></F.LI>
                            <F.LI><NavLink href='#Statistics'>Statistics</NavLink></F.LI>
                            <F.LI><NavLink href='#Mobile-App'>Mobile-App</NavLink></F.LI>
                        </F.UL>
                    </F.Col>
                    <F.Col>
                        <F.H4>Contact Us</F.H4>
                        <F.UL>
                            <F.LI><a href='/'>www.helloWorld.org</a></F.LI>
                            <F.LI><a href='/'>hello@world.org</a></F.LI>
                            <F.LI><a href='/'>+8 555 748 7455</a></F.LI>
                            <F.LI><a href='/'>Hello, World</a></F.LI>
                        </F.UL>
                    </F.Col>
                </F.Row>

                <F.Row inView={inView}>
                    <F.LogoWrap>
                        <F.UnderLogoDiv>
                            Commission-free investing, plus all tools that you need.
                        </F.UnderLogoDiv>
                    </F.LogoWrap>
                    <F.Col>
                        <F.SocialWrap>
                            <F.IconWrap href="/"><img src={icoFacebook} alt="" /></F.IconWrap>
                            <F.IconWrap href="/"><img src={icoBehance} alt="" /></F.IconWrap>
                            <F.IconWrap href="/"><img src={icoLinked} alt="" /></F.IconWrap>
                            <F.IconWrap href="/"><img src={icoInstagram} alt="" /></F.IconWrap>
                            <F.IconWrap href="/"><img src={icoDribble} alt="" /></F.IconWrap>
                        </F.SocialWrap>
                    </F.Col>
                    <F.Col>
                        <F.CopyrightLink href="/">
                            <img src={iconCopyright} alt="" />
                            <div>2021 Halo Lab © All rights reserved</div>
                        </F.CopyrightLink>
                    </F.Col>
                </F.Row>
            </Inner>
        </F.Wrapper>
    )
}

export default Footer