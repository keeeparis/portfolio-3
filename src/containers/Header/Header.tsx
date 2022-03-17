import * as H from './styles'
import LogoIcon from '../../media/logo-full.svg'

const Header = () => {
    return (
        <H.Header>
            <H.Wrapper>
                <H.Inner>
                    <H.Content>
                        <H.Logo>
                            <a href="#">
                                <H.LogoImage src={LogoIcon} />
                            </a>
                        </H.Logo>

                        <H.NavWrapper>
                            <H.Navigation>
                                <H.NavLink href='#'>Introduce</H.NavLink>
                                <H.NavLink href='#'>Statistics</H.NavLink>
                                <H.NavLink href='#'>Articles</H.NavLink>
                                <H.NavLink href='#'>Mobile App</H.NavLink>
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
                </H.Inner>
            </H.Wrapper>
        </H.Header>
    )
}

export default Header