import React from 'react'
import styled from 'styled-components'
import { sectionInfo } from '../projectInfo'
import PageHeader from '../components/PageHeader'
import { SliceOne } from '../components/Slice'
import { black, white } from '../colors'

const PageContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    // min-height: 100%;
    // height: auto;
    background: ${white.default};
    z-index: 1;
    border: 1px dashed black;

    // @media (min-width: 768px) {
    //     color: red;
    //     left: 260px;
    //     margin-top: 20px;
    // }

    & > .first-slice {
        background: ${white.default};
    }
`

export default function LandingPage() {
    const { sectionOne } = sectionInfo.vaxxOverflow
    const sliceOneInfo = {...sectionOne}

    console.log(sliceOneInfo)

    return (
        <PageContainer>
            <PageHeader 
                heading={sliceOneInfo.name}
                controlOne={{iconOne: 'figma', labelOne: 'View on Figma'}}
                controlTwo={{iconTwo: 'github', labelTwo: 'View on GitHub'}}
            />
            <SliceOne 
                className={'first-slice'}
                headingOne={sliceOneInfo.headingOneText}
                bodyOne={sliceOneInfo.bodyOneText}
                headingTwo={sliceOneInfo.headingTwoText}
                bodyTwo={sliceOneInfo.bodyTwoText}
                image={sliceOneInfo.image}
            />
        </PageContainer>
    )
}
