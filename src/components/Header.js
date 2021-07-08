import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>CERCA</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>DA VEDERE</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALI</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>FILM</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIE TV</span>
                </a>
            </NavMenu>

            <UserIMG src="/images/profileIMG.png" />
        </Nav>
    )
}

export default Header

const Nav = styled.nav `
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img `
    width: 80px;
    padding: 0 25px 0 0;
`
const NavMenu = styled.div `
    display: flex;
    flex: 1;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
    
        img {
            height: 20px;
            padding: 0 3px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 1.25px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                transform: scaleX(0);
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }

`

const UserIMG = styled.img `
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`