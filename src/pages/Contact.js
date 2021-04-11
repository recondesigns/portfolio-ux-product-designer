import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    width: 100%;
    border: 1px solid orange;
`

export default function Contact() {
    return (
        <PageContainer>
            <p>Contact Page</p>
        </PageContainer>
    )
}
