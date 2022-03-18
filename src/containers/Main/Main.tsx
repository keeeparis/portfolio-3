import { Inner } from '../Header/styles'
import * as M from './styles'
import graphIcon from '../../media/graph_invest-bg.svg'
import lineIcon from '../../media/hero_graph-line.svg'
import spinIcon from '../../media/circle-txt_learn.svg'

const Main = () => {
    return (
        <M.Main>
            <M.Intro>
                <M.IntroBackground />
                <Inner>
                    <M.Container>
                        <M.ColumnOne>
                            <M.H3>Your financial future</M.H3>
                            <M.SignUp>
                                <M.SignUpInput type="text" placeholder='Sign Up'/>
                                <M.SignUpButton href='#'></M.SignUpButton>
                            </M.SignUp>
                        </M.ColumnOne>
                        <M.ColumnTwo>
                            <M.HeadersWrap>
                                <M.H1>Personal 360<span>&deg;</span></M.H1>
                                <M.H1>investments</M.H1>
                                <M.H1>for everyone</M.H1>
                            </M.HeadersWrap>
                            <M.GraphWrap>
                                <img src={graphIcon} alt="" />
                                <img src={lineIcon} alt="" />
                                <img src={spinIcon} alt="" />
                            </M.GraphWrap>
                        </M.ColumnTwo>
                    </M.Container>
                </Inner>
            </M.Intro>

            <M.Section></M.Section>
            <M.Section></M.Section>
            <M.Section></M.Section>
        </M.Main>
    )
}

export default Main