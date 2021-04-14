import React from 'react'
import styled from 'styled-components'
import { black } from '../../colors/black'

const SliceContainer = styled.div`
    box-sizing: border-box;
    padding: 40px 24px 40px 24px;
    height: auto;
    // background: lightgray;
    // border: 1px solid blue;

    @media (min-width: 768px) {
        padding: 56px 280px 56px 280px;
        border-radius: 4px;
    }

    & > .header {
        box-sizing: border-box;
        margin: 0px 0px 8px 0px;
        width: auto;
        height: 24px;
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
        margin: 0px 0px 40px 0px;
        width: 100%;
        height: auto;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: ${black.default};
        // border: 1px dotted orange;
    }

    & > .body-bottom {
        margin-bottom: 12px;
    }

    & > .image-wrapper {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        // border: 1px dotted orange;

        & > img {
            height: 200px;
        }
    }
`

export default function SliceOne(props) {
    const { 
        className,
        headingOne,
        bodyOne,
        image
    } = props

    return (
        <SliceContainer className={className}>
            <p className={'header header-top'}>{headingOne}</p>
            <p className={'body body-top'}>{bodyOne}</p>
            <p className={'header header-bottom'}>{headingOne}</p>
            <p className={'body body-bottom'}>{bodyOne}</p>
            <div className={'image-wrapper'}>
                {/* <p>Image</p> */}
                <img src={image} alt={'preview image'} />
            </div>
        </SliceContainer>
    )
}
