import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'
import ArticleCard from '../components/ArticleCard';

import {fadeInDown} from './../animations/m-styled-animations'
import {MoveUp} from './../animations/m-styled-animations'
import {LoadScreen} from './../animations/m-styled-animations'
import {Comic} from './../animations/m-styled-animations'
import {MovingInstaButton} from './../animations/m-styled-animations'


import {FaEnvelope} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'
import {FaVimeo} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaSoundcloud} from 'react-icons/fa'


import {Link} from 'gatsby'

import FlipButton from '../components/FlipButton';

import Video from "../components/Video"


const iconSize = 23;

const AboutPage = ({data}) => (
  <React.Fragment>
	  <LoadingScreen>
	  ⠀
	  </LoadingScreen>
	  
		<br/><br/><br/><br/><br/>

	  <PageGrid2>
		<HeaderTitle>
			<span style={{fontWeight: "800"}}>About</span>
		</HeaderTitle>

		<Line>
		<hr></hr>
		</Line>

		<HeaderSubtitle>
			<br/>
			"With my seat at the table, I bring voices that can mobilize smart decisions."

		</HeaderSubtitle>
	</PageGrid2>

	<PageGrid2>
	
	</PageGrid2>


	<br/><br/><br/><br/><br/>



	
	<PageGrid2>

	<PortfolioTitle>
	INTRO
	</PortfolioTitle>

	<HeaderSubtitle1>

			Hi, it's nice to virtually meet you.
			<br/>
			⠀⠀My name is Jude Park. I'm a user experience designer who mobilize people through fair design thinking.
			<br/>
			⠀⠀For the past 3 years I have worked in startups, innovation labs and entrepreneurship fellowships.
			<br/>
			⠀⠀I studied User Experience Design, Information Systems Design, Information Science at University of Toronto (Masters) 
			and Anthropology, Linguistics, History at Trent University (Bachelors).
			<br/>
			⠀⠀I was born in South Korea, moved to Canada when I was nine, grew up in Jane and Weston of Toronto.
			<br/>
			⠀⠀I'm always working on a project. Let's connect online.
			<br/>
			<br/>
			<a href="mailto:jude@judepark.com">jude@judepark.com</a> / <a href="https://twitter.com/judepark">@judepark</a>

	</HeaderSubtitle1>	



	<PortfolioTitle style={{marginTop: "50px", marginBottom:"13px"}}>
	Q & A
	</PortfolioTitle>

<HeaderSubtitle1>

	  <div class="tab-group">  
	  
		  <div class="tab">
			  <input id="tab-1" type="radio" name="tabs"/> 
			  <label for="tab-1" >Where are you working right now?</label>
			  <div class="tab-content">
			  	I believe in creating your own opportunities. Which is why I started Loo, a venture that aims to help you find
			accessible public toilets in your city.
				  
			  </div>
		  </div>
		  

		  <div class="tab">
			  <input id="tab-2" type="radio" name="tabs"/> 
			  <label for="tab-2" >What's your working style? What makes you different?</label>
			  <div class="tab-content">
				  As a designer, I prioritize the user experience of my design systems.
		As an individual, I believe in ethical responsibilities, and creating an accessible future for all.
					
			  </div>
		  </div>


		  <div class="tab">
			  <input id="tab-3" type="radio" name="tabs"/> 
			  <label for="tab-3" >Why this line of work?</label>
			  <div class="tab-content">
				  I like to invent new things. I love working in creative environments 
					  and being a designer allows me to express myself creatively to solve problems. 
					  I also like technology - thinking, writing, and talking about how it can transform our lives.
				
			  </div>
		  </div>


		  <div class="tab">
			  <input id="tab-4" type="radio" name="tabs"/> 
			  <label for="tab-4">Who are you outside of your work?</label>
			  <div class="tab-content">
				  I am an ex-refugee, orphan, assault survivor, grew up in Jane and Weston, 
		LGBT+ member. I'm also incredibly resourceful, thoughtful and creative. I love to swim, write, code. 
		I help out with the non-profit <a href="https://www.bridgetoyouth.com/">BridgeTO</a>.
				
			  </div>
		  </div>
		  
	  </div>

	</HeaderSubtitle1>


	</PageGrid2>

	
	<PageGrid2>

	<PortfolioTitle>
	EXPERIENCE
	</PortfolioTitle>

	<Resume>
	<h4 style={{fontSize:"50%", color: "hsla(0, 0%, 0%, 0.8)", marginBottom: "10px"}}>2019 -</h4>
	<h3 style={{fontWeight: "700", color: "hsla(0, 0%, 0%, 0.8)", marginBottom: "0px"}}>
	User Design Research Consultant</h3>
	<h6 style={{fontWeight: "400", marginBottom: "3px"}}>Freelance</h6>
	<h4 style={{fontSize:"50%", marginBottom: "31px"}}>Toronto, Ontario</h4>

	<h4 style={{fontSize:"50%", color: "hsla(0, 0%, 0%, 0.8)", marginBottom: "10px"}}>2018-2019</h4>
	<h3 style={{fontWeight: "700", color: "hsla(0, 0%, 0%, 0.8)", marginBottom: "0px"}}>
	Entrepreneur Fellow</h3>
	<h6 style={{fontWeight: "400", marginBottom: "3px"}}>Venture for Canada</h6>
	<h4 style={{fontSize:"50%", marginBottom: "31px"}}>Canada</h4>

	<h4 style={{fontSize:"50%", color: "hsla(0, 0%, 0%, 0.8)", marginBottom: "10px"}}>2017 - 2018</h4>
	<h3 style={{fontWeight: "700", color: "hsla(0, 0%, 0%, 0.8)", marginBottom: "0px"}}>
	UI.UX Designer</h3>
	<h6 style={{fontWeight: "400", marginBottom: "3px"}}>RBC</h6>
	<h4 style={{fontSize:"50%", marginBottom: "31px"}}>Toronto, Ontario</h4>

	<h4 style={{fontSize:"50%", color: "hsla(0, 0%, 0%, 0.8)", marginBottom: "10px"}}>2009 - 2016</h4>
	<h3 style={{fontWeight: "700", color: "hsla(0, 0%, 0%, 0.8)", marginBottom: "0px"}}>
	Librarian</h3>
	<h6 style={{fontWeight: "400", marginBottom: "3px"}}>TPL / OPS / UofT / ect.</h6>
	<h4 style={{fontSize:"50%", marginBottom: "31px"}}>Toronto, Ontario</h4>
	</Resume>

	<PortfolioTitle style={{marginBottom:"60px"}}>
	CONNECT
	</PortfolioTitle>


	<SiteSocial>
			<li>
				<IconMail>
				<a href="mail:jude@judepark.com" target="_blank">
					<FaEnvelope size={iconSize}/>
				</a>
				</IconMail>
			</li>
			<li>
				<IconLinkedin>
				<a href="https://www.linkedin.com/in/judepark/" target="_blank">
					<FaLinkedin size={iconSize}/>
				</a>
				</IconLinkedin>
			</li>
			<li>
				<IconInstagram>
				<a href="https://www.instagram.com/judepark/" target="_blank">
					<FaInstagram size={iconSize}/>
				</a>
				</IconInstagram>
			</li>
			<li>
				<IconTwitter>
				<a href="https://twitter.com/judepark/" target="_blank">
					<FaTwitter size={iconSize}/>
				</a>
				</IconTwitter>
			</li>
			<li>
				<IconDribble>
				<a href="https://dribbble.com/judepark/" target="_blank">
					<FaDribbble size={iconSize}/>
				</a>
				</IconDribble>
			</li>
			<li>
				<IconGithub>
				<a href="https://github.com/judepark/" target="_blank">
					<FaGithub size={iconSize}/>
				</a>
				</IconGithub>
			</li>
		</SiteSocial>

	</PageGrid2>

	<br/><br/><br/>


	<PageGride3Layout>
	<br/>
	<br/>
	<br/>
	</PageGride3Layout>
	

  </React.Fragment>
)


