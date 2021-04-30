import React from 'react'
import styled from 'styled-components'
import { black, white } from '../../colors/'
import sectionOneImage from '../../assets/images/vaccine-procces.png'



const SliceContainer = styled.div`
    box-sizing: border-box;
    padding: 40px 24px 40px 24px;
    height: auto;
    border: 1px solid blue;
    // border: 2px solid ${white.dark};

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
        min-height: 200px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        // background-image: url(${sectionOneImage});
        // background-position: contain;
        // background-size: cover;
        border: 1px dotted orange;

        & > img {
            // width: auto;

            @media (min-width: 768px) {
                height: 400px
                // border: 1px dotted blue; 
            }
        }
    }
`

export default function SliceOne(props) {
    const { 
        className,
        headingOne,
        headingTwo,
        bodyOne,
        bodyTwo,
        image
    } = props

    console.log(image)

    return (
        <SliceContainer className={className}>
            <p className={'header header-top'}>{headingOne}</p>
            <p className={'body body-top'}>{bodyOne}</p>
            <p className={'header header-bottom'}>{headingTwo}</p>
            <p className={'body body-bottom'}>{bodyTwo}</p>
            <div className={'image-wrapper'} backgroundImage={image}>
                <img src={image} alt={'preview'} />
            </div>
        </SliceContainer>
    )
}
