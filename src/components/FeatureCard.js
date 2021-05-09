import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    background: #414141;
    border: 2px dashed white;
`

export default function FeatureCard() {
    return (
        <CardContainer>
            <p>
                Card
            </p>
        </CardContainer>
    )
}