/* 

	<VideoContainer>
	<video width="" height="250" autoPlay loop muted>
  <source src="/profile.mp4" type="video/mp4" />
  <source src="/profile.mp4" type="video/ogg" />
  Your browser does not support the video tag.
	</video>
	</VideoContainer>	
*/



const SiteSocial = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	list-style: none;
	text-transform: uppercase;
	font-size: 0.7rem;
	font-weight: 500;
	letter-spacing: 1px;
	margin-right: 40px;
	margin-left: -30px;
	margin-bottom: 0px;
	margin-top: -50px;
	animation: ${fadeInDown} 1s;
	/*width: 100%;*/
	li {
		margin: 0;
		padding: 0px 2px;
		a {
			font-size: 0.7rem;
			font-weight: 500;
			text-decoration: none;
			color: hsla(0, 0%, 0%, 0.8);
			transition: all 0.3s;
		}
	}
	@media(max-width: 1155px) {
		
	}
	@media(max-width: 720px) {
		
	}
`;

const IconMail = styled.ul`
a {
	&:hover {
		color: #f1d592;
		}
	}
`;

const IconLinkedin = styled.ul`
a {
	&:hover {
		color: #0077B5;
		}
	}
`;

const IconInstagram = styled.ul`
a {
	&:hover {
		color: #e95950;
		}
	}
