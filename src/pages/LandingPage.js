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
    bottom: 0px;
    // bottom: 20px;
    // bottom: 0px;
    // min-height: 100%;
    // min-height: 100%;
    // height: 100%;
    // height: 100%;
    // min-height: 100%;
    // background: ${white.default};
    // background: red;
    z-index: 1;
    overflow: scroll;
    // border: 1px dashed black;

    @media (min-width: 768px) {
        // background: red;
        left: 260px;
        // margin-top: 20px;
    }

    & > .first-slice {
        background: ${white.default};
    }

    & > .second-slice {
        background: ${white.dark};
    }

    & > .third-slice {
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

            <SliceOne 
                className={'second-slice'}
                headingOne={sliceOneInfo.headingOneText}
                bodyOne={sliceOneInfo.bodyOneText}
                headingTwo={sliceOneInfo.headingTwoText}
                bodyTwo={sliceOneInfo.bodyTwoText}
                image={sliceOneInfo.image}
            />

            <SliceOne 
                className={'third-slice'}
                headingOne={sliceOneInfo.headingOneText}
                bodyOne={sliceOneInfo.bodyOneText}
                headingTwo={sliceOneInfo.headingTwoText}
                bodyTwo={sliceOneInfo.bodyTwoText}
                image={sliceOneInfo.image}
            />
        </PageContainer>
    )
}
