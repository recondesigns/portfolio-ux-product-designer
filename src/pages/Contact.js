import React from 'react'
import styled from 'styled-components'

const ContactContainer = styled.div`
    height: 100%;
    padding: 0px 16px 0px 16px;
    background: lightgray;

    & > .title {
        margin: 0px;
        border: 1px solid red;
    }

    & > .body {
        margin: 0px;
        border: 1px solid green;
    }
`

export default function Contact() {
    return (
        <ContactContainer>
            <p className={'title'}>{'Contact Page'}</p>
            {/* <p className={'body'}>{'Some other text.'}</p> */}
        </ContactContainer>
    )
}
