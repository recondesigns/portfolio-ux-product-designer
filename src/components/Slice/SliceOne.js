import React from 'react'
import styled from 'styled-components'
import { black } from '../../colors'

const SliceContainer = styled.div`
    padding: 40px 24px 40px 24px;
    // height: 300px;
    height: auto;
    border: 1px dashed black;

    & > .heading {
        margin: 0px;
        // width: 328px;
        height: 24px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: ${black.default};
        border: 1px dotted orange;
    }

    & > .heading-top {
        margin-bottom: 8px;
    }

    & > .heading-bottom {
        margin-top: 40px;
        margin-bottom: 8px;
    }

    & > .body {
        margin: 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: ${black.default};
        border: 1px dotted orange;
    }

    & > .body-bottom {
        margin: 8px 0px 12px 0px;
    }

    & > .image-wrapper {
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px dotted orange;
    }
`

export default function SliceOne(props) {
    const bodyMessage = 'Snackmagic is a snackbox gifting service. It allows individuals to place orders which then the recipients can customize their orders by following a link to the Snackmagic site. After launching in April 2020, we were experiencing a high drop-off rate in the checkout flow.'
    const { className } = props

    return (
        <SliceContainer className={className}>
            <p className={'heading heading-top'}>Heading</p>
            <p className={'body body-top'}>{bodyMessage}</p>
            <p className={'heading heading-bottom'}>Heading</p>
            <p className={'body body-bottom'}>{bodyMessage}</p>
            <div className={'image-wrapper'}>
                <p>Image</p>
            </div>
        </SliceContainer>
    )
}
