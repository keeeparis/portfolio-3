import { FC } from 'react'
import * as B from './styles'

const Button:FC<{
    width?: string;
    minHeight?: string;
    backgroundColor?: string;
    padding?: string;
    textDistance?: string;
    transformValue?: string;
}> = ({ 
    children, 
    width, 
    minHeight, 
    backgroundColor, 
    padding, 
    textDistance, 
    transformValue 
}) => {
    return (
        <B.Button 
            style={{
                width,
                minHeight,
                backgroundColor,
                padding
            }}
            transformValue={transformValue}
        >
            <B.HoverBackground />
            <B.TextWrapper>
                <B.Text textDistance={textDistance}>{children}</B.Text>
                <B.Text textDistance={textDistance}>{children}</B.Text>
            </B.TextWrapper>
        </B.Button>
    )
}

export default Button