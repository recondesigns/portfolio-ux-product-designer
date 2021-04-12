import React from 'react'
import styled from 'styled-components'
import { black } from '../../colors'
import breadCrumbArrow from '../../assets/icons/breadcrumb-arrow.svg'

const BreadcrumbContainer = styled.div`
    box-sizing: border-box;
    margin: 0px 4px 0px 0px;
    position: relative;
    width: auto;
    height: 20px;
    // border: 1px dashed blue;

    & > div {
        display: flex;
        align-items: center;

        & > img {
            box-sizing: border-box;
            width: 16px;
            height: 16px;
            // border: 1px dotted orange;
        }
    
        & > p {
            box-sizing: border-box;
            margin: 0px;
            height: 20px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            display: flex;
            color: ${black.default};
            // border: 1px dotted orange;

            &:hover {
                font-weight: 500;
                // text-decoration: underline;
            }
        }
    }

    
`

export default function Breadcrumb(props) {
    const { label } = props
    return (
        <BreadcrumbContainer>
            <div>
                <img src={breadCrumbArrow} alt={'Breadcrumb arrow'} />
                <p>{label}</p>
            </div>
        </BreadcrumbContainer>
    )
}
