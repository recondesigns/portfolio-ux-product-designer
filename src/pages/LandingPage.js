import React from 'react'
import styled from 'styled-components'
import { Breadcrumb } from '../components/Breadcrumb'
import { white } from '../colors/white'

const PageContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background: ${white.default};
    border: 1px solid orange;
    z-index: 1;
`

export default function LandingPage() {
    return (
        <PageContainer>
            <p>Landing page</p>
            <Breadcrumb />
        </PageContainer>
    )
}
