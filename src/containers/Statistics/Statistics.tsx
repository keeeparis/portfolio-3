import { useInView } from 'react-intersection-observer'

import Button from '../../components/Button'
import GraphColumn from '../../components/GraphColumn'
import * as S from './styles'

import { Inner, OverFlowHidden } from '../../styles'

const mockData = [
    {h: '20M+', t: 'People who are joined Personal Investments'},
    {h: '5 900+', t: 'Interested people use Personal investment'},
    {h: '50+', t: 'We cooperate with famous companies'}
]

const Statistics = () => {
    const [ref, inView] = useInView({ 
        triggerOnce: true,
        threshold: 0.5,
    })

    return (
        <S.Wrapper ref={ref} id='Statistics'>
            <Inner>
                <S.DisplayFlex>
                    <S.Column1>
                        <GraphColumn inView={inView} />
                        <S.Columns>
                            {mockData.map(data => 
                                <S.DataColumn key={data.h}>
                                    <OverFlowHidden>
                                        <S.H3 inView={inView}>{data.h}</S.H3>
                                    </OverFlowHidden>
                                    <S.P inView={inView}>{data.t}</S.P>
                                </S.DataColumn>    
                            )}
                        </S.Columns>
                    </S.Column1>
                    <S.Column2>
                        <OverFlowHidden>
                            <S.H2 inView={inView}>Оur growth</S.H2>
                        </OverFlowHidden>
                        <OverFlowHidden>
                            <S.H2 inView={inView}>over the years</S.H2>
                        </OverFlowHidden>

                        <S.P inView={inView}>Customize your portfolio with pieces of different companies and funds to help reduce risk and raise the chances.</S.P>

                        <S.ButtonWrapper inView={inView}>
                            <Button
                                width='170px'
                                minHeight='56px'
                                backgroundColor='#222b40'
                                padding='0'
                                textDistance='30px'
                                transformValue='translateY(-150%)'
                            >Learn more</Button>
                        </S.ButtonWrapper>
                    </S.Column2>
                </S.DisplayFlex>
            </Inner>
        </S.Wrapper>
    )
}

export default Statistics