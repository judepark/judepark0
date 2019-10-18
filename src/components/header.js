import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {fadeIn} from '../animations/m-styled-animations'

import logo from './../assets/img/logo.png'


const Header = () => (
	<Navmenu>
		<SiteLogoContainer>
			<Link to="/">
				<SiteLogo
					src={logo}
				/>
			</Link>

			⠀⠀<Link to="/about">ABOUT</Link>⠀⠀<Link to="/projects">PROJECTS</Link>⠀⠀<Link to="/blog">BLOG</Link>
			


  
		</SiteLogoContainer>




	</Navmenu>
)

/*

			<div class="menu-wrap">
    <input type="checkbox" class="toggler"/>
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/writing">Writing</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

*/

const Navmenu = styled.div`
	width: 100%;
	display: flex;
	height: 60px;
	margin-top: 18px;
	padding: 10px 20px;
	align-items: center;
	position: absolute;
	top: 0;
	z-index: 2;
	animation: ${fadeIn} 1.3s;
	@media (max-width: 1155px) {
		position: fixed;
		background:#f8f7f3;
		margin-top: 0px;
	}
`

const SitePages = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	list-style: none;
	text-transform: uppercase;
	font-size: 0.7rem;
	font-weight: 500;
	letter-spacing: 1px;
	width: 100%;
	margin-left: 0px;
	margin-bottom: 0px;
	li {
		margin: 0;
		padding: 0px 20px;
		a {
			font-size: 0.7rem;
			font-weight: 500;
			text-decoration: none;
			color: white;
			transition: all 0.6s;
			display: flex;
			&:hover {
				opacity: 0.6;
			}
		}
	}
	span {
		text-transform: none;
		margin-right: 12px;
		font-weight: 400;
	}
	@media(max-width: 1155px) {
		margin-bottom: 0;
	}
`
const ListSeperator = styled.li`
	opacity: 0.5;
	display: flex;
	@media(max-width: 715px) {
		display: none;
	}
`;

const SiteLogo = styled.img`
	width: 45px;
    height: auto;
    margin-right: 17px;
	display: block;
	padding-top: 30px;
	paddding-bottom: 30px;
`
const SiteLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
	flex-grow: 1;
	padding: 50px 0px 0px 0px;
	@media (max-width: 1155px) {
		padding: 0px;
	}
	a {
		font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: calc( 12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
		color: hsla(0, 0%, 0%, 0.65);
		line-height: 1.35;
		letter-spacing: 0.5px;
		font-weight: normal;
	}
`

export default Header
