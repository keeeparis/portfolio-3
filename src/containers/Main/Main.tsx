import { Inner } from '../Header/styles'
import * as M from './styles'
import graphIcon from '../../media/graph_invest-bg.svg'
import lineIcon from '../../media/hero_graph-line.svg'

const Main = () => {
    return (
        <M.Main>
            <M.Intro>
                <M.IntroBackground />
                <Inner>
                    <M.Container>
                        <M.Column>
                            <M.H3>Your financial future</M.H3>
                        </M.Column>
                        <M.Column>
                            <M.H1>Personal 360 investments for everyone</M.H1>
                            <M.GraphWrap>
                                <img src={graphIcon} alt="" />
                                <img src={lineIcon} alt="" />
                            </M.GraphWrap>
                        </M.Column>
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