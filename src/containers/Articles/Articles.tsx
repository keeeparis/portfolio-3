import { useInView } from 'react-intersection-observer'
import * as A from './styles'
import ArrowIcon from '../../media/arrow-btn.svg'
import AvatarIcon from '../../media/read_ava.jpg'
import Stat1 from '../../media/articles_stat-date.svg'
import Stat2 from '../../media/articles_stat-lines.svg'
import spinIcon from '../../media/circle-txt_learn.svg'
import ChartFull from '../../media/read_chart.svg'
import ChartPart from '../../media/read_chart-part.svg'

import { Inner, OverFlowHidden } from '../../styles'
import { AnimationSpinner } from '../Intro/styles'

const Articles = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    })

    return (
        <A.Wrapper ref={ref} id='Articles'>
            <A.Background />
            <Inner>
                <OverFlowHidden>
                    <A.H2 inView={inView}>Read our interesting</A.H2>
                </OverFlowHidden>
                <OverFlowHidden>
                    <A.H2 inView={inView}>articles about investments</A.H2>
                </OverFlowHidden>

                <A.ArticlesGrid>

                    <A.Container>
                        <A.AnimationDiv1 inView={inView}>
                            <A.Card>
                                <A.OverTitle>
                                    <span>&nbsp;</span>
                                    Explore expert videos
                                </A.OverTitle>
                                <A.Title pink>
                                    User benefits of the Investments Personal 360°
                                </A.Title>
                                <A.Bottom>
                                    <A.BottomText>Play video for more</A.BottomText>
                                    <A.ArticleButton>
                                        <OverFlowHidden>
                                            <A.ArrowIconWrap black>
                                                <img src={ArrowIcon} alt="" />
                                                <img src={ArrowIcon} alt="" />
                                            </A.ArrowIconWrap>
                                        </OverFlowHidden>
                                    </A.ArticleButton>
                                </A.Bottom>
                                <A.Avatar inView={inView}>
                                    <img src={AvatarIcon} alt="" />
                                </A.Avatar>
                            </A.Card>
                        </A.AnimationDiv1>
                    </A.Container>

                    <A.Container>
                        <A.AnimationDiv1 inView={inView}>
                            <A.Card>
                                <A.OverTitle black>
                                    <span>&nbsp;</span>
                                    Explore expert videos
                                </A.OverTitle>

                                <A.Title>
                                    Growth of the most popular stocks in 2022
                                </A.Title>
                                <A.Bottom>
                                    <A.BottomText>Swipe right for more</A.BottomText>
                                    <A.ArticleButton color='#222b40'>
                                        <OverFlowHidden>
                                            <A.ArrowIconWrap>
                                                <img src={ArrowIcon} alt="" />
                                                <img src={ArrowIcon} alt="" />
                                            </A.ArrowIconWrap>
                                        </OverFlowHidden>
                                    </A.ArticleButton>
                                </A.Bottom>
                                <A.Stats inView={inView}>
                                    <img src={Stat1} alt="" />
                                    <OverFlowHidden>
                                        <img src={Stat2} alt="" />
                                    </OverFlowHidden>
                                </A.Stats>
                            </A.Card>
                        </A.AnimationDiv1>
                    </A.Container>

                    <A.Container>
                        <A.AnimationDiv2 inView={inView}>
                            <A.Card graph>
                                <A.OverTitle>
                                    <span>&nbsp;</span>
                                    Explore expert videos
                                </A.OverTitle>

                                <A.Title pink>
                                    Measure your portfolio value correctly
                                </A.Title>

                                <A.Bottom>
                                    <A.BottomText>Play video for more</A.BottomText>
                                    <A.ArticleButton>
                                        <OverFlowHidden>
                                            <A.ArrowIconWrap black>
                                                <img src={ArrowIcon} alt="" />
                                                <img src={ArrowIcon} alt="" />
                                            </A.ArrowIconWrap>
                                        </OverFlowHidden>
                                    </A.ArticleButton>
                                </A.Bottom>

                                <A.GraphLineWrap>
                                    <A.GraphLine inView={inView} />
                                    <AnimationSpinner inView={inView}>
                                        <img src={spinIcon} alt="" />
                                    </AnimationSpinner>
                                </A.GraphLineWrap>
                            </A.Card>
                        </A.AnimationDiv2>
                    </A.Container>

                    <A.Container>
                        <A.AnimationDiv2 inView={inView}>
                            <A.Card>
                                <A.OverTitle black>
                                    <span>&nbsp;</span>
                                    Explore expert videos
                                </A.OverTitle>

                                <A.Title4>
                                    <A.DollarSign>&nbsp;</A.DollarSign>
                                    View useful statistics on famous stocks
                                </A.Title4>

                                <A.Bottom>
                                    <A.BottomText>
                                        <A.P>
                                        Read our article and choose how much you invest in a stock. We will convert it from dollars into fractions of a whole stock.
                                        </A.P>
                                    </A.BottomText>
                                    <A.ArticleButton color='#583bac'>
                                        <OverFlowHidden>
                                            <A.ArrowIconWrap>
                                                <img src={ArrowIcon} alt="" />
                                                <img src={ArrowIcon} alt="" />
                                            </A.ArrowIconWrap>
                                        </OverFlowHidden>
                                    </A.ArticleButton>
                                </A.Bottom>
                                <A.ChartWrap>
                                    <img src={ChartFull} alt="" />
                                    <img src={ChartPart} alt="" />
                                </A.ChartWrap>
                            </A.Card>
                        </A.AnimationDiv2>
                    </A.Container>
                </A.ArticlesGrid>
            </Inner>
        </A.Wrapper>
    )
}

export default Articles