import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.p`
    box-sizing: border-box;
    width: 164px;
    height: 36px;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize};
    line-height: 24px;
    color: #414141;
    border-radius: 4px;
    background: white;
    cursor: pointer;
    // border: 1px dotted orange;

    &:hover {
        border: 2px solid #E3FCE3;
    }

    &:active {
        background: #FAFAFA;
        border: 2px solid #60BF60;
    }
`

export default function ListItem(props) {
    const { type, className, text } = props
    const { fontWeight, fontSize } = setItemStyling(type)

    function setItemStyling(status) {
        if (status === 'default') {
            return {
                fontWeight: '500',
                fontSize: '18px',
            }
        } else if (status === 'sub') {
            return {
                fontWeight: '400',
                fontSize: '16px',
            }
        }
    }

    return  <StyledItem 
                className={className}
                fontWeight={fontWeight}
                fontSize={fontSize}
            >
                {text}
            </StyledItem>
}
