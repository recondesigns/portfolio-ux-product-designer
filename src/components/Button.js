import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    padding: ${props => props.padding};
    height: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #414141;
    border-radius: 4px;
    border: ${props => props.border};
    background: ${props => props.backgroundColor};
`

export default function Button(props) {
    const { buttonText, className, type } = props
    const {
        backgroundColor,
        border,
        padding
    } = setButtonType(type)
    
    function setButtonType(status) {
        if (status === 'secondary') {
            return {
                backgroundColor: '#FFFFFF',
                border: '2px solid #414141',
                padding: '0px 40px 0px 40px'
            }
        } else if (status === 'text') {
            return  {
                backgroundColor: 'none',
                border: 'none',
                padding: '0px 0px 0px 0px'
            }
        }
    }

    return  <StyledButton 
                className={className}
                backgroundColor={backgroundColor}
                border={border}
                padding={padding}
            >{buttonText}</StyledButton>
}
