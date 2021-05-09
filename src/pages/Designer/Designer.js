import React from 'react'
import styled from "styled-components";
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Overview from './Overview'


const DesignerPage = styled.div`
    height: 100%;
    padding: 0px 16px 0px 16px;
    background: #ee5622;

    & > p {
        margin: 0px;
        border: 1px solid white;
    }

    & > .switch-wrapper {
        height: 100%;
        background: lightblue;
    }
`

export default function Designer() {
    let { path, url } = useRouteMatch()

    return (
        <DesignerPage>
            {/* <p>Designer page</p> */}
            <div className={'switch-wrapper'}>
                <Switch>
                    <Route exact path={path}>
                        <Overview />
                    </Route>

                    <Route path={'/vaxx-overflow-project'}>
                        <Overview />
                    </Route>

                </Switch>
            </div>
        </DesignerPage>
    )
}
