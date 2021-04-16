import React from 'react'
import styled from 'styled-components'
import { HeroSlice } from '../components/Slice'
import { PrimaryCard } from '../components/Project Card'
import { black, white } from '../colors'

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

    & > .heading {
        margin: 40px 12px 12px 12px;
        // margin: 40px 24px 12px 24px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: ${black.default};
        // border: 1px dotted orange;

        @media (min-width: 768px) {
            margin-left: 12px;
            margin-right: 0px;
            // border: 1px dashed blue;
        }
    }

    & > .card-list-wrapper {
        padding: 0px 0px 0px 12px;
        height: 220px;
        display: flex;
        align-items: center;
        // border: 2px dashed black;
        overflow: auto;
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
            <p className={'heading'}>{'Featured projects'}</p>
            <div className={'card-list-wrapper'}>
                <PrimaryCard 
                    heading={'Vaxx Overflow'}
                    body={'Eliminate wasted vaccine due to canceled appointments.'}
                    project={'project-one'}
                    buttonText={'View case study'}
                />

                <PrimaryCard 
                    heading={'Mentor Hub'}
                    body={'Eliminate wasted vaccine due to canceled appointments.'}
                    project={'project-one'}
                    buttonText={'View case study'}
                />

                <PrimaryCard 
                    heading={'V School Map'}
                    body={'Eliminate wasted vaccine due to canceled appointments.'}
                    project={'project-one'}
                    buttonText={'View case study'}
                />
            </div>
            
        </PageContainer>
    )
}
