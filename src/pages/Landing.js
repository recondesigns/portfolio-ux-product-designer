import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'

const PageContainer = styled.div`
    height: 100%;
    padding: 0px 16px 0px 16px;
    background: #FEFEFE;

    & > .title {
        margin: 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 36px;
        display: flex;
        align-items: center;
        color: #414141;
        border: 1px solid red;
    }

    & > .body {
        margin: 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #414141;
        border: 1px solid green;
    }

    & > .heading {
        margin: 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #414141;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid orange;
    }

    & > .cards-wrapper {
        display: flex;
        gap: 20px;

        & > a {
            text-decoration: none;
        }
    }

    
`

export default function Landing() {
    return (
        <PageContainer>
            <p className={'title'}>{'Howdy. I am Stedman.'}</p>
            <p className={'body'}>{'I am a UX/Product Designer. I craft digital experiences with collaborative UX research & design methods.'}</p>
            <Button 
                type={'secondary'}
                buttonText={'Close menu'} 
                className={''}
            />

            <p className={'heading'}>{'Featured projects'}</p>
            <div className={'cards-wrapper'}>
                <Link to={'/vaxx-overflow'}>
                    <FeatureCard
                        title={'Vaxx Overflow'}
                        body={'Eliminate wasted vaccine due to canceled appointments.'}
                        textLink={'View case study'}
                    />
                </Link>

                <Link to={'/mentor-hub'}>
                    <FeatureCard
                        title={'Mentor Hub'}
                        body={'Eliminate wasted vaccine due to canceled appointments.'}
                        textLink={'View case study'}
                    />
                </Link>

                <Link to={'/op-veteran'}>
                    <FeatureCard
                        title={'OP Veteran'}
                        body={'Eliminate wasted vaccine due to canceled appointments.'}
                        textLink={'View case study'}
                    />
                </Link>
            </div>
            
        </PageContainer>
    )
}
