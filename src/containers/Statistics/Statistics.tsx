import { useInView } from 'react-intersection-observer'
import { Inner } from '../../styles'
import * as S from './styles'

const Statistics = () => {
    const [ref, inView] = useInView({ 
        triggerOnce: true
    })
    
    return (
        <S.Wrapper>
            <Inner>
                <S.DisplayFlex>
                    Statistics
                </S.DisplayFlex>
            </Inner>
        </S.Wrapper>
    )
}

export default Statistics