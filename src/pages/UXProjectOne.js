import React from 'react'
import styled from 'styled-components'
import { sectionInfo } from '../projectInfo'
import { SliceOne } from '../components/Slice'
import PageHeader from '../components/PageHeader'
import { white } from '../colors/white'

const PageContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow: scroll;
    background: ${white.default};
    z-index: 1;
    // border: 1px solid orange;

    & > .first-slice {
        background: ${white.default};
    }

    & > .second-slice {
        background: ${white.default};
    }

    & > .third-slice {
        background: ${white.default};
    }
`

export default function ProjectOne() {
    const { sectionOne } = sectionInfo.vaxxOverflow
    const sliceOneInfo = {...sectionOne}
    const {
        name,
        headingOneText,
        bodyOneText,
        headingTwoText,
        bodyTwoText,
        image
    } = sliceOneInfo

    return (
        <PageContainer>
            <PageHeader 
                heading={name}
                controlOne={{iconOne: 'figma', labelOne: 'View on Figma'}}
                controlTwo={{iconTwo: 'github', labelTwo: 'View on GitHub'}}
            />

            <SliceOne 
                className={'first-slice'}
                headingOne={headingOneText}
                bodyOne={bodyOneText}
                headingTwo={headingTwoText}
                bodyTwo={bodyTwoText}
                image={image}
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
