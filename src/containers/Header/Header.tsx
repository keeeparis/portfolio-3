import * as H from './styles'
import LogoIcon from '../../media/logo-full.svg'
import { Inner } from '../../styles'
import { useInView } from 'react-intersection-observer'

const Header = () => {
    const [ref, inView] = useInView({
        triggerOnce: true
    })
    return (
        <H.Header ref={ref}>
            <H.Wrapper>
                <Inner>
                    <H.Content inView={inView}>
                        <H.Logo>
                            <a href="/">
                                <H.LogoImage src={LogoIcon} />
                            </a>
                        </H.Logo>

                        <H.NavWrapper>
                            <H.Navigation>
                                <H.NavLink href='#Introduce'>Introduce</H.NavLink>
                                <H.NavLink href='#Statistics'>Statistics</H.NavLink>
                                <H.NavLink href='#Articles'>Articles</H.NavLink>
                                <H.NavLink href='#Mobile-App'>Mobile App</H.NavLink>
                            </H.Navigation>
                        </H.NavWrapper>

                        <H.SignIn>
                            <H.HoverBackground />
                            <H.Text>
                                <H.SignInText>Sign In</H.SignInText>
                                <H.SignInText>Sign In</H.SignInText>
                            </H.Text>
                        </H.SignIn>
                    </H.Content>
                </Inner>
            </H.Wrapper>
        </H.Header>
    )
}

export default Header