`;

const IconTwitter = styled.ul`
a {
	&:hover {
		color: #1da1f2;
		}
	}
`;

const IconGithub = styled.ul`
a {
	&:hover {
		color: #333;
		}
	}
`;

const IconDribble = styled.ul`
a {
	&:hover {
		color: #ea4c89;
		}
	}
`;

const IconMedium = styled.ul`
a {
	&:hover {
		color: #00ab6c;
		}
	}
`;

const IconVimeo = styled.ul`
a {
	&:hover {
		color: #1ab7ea;
		}
	}
`;

const IconYoutube = styled.ul`
a {
	&:hover {
		color: #ff0000;
		}
	}
`;




const PageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`;

const PageGrid2 = styled.div`
	display: inline-grid;
	max-width: 50%;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	@media(max-width: 1055px) {
		display: grid;
		max-width: 100%;
		margin-top: 40px;
	}
`;

const PageGrid3 = styled.div`
	display: inline-grid;
	position: relative;
	margin-bottom: -160px;
	padding-right: 60px;
	max-width: 50%;
	overflow-x: hidden;
	overflow:hidden;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	@media(max-width: 1055px) {
		padding-top:30px;
		margin-top: 30px;
		padding-bottom:30px;
		max-width: 100%;
		background-color: hsla(0, 0%, 0%, 0.8);
	}
`;

const PageGrid3b = styled.div`
	display: inline-grid;
	position: relative;
	margin-bottom: -160px;
	padding-right: 0px;
	max-width: 50%;
	overflow-x: hidden;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	@media(max-width: 1055px) {
		padding-top:30px;
		margin-top: 160px;
		padding-bottom:30px;
		max-width: 100%;
		background-color: hsla(0, 0%, 0%, 0.8);
	}
`;

const PageGride3Layout = styled.div`
background-color: hsla(0, 0%, 0%, 0.8);
margin-left: -200px;
margin-right: -200px;
margin-bottom:-200px;
position: relative;
z-index: -4;
@media(max-width: 1055px) {
	visibility: hidden;
}
`;

const PageGrid4 = styled.div`
display: flex;
overflow:hidden;
`;

const PageGrid5 = styled.div`
flex: 50%;
`;


const HeaderTitle = styled.div`
	font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 40px + (45 - 40) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.80);
	line-height: 1.35;
	font-weight: 700;
	margin-bottom: 20px;
	max-width: 800px;
	margin-top: 0px;
	letter-spacing: 0.2px;
	@media(max-width: 720px) {
		
	}
`;

const Line = styled.p`
	animation: ${fadeInDown} 1s;
	marginBottom: 1em;
	width: 370px;
	@media(max-width: 820px) {
		width: 100%;
	}
`;

const HeaderSubtitle = styled.div`
	margin-bottom: 0px;
	margin-top: -50px;
	max-width: 370px;
	font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 16px + (18 - 16) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.65);
	letter-spacing: 0.2px;
	line-height: 1.5;
	font-weight: 700;
	animation: ${fadeInDown} 1s;
	@media(max-width: 1055px) {
		max-width: 100%;
	}
`;

const HeaderSubtitle1 = styled.div`
	margin-bottom: 10px;
	max-width: 370px;
	font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.65);
	letter-spacing: 0.2px;
	line-height: 1.5;
	font-weight: 700;
	animation: ${fadeInDown} 1s;
	a {
		all: inherit;
		display: inline;
		&:hover {
			cursor: pointer;
			}
		}
	}
	@media(max-width: 1055px) {
		max-width: 65%;
	}
`;

const HeaderSubtitle2 = styled.div`
	margin-bottom: 0px;
	max-width: 600px;
	font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
	color: #f8f7f3;
	letter-spacing: 0.2px;
	line-height: 1.5;
	font-weight: 400;
	animation: ${fadeInDown} 1s;
	a {
		all: inherit;
		display: inline;
		&:hover {
			cursor: pointer;
			}
		}
	}
	@media(max-width: 425px) {
		
	}
`;

const PortfolioTitle = styled.div`
	margin-bottom: 30px;
	margin-top: 0px;
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.65);
	line-height: 1.35;
	letter-spacing: 0.5px;
	font-weight: normal;
	animation: ${fadeInDown} 1s;
	@media(maxs-width: 425px) {
	}
`;

const PortfolioTitle2 = styled.div`
	margin-bottom: 30px;
	margin-top: 0px;
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
	color: #f8f7f3;
	line-height: 1.35;
	letter-spacing: 0.5px;
	font-weight: normal;
	animation: ${fadeInDown} 1s;
	@media(maxs-width: 425px) {
	}
`;

