import React from 'react'
import styled from 'styled-components'
import { HeroSlice } from '../components/Slice'
import { PrimaryCard } from '../components/Project Card'
import { white } from '../colors'

const PageContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: ${white.default};
    z-index: 1;
    overflow: scroll;
    // border: 1px dashed black;

    @media (min-width: 768px) {
        right: 24px;
        left: 260px;
    }
`

export default function LandingPage() {

    return (
        <PageContainer>
            <HeroSlice 
                className={'hero-slice'}
                heading={'Howdy. I am Stedman.'}
                body={'I am a UX/Product Designer. I craft digital experiences with collaborative UX research & design methods.'}
            />
        <PrimaryCard 
            heading={'Vaxx Overflow'}
            body={'Eliminate wasted vaccine due to canceled appointments.'}
            project={'project-one'}
            buttonText={'View case study'}
        />
        </PageContainer>
    )
}
