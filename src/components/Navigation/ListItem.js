import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
    margin-top: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed pink;
`

export default function ListItem() {
    return (
        <ItemContainer>
            <p>Item</p>
        </ItemContainer>
    )
}
