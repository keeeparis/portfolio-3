import { useInView } from 'react-intersection-observer'

import * as I from './styles'
import cubes1Icon from '../../media/illustr_cubes-01.svg'
import cubes2Icon from '../../media/illustr_cubes-02.svg'
import avatarIcon from '../../media/introducing-ava.jpg'
import playTriangle from '../../media/play-triangle.svg'

import { Inner, OverFlowHidden } from '../../styles'

const Introduce = () => {
    const [ref, inView] = useInView({ 
        triggerOnce: true, 
        threshold: 0.75,
    })
    
    return (
        <I.Wrapper>
            <Inner>
                <I.Columns ref={ref}>
                    <I.Column>
                        <I.ImageWrapper inView={inView}>
                            <img src={avatarIcon} alt="" loading='lazy' />
                            <I.PlayButton>
                                <img src={playTriangle} alt="" loading='lazy' />
                                <div></div>
                            </I.PlayButton>
                        </I.ImageWrapper>
                        <OverFlowHidden>
                            <I.H3 inView={inView}>introducing</I.H3>
                        </OverFlowHidden>
                        <OverFlowHidden>
                            <I.H3 inView={inView}>fractional</I.H3>
                        </OverFlowHidden>
                        <OverFlowHidden>
                            <I.H3 inView={inView}>shares</I.H3>
                        </OverFlowHidden>
                    </I.Column>
                    <I.ColumnCubics inView={inView}>
                        <img src={cubes1Icon} alt="" loading='lazy' />
                        <h4>invest any amount</h4>
                        <p>Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.</p>
                    </I.ColumnCubics>
                    <I.ColumnCubics inView={inView}>
                        <img src={cubes2Icon} alt="" loading='lazy' />
                        <h4>build a balanced portfolio</h4>
                        <p>Customize your portfolio with pieces of different companies and funds to help reduce risk.</p>
                    </I.ColumnCubics>
                </I.Columns>
            </Inner>
        </I.Wrapper>
    )
}

export default Introduce