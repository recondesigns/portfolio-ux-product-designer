import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    border: 2px dashed black;
`

export default function PrimaryCard() {
    return (
        <CardContainer>
            <p>Card</p>
        </CardContainer>
    )
}
