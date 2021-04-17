import React from 'react'
import styled from 'styled-components'
import figmaIcon from '../assets/icons/figma-icon.svg'
import githubIcon from '../assets/icons/github-icon.svg'
import linkIcon from '../assets/icons/link-icon.svg'
import { black } from '../colors'

const ControlContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    // border: 1px dashed blue;

    & > img {
        box-sizing: border-box;
        margin: 0px 4px 0px 0px;
        height: 20px;
        width: 20px;
        // border: 1px dotted orange;
    }

    & > a {
        box-sizing: border-box;
        margin: 0px;
        height: 20px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: ${black.default};
        text-decoration: none;
        // border: 1px dotted orange;

        @media (min-width: 768px) {
            font-size: 18px;
        }
    }
`

export default function PageControls(props) {
    // let figmaLink = 'https://www.figma.com/proto/JhhHkIswpe0EzcVcVtzB7A/VaxxOverflow?page-id=188%3A4407&node-id=188%3A4408&viewport=655%2C467%2C0.2958570718765259&scaling=scale-down'
    const { label, icon, className, controlLink } = props

    function setIcon() {
        if (icon === 'figma') {
            return figmaIcon
        } else if (icon === 'github') {
            return githubIcon
        } else if (icon === 'link') {
            return linkIcon
        }
    }

    let controlIcon = setIcon()
    
    return (
        <ControlContainer className={className}>
            <img src={controlIcon} alt={label} />
            <a className={'external-link'} href={controlLink} target={'_blank'} rel={'noreferrer'}>{label}</a>
            {/* <p className={'control-label'}>{label}</p> */}
        </ControlContainer>
    )
}
