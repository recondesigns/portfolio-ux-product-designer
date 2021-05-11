import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'

const PageContainer = styled.div`
    height: 100%;
    padding: 64px 16px 0px 16px;
    background: #FEFEFE;

    @media (min-width: 768px) {
        padding: 48px 16px 0px 16px;
    }

    & > .title {
        margin: 0px 0px 8px 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 36px;
        display: flex;
        align-items: center;
        color: #414141;
        // border: 1px solid red;

        @media (min-width: 768px) {
            margin: 0px 0px 12px 0px;
            width: 566px;
            font-size: 44px;
            line-height: 48px;
        }
    }

    & > .body {
        margin: 0px 0px 40px 0px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #414141;
        // border: 1px solid green;

        @media (min-width: 768px) {
            width: 686px;
            font-size: 20px;
            line-height: 24px;
        }
    }

    & > .heading {
        margin: 84px 0px 20px 0px;
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
        // border: 1px solid orange;

        @media (min-width: 768px) {
            margin: 64px 0px 20px 0px;
            justify-content: flex-start;
        }
    }

    & > .cards-wrapper {
        display: flex;
        flex-direction: column;
        // gap: 20px;

        @media (min-width: 768px) {
            flex-direction: row;
        }
 
        & > a {
            text-decoration: none;
        }

        & > .first-card {
            margin: 0px 0px 20px 0px;

            @media (min-width: 768px) {
                margin: 0px 20px 0px 0px;
                // border: 2px solid red;
            }
        }

        & > .second-card {
            margin: 0px 0px 20px 0px;

            @media (min-width: 768px) {
                margin: 0px 20px 0px 0px;
                // border: 2px solid red;
            }
        }

        & > .third-card {
            margin: 0px 0px 20px 0px;

            @media (min-width: 768px) {
                margin: 0px 0px 0px 0px;
                // border: 2px solid red;
            }
        }
    }
`

export default function Landing() {
    return (
        <PageContainer>
            <p className={'title'}>{'Howdy. I am Stedman.'}</p>
            <p className={'body'}>
                {
                    `I am a UX/Product Designer.
                    I craft digital experiences with collaborative UX research & design methods.`
                }
            </p>
            <Button 
                type={'secondary'}
                buttonText={'Contact me'} 
                className={''}
            />

            <p className={'heading'}>{'Featured projects'}</p>
            <div className={'cards-wrapper'}>
                <Link to={'/vaxx-overflow'} className={'first-card'}>
                    <FeatureCard
                        title={'Vaxx Overflow'}
                        body={'Eliminate wasted vaccine due to canceled appointments.'}
                        textLink={'View case study'}
                    />
                </Link>

                <Link to={'/mentor-hub'} className={'second-card'}>
                    <FeatureCard
                        title={'Mentor Hub'}
                        body={'Eliminate wasted vaccine due to canceled appointments.'}
                        textLink={'View case study'}
                    />
                </Link>

                <Link to={'/op-veteran'} className={'third-card'}>
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