const PortfolioTitle3 = styled.div`
	margin-bottom: 10px;
	margin-top: 0px;
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
	color: #f8f7f3;
	line-height: 1.35;
	letter-spacing: 0.5px;
	font-weight: normal;
	animation: ${fadeInDown} 1s;
	@media(maxs-width: 425px) {
	}
`;

const ArticleCardGrid = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(auto-fill, minmax(490px, 1fr));
	grid-gap: 0px;
	animation: ${fadeInDown} 1s;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`;

const Gallery = styled.div`
display: grid;
grid-template-columns: repeat(3, 0fr);
grid-template-rows: repeat(3, 0fr);
margin-bottom: 20px;
grid-gap: 20px;
animation: ${fadeInDown} 1s;
a {
font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
color: hsla(0, 0%, 0%, 0.65);
line-height: 1.35;
letter-spacing: 0.5px;
margin-bottom: -5px;
font-weight: normal;
	&:hover {
		animation: ${MoveUp} 0.3s;
		animation-fill-mode: forwards;
		color: hsla(0, 0%, 0%, 0.8);
		}
	}
`;

const Gallery2 = styled.div`
display: grid;
grid-template-columns: repeat(2, 0fr);
grid-template-rows: repeat(2, 0fr);
margin-bottom: 20px;
grid-gap: 20px;
animation: ${fadeInDown} 1s;
a {
	font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
color: hsla(0, 0%, 0%, 0.65);
line-height: 1.35;
letter-spacing: 0.5px;
margin-bottom: -5px;
font-weight: normal;
	&:hover {
		animation: ${MoveUp} 0.3s;
		animation-fill-mode: forwards;
		color: hsla(0, 0%, 0%, 0.8);
		}
	}
`;

const GalleryItem = styled.div`
margin-bottom: -10px;
margin-top: -30px;
`;

const LoadingScreen = styled.div`
background-color: hsla(0, 0%, 0%, 0.80);
animation: ${LoadScreen} 1s;
animation-fill-mode: forwards;  
margin-bottom:-30px
`;


const BookShelfContainer = styled.div`
a {
	font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
	color: #f8f7f3;
	line-height: 1.35;
	letter-spacing: -.02em;
	margin-bottom: 0px;
	font-weight: 400;
		&:hover {
			
			}
		}
&:hover {

	}
`;

const ComicContainer = styled.div`
a {
	font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
	color: #f8f7f3;
	line-height: 1.35;
	letter-spacing: -.02em;
	margin-bottom: 0px;
	font-weight: 400;
		&:hover {
			
			}
		}
&:hover {
	animation: ${MoveUp} 0.3s;
	animation-fill-mode: forwards;
	color: #f8f7f3;
	}
`;


const BookShelf = styled.div`
display: grid;
grid-template-columns: repeat(2, 0fr);
grid-template-rows: repeat(2, 0fr);
margin-bottom: 20px;
grid-gap: 0px 20px;
animation: ${fadeInDown} 1s;
&:hover {

	}
}
img {

	@media(max-width: 700px) {
		
	}

}
`;

const BookItem = styled.div`
margin-bottom: 0px;
margin-top: 0px;
width: 100px;
margin-right: 20px;
`;

const MovingInstaButton1 = styled.div`
animation: ${MovingInstaButton} 2s infinite;
margin-left: -30px;
margin-top: 10px;
`;

const Resume = styled.div`
animation: ${fadeInDown} 1s;
margin-bottom:30px;

`;

const VideoContainer = styled.div`
object-fit: cover;
width:100%;
height: 100%;
overflow:hidden;
position: absolute;
margin-top: -140px;
margin-left: 23px;

animation: ${fadeInDown} 1s;
`;


const FormInfo = styled.div`
display: flex;
animation: ${fadeInDown} 1s;
`;

const FormNote = styled.div`
display: block;
animation: ${fadeInDown} 1s;
`;

const FormNoteContent = styled.div`
display: block;
animation: ${fadeInDown} 1s;
`;

const FormName = styled.div`
width: 100%;
animation: ${fadeInDown} 1s;
`;

const FormEmail = styled.div`
width: 100%;
animation: ${fadeInDown} 1s;
`;


export default AboutPage

export const query = graphql`
query aeQuery {
	allMarkdownRemark(
		filter: {frontmatter: { highlight: { eq:"yes"}}}
		sort: {fields: [frontmatter___date], order: DESC}
		) {
		edges {
		  node {
			fields {
				slug
			}
			frontmatter {
			  title
			  themeColor
			  accentColor
			  date(formatString: "MMM D, YYYY")
			  image {
				childImageSharp{
				  fluid(maxWidth: 900) {
					...GatsbyImageSharpFluid
				  }
				}
			  }
			}
		  }
		}
	  }
  }
`