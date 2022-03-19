import { FC } from 'react'
import { inViewProp } from '../../types'
import * as G from './styles'

const graphdata = ['20 000', '40 000', '10 000', '30 000', '20 000', '30 000', '40 000']

const GraphColumn:FC<inViewProp> = ({ inView }) => {
    return (
        <G.GraphWrap>
            <G.GraphImage inView={inView} />
            {graphdata.map((element, i) => 
                <G.EachColumn key={i+1} inView={inView}>
                    <G.BackgroundOnHover />
                    <G.TextOnHover>
                        &#36; {element}k
                    </G.TextOnHover>
                </G.EachColumn>
            )}
        </G.GraphWrap>
    )
}

export default GraphColumn