import React from 'react'
import styled from 'styled-components'
import { Breadcrumb } from '../components/Breadcrumb'

const PageContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    border: 1px solid orange;
    z-index: 0;
`

export default function LandingPage() {
    return (
        <PageContainer>
            <Breadcrumb />
        </PageContainer>
    )
}
