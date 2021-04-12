import React from 'react'
import styled from 'styled-components'
import { black } from '../colors'

const SectionContainer = styled.div`
    // width: 100%;
    // height: 360px;
    // background: lightgrey;

    & > .heading {
        position: absolute;
        height: 24px;
        left: 24px;
        right: 108px;
        top: 60px;
        margin: 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        // display: flex;
        // align-items: center;
        color: ${black.default};
        // border: 1px dotted orange;
    }

    & > .body {
        box-sizing: border-box;
        position: absolute;
        margin: 0px;
        height: 60px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: ${black.default};
        // border: 1px dotted orange;
    }

    & > .p1 {
        top: 96px;
        left: 24px;
        right: 108px;
    }

    & > .p2 {
        top: 168px;
        left: 24px;
        right: 108px;
    }

    & > .p3 {
        top: 240px;
        left: 24px;
        right: 108px;
    }

    & > img {
        position: absolute;
        top: calc(50% - 300px/2);
        right: -68px;
        height: 300px;
        // border: 1px dotted orange;
    }
`

export default function Section1(props) {
    const { 
        className, 
        heading, 
        p1,
        p2,
        p3,
        image,
        altText
    } = props

    return (
        <SectionContainer className={className}>
            <p className={'heading'}>{heading}</p>
            <p className={'body p1'}>{p1}</p>
            <p className={'body p2'}>{p2}</p>
            <p className={'body p3'}>{p3}</p>
            <img src={image} alt={altText} />
        </SectionContainer>
    )
}
