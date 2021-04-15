import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppState'
// import hamburgerClosedIcon from '../../assets/icons/hamburger-closed.svg'
import { black, white, green } from '../../colors/'

const NavigationContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 96px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding: 68px 24px 0px 24px;
    background: ${white.default};
    display: ${props => props.display};
    z-index: 2;
    // border: 1px dotted red;

    @media (min-width: 768px) {
        display: block;
        width: 236px;
    }

    // & > img {
    //     position: absolute;
    //     top: 20px;
    //     left: 24px;    
    //     border: 1px solid orange;
    // }
    
    // & > .label {
    //     margin: 0px;
    //     width: 100%;
    //     font-family: Roboto;
    //     font-style: normal;
    //     font-weight: 500;
    //     font-size: 18px;
    //     line-height: 24px;
    //     color: ${black.default};
    //     border: 1px dotted orange;
    // }

    // & > .home-link {
    //     color: red;
    // }

    // & > .label-ux {
    //     position: absolute;
    //     height: 24px;
    //     left: 24px;
    //     right: 24px;
    //     top: 68px;
    // }

    // & > .label-dev {
    //     position: absolute;
    //     height: 24px;
    //     left: 24px;
    //     right: 24px;
    //     top: 188px;
    // }

    // & > a {
    //     font-family: Roboto;
    //     font-style: normal;
    //     font-weight: 400;
    //     font-size: 16px;
    //     line-height: 24px;
    //     display: flex;
    //     align-items: center;
    //     color: ${black.default};
    //     text-decoration: none;
    //     border: 1px dotted orange;

    //     &:hover {
    //         font-weight: 500;
    //         text-decoration: underline;
    //     }
    // }

    // & > .ux-project-one {
    //     position: absolute;
    //     height: 24px;
    //     left: 40px;
    //     right: 24px;
    //     top: 96px;
    // }

    // & > .ux-project-two {
    //     position: absolute;
    //     height: 24px;
    //     left: 40px;
    //     right: 24px;
    //     top: 124px;
    // }

    // & > .ux-project-three {
    //     position: absolute;
    //     height: 24px;
    //     left: 40px;
    //     right: 24px;
    //     top: 152px;
    // }

    & > .home-link {
        margin-bottom: 4px;
        // width: 100%;
        // font-family: Roboto;
        // font-style: normal;
        // font-weight: 500;
        // font-size: 18px;
        // line-height: 24px;
        // display: flex;
        // align-items: center;

        // color: ${black.default};
        // border: 1px dotted red;

        &:hover {
            font-weight: 500;
            color: ${green.default};
        }
    }

    & > .list-item {
        margin-bottom: 4px;
        // width: 100%;
        // font-family: Roboto;
        // font-style: normal;
        // font-weight: 500;
        // font-size: 18px;
        // line-height: 24px;
        // display: flex;
        // align-items: center;

        // color: ${black.default};
        // border: 1px dotted blue;
    }

    & > .list-sub-item {
        margin-bottom: 4px;
        padding: 0px 0px 0px 16px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        // display: flex;
        // align-items: center;
        color: ${black.default};
        text-decoration: none;
        // border: 2px solid green;

        &:hover {
            font-weight: 500;
            color: ${green.default};
        }
    }
`

const Item = styled(Link)`
    margin: 0px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: ${black.default};
    text-decoration: none;
    // border: 1px dotted orange;
`

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useContext(AppContext)

    function openCloseMenu() {
        if (isMenuOpen === false) {
            // console.log('it is false and not open')
            return 'none'
        } else if (isMenuOpen === true) {
            // console.log('it is true and is open')
            return 'block'
        }
    }

    function closeMenu() {
        if (isMenuOpen === true) {
            setIsMenuOpen(() => false)
        }
    }

    let navPosition = openCloseMenu()

    return (
        <NavigationContainer display={navPosition}>
            {/* <img src={hamburgerClosedIcon} alt={'close'} /> */}
            {/* <p className={'label label-ux'}>{'UX Designer'}</p> */}
            <Item 
                to={'/'}
                className={'home-link'}
                onClick={() => closeMenu()}
            >{'Home'}</Item>

            <Item 
                to={'/'}
                className={'list-item'}
                onClick={() => closeMenu()}
            >{'Other UX Projects'}</Item>

            <Item 
                to={'/project-one'}
                className={'list-sub-item'}
                onClick={() => closeMenu()}
            >{'Vaxx Overflow'}</Item>

            <Item 
                to={'/project-two'}
                className={'list-sub-item'}
                onClick={() => closeMenu()}
            >{'Mentor Hub'}</Item>

            <Item 
                to={'/project-three'}
                className={'list-sub-item'}
                onClick={() => closeMenu()}
            >{'V School Map'}</Item>

            {/* <Link to={'/'} className={'ux-project-one'} onClick={() => closeMenu()} >{'Home'}</Link> */}
            {/* <Link to={'/project-one'} className={'ux-project-one'} onClick={() => closeMenu()} >{'Project One'}</Link> */}
            {/* <Link to={'/project-two'} className={'ux-project-two'} onClick={() => closeMenu()} >{'Project Two'}</Link> */}
            {/* <Link to={'/project-three'} className={'ux-project-three'} onClick={() => closeMenu()} >{'Project Three'}</Link> */}


            {/* <p className={'label label-dev'}>{'Fullstack Dev'}</p> */}
            {/* <p className={'sub-item dev-one'}>{'Project name'}</p> */}
            {/* <p className={'sub-item dev-two'}>{'Project name'}</p> */}
            {/* <p className={'sub-item dev-three'}>{'Project name'}</p> */}
        </NavigationContainer>
    )
}
