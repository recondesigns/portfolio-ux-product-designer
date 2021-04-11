import React from 'react'
import styled from 'styled-components'

const BreadcrumbContainer = styled.div`
    border: 1px dashed blue;
`

export default function Breadcrumb() {
    return (
        <BreadcrumbContainer>
            <p>Bread</p>
        </BreadcrumbContainer>
    )
}
