import * as I from './styles'
import graphIcon from '../../media/graph_invest-bg.svg'
import lineIcon from '../../media/hero_graph-line.svg'
import spinIcon from '../../media/circle-txt_learn.svg'

import { Inner, OverFlowHidden } from '../../styles'
import { useInView } from 'react-intersection-observer'

const Intro = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    return (
        <I.Wrapper ref={ref}>
            <I.IntroBackground />
            <Inner>
                <I.Container>
                    <I.ColumnOne>
                        <I.H3 inView={inView}>Your financial future</I.H3>
                        <I.Animation inView={inView}>
                            <I.SignUp>
                                <I.SignUpInput type="text" placeholder='Sign Up'/>
                                <I.SignUpButton href='#'></I.SignUpButton>
                            </I.SignUp>
                        </I.Animation>
                    </I.ColumnOne>
                    <I.ColumnTwo>
                        <I.HeadersWrap>
                            <OverFlowHidden>
                                <I.H1 inView={inView}>Personal 360<span>&deg;</span></I.H1>
                            </OverFlowHidden>
                            <OverFlowHidden>
                                <I.H1 inView={inView}>investments</I.H1>
                            </OverFlowHidden>
                            <OverFlowHidden>
                                <I.H1 inView={inView}>for everyone</I.H1>
                            </OverFlowHidden>
                        </I.HeadersWrap>
                        <I.GraphWrap>
                            <I.AnimationGraph inView={inView}>
                                <img src={graphIcon} alt="" />
                            </I.AnimationGraph>
                            <I.AnimationLine inView={inView}>
                                <img src={lineIcon} alt="" />
                            </I.AnimationLine>
                            <I.AnimationSpinner inView={inView}>
                                <img src={spinIcon} alt="" />
                            </I.AnimationSpinner>
                        </I.GraphWrap>
                    </I.ColumnTwo>
                </I.Container>
            </Inner>
        </I.Wrapper>
    )
}

export default Intro