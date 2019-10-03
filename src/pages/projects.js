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

const ProjectsPage = ({data}) => (
  <React.Fragment>
	  <LoadingScreen>
	  ⠀
	  </LoadingScreen>
	  
		<br/><br/><br/><br/><br/>

	  <PageGrid>
		<HeaderTitle>
			<span style={{fontWeight: "800"}}>Projects</span>
		</HeaderTitle>

		<Line>
		<hr></hr>
		</Line>
		
		<HeaderSubtitle>
			<br/>
			This is my complete portfolio of things I built, designed, created.
		</HeaderSubtitle>
	</PageGrid>



	<br/><br/><br/><br/><br/>



	
	<PageGrid>

	<PortfolioTitle>
	ARCHIVE
	</PortfolioTitle>

	<PageGrid4>

	<PageGrid5>

	<PageGrid1>

<ArchiveColumn>

<Alphabet>
<h6 style={{marginBottom: "1.5px"}}>A</h6>
</Alphabet>

<AchiveList>
<h4 style={{fontWeight: "800", marginBottom: "1.5px"}}>Kafta, Kafta</h4>
<h4>⠀⠀AnimationAnimationAnimationAnimationAnimationAnimationAnimationAnimation</h4>
</AchiveList>

</ArchiveColumn>




<ArchiveColumn>

<Alphabet>
<h6 style={{marginBottom: "1.5px"}}>A</h6>
</Alphabet>

<AchiveList>
<h4 style={{fontWeight: "800", marginBottom: "1.5px"}}>Kafta, Kafta</h4>
<h4>⠀⠀AnimationAnimationAnimationAnimationAnimationAnimationAnimationAnimation</h4>
</AchiveList>

</ArchiveColumn>



<ArchiveColumn>

<Alphabet>
<h6 style={{marginBottom: "1.5px"}}>A</h6>
</Alphabet>

<AchiveList>
<h4 style={{fontWeight: "800", marginBottom: "1.5px"}}>Kafta, Kafta</h4>
<h4>⠀⠀AnimationAnimationAnimationAnimationAnimationAnimationAnimationAnimation</h4>
</AchiveList>

</ArchiveColumn>

	</PageGrid1>









	<PageGrid2>

	<ArchiveColumn>

<Alphabet>
<h6 style={{marginBottom: "1.5px"}}>A</h6>
</Alphabet>

<AchiveList>
<h4 style={{fontWeight: "800", marginBottom: "1.5px"}}>Kafta, Kafta</h4>
<h4>⠀⠀AnimationAnimationAnimationAnimationAnimationAnimationAnimationAnimation</h4>
</AchiveList>

</ArchiveColumn>




<ArchiveColumn>

<Alphabet>
<h6 style={{marginBottom: "1.5px"}}>A</h6>
</Alphabet>

<AchiveList>
<h4 style={{fontWeight: "800", marginBottom: "1.5px"}}>Kafta, Kafta</h4>
<h4>⠀⠀AnimationAnimationAnimationAnimationAnimationAnimationAnimationAnimation</h4>
</AchiveList>

</ArchiveColumn>



<ArchiveColumn>

<Alphabet>
<h6 style={{marginBottom: "1.5px"}}>A</h6>
</Alphabet>

<AchiveList>
<h4 style={{fontWeight: "800", marginBottom: "1.5px"}}>Kafta, Kafta</h4>
<h4>⠀⠀AnimationAnimationAnimationAnimationAnimationAnimationAnimationAnimation</h4>
</AchiveList>

</ArchiveColumn>	

	</PageGrid2>






	<PageGrid3>

	<ArchiveColumn>

<Alphabet>
<h6 style={{marginBottom: "1.5px"}}>A</h6>
</Alphabet>

<AchiveList>
<h4 style={{fontWeight: "800", marginBottom: "1.5px"}}>Kafta, Kafta</h4>
<h4>⠀⠀AnimationAnimationAnimationAnimationAnimationAnimationAnimationAnimation</h4>
</AchiveList>

</ArchiveColumn>




<ArchiveColumn>

<Alphabet>
<h6 style={{marginBottom: "1.5px"}}>A</h6>
</Alphabet>

<AchiveList>
<h4 style={{fontWeight: "800", marginBottom: "1.5px"}}>Kafta, Kafta</h4>
<h4>⠀⠀AnimationAnimationAnimationAnimationAnimationAnimationAnimationAnimation</h4>
</AchiveList>

</ArchiveColumn>



<ArchiveColumn>

<Alphabet>
<h6 style={{marginBottom: "1.5px"}}>A</h6>
</Alphabet>

<AchiveList>
<h4 style={{fontWeight: "800", marginBottom: "1.5px"}}>Kafta, Kafta</h4>
<h4>⠀⠀AnimationAnimationAnimationAnimationAnimationAnimationAnimationAnimation</h4>
</AchiveList>

</ArchiveColumn>

	</PageGrid3>




	</PageGrid5>
	</PageGrid4>
	


	</PageGrid>





	<br/><br/><br/>


	<PageGride3Layout>
	<br/>
	<br/>
	<br/>
	</PageGride3Layout>
	

  </React.Fragment>
)


/* 

To add later when I finish them:

			<li>
				<IconYoutube>
				<a href="https://medium.com/@judepark" target="_blank">
					<FaYoutube size={iconSize}/>
				</a>
				</IconYoutube>
			</li>
			<li>
				<IconVimeo>
				<a href="https://vimeo.com/judepark/" target="_blank">
					<FaVimeo size={iconSize}/>
				</a>
				</IconVimeo>
			</li>
			<li>
				<IconMedium>
				<a href="https://medium.com/@judepark" target="_blank">
					<FaMedium size={iconSize}/>
				</a>
				</IconMedium>
			</li>


	<PortfolioTitle>
	DESIGN REEL
	</PortfolioTitle>

	<PortfolioTitle>
	ARTICLES
	</PortfolioTitle>

			Industry Curriculum Vitae  ⭳

			<br/>
			Academic Curriculum Vitae ⭳

			<br/>
			<br/>
			<FlipButton link="mailto:jude@judepark.com" content="Hire Me" hoverContent="I'm Available"></FlipButton>
		</HeaderSubtitle>


		
	<PageGrid3>

	<PortfolioTitle>
	DESIGN REEL
	</PortfolioTitle>

	<Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />

	</PageGrid3>



	<PortfolioTitle style={{marginTop:"50px"}}>
	ANIMATION x MOTION
	</PortfolioTitle>

	<Gallery>

	<a class="grid-img" href="https://dribbble.com/shots/6906366-One-Poster-Mockup"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6906366/one_poster_mockup_4x.png" alt="" width="210" height="155"></img><GalleryItem>Nightstand</GalleryItem></a>

	<a class="grid-img" href="https://dribbble.com/shots/6729418-Book-of-Revelations"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6729418/book_of_revelations_dribble_reduced_4x.png" alt="" width="210" height="155"></img><GalleryItem>Book of Revelations</GalleryItem></a>

	<a class="grid-img" href="https://dribbble.com/shots/6729227-JUDE-Journal-Vol-1"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6729227/jude_journal_dribble_page_reduced_4x.png" alt="" width="210" height="155"></img><GalleryItem>JUDE Journal</GalleryItem></a>

	</Gallery>




	*****THE FOLLOWING IS THE FULL VERSION OF MY WEBSITE THAT I WILL RE-INSTATE AFTER I GET A JOB.****


		  <LoadingScreen>
	  ⠀
	  </LoadingScreen>
	  
	  <PageGrid>
		<HeaderTitle>
			<strong>Jude Park</strong>
			<br/>
			User Experience Designer + Researcher
		</HeaderTitle>

		<Line>
		<hr></hr>
		</Line>
		
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
		

		<HeaderSubtitle>
			<br/>
			Welcome to my site!
			<br/>
			These are my works from over the years.
			<br/>
			Feel free to explore the collection.
			<br/>
		</HeaderSubtitle>
	</PageGrid>

	<PageGrid2>

	<PortfolioTitle>
	ARTICLES
	</PortfolioTitle>

		<ArticleCardGrid>

			{data.allMarkdownRemark.edges.map(({node}) => (
				<ArticleCard data={node} key={node.key}></ArticleCard>
			))}

		</ArticleCardGrid>
	</PageGrid2>

	
	<PageGrid2>

	<PortfolioTitle>
	PORTFOLIO
	</PortfolioTitle>

	<Gallery>

	<a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6839300/3-1.png" alt="" width="140" height="103"></img><GalleryItem>Loo (Android/iOS)</GalleryItem></a>
	<a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6839300/3-1.png" alt="" width="140" height="103"></img><GalleryItem>Code for Ethics</GalleryItem></a>
	<a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6839300/3-1.png" alt="" width="140" height="103"></img><GalleryItem>Fair Design Measurement</GalleryItem></a>
	<a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6839300/3-1.png" alt="" width="140" height="103"></img><GalleryItem>Lumii (iOS)</GalleryItem></a>
	<a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6839300/3-1.png" alt="" width="140" height="103"></img><GalleryItem>EpiSense (Plugin)</GalleryItem></a>
	<a class="grid-img" href="https://dribbble.com/shots/7083094-Bookies"><img src="https://cdn.dribbble.com/users/1813673/screenshots/7083094/media/99b847a2f05d3e681d66933ddd06828a.png" alt="" width="140" height="103"></img><GalleryItem>Bookies (iOS)</GalleryItem></a>

	</Gallery>

	<PortfolioTitle style={{marginTop:"20px"}}>
	RESEARCH x DESIGN
	</PortfolioTitle>

	<Gallery2>

	<a class="grid-img" href="https://dribbble.com/shots/6839242-Experience-Map-of-Robarts-Library"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6839242/mockup3_4x.png" alt="" width="220" height="162"></img><GalleryItem>Pamphlet - LGBT+ 팸플릿</GalleryItem></a>

	<a class="grid-img" href="https://dribbble.com/shots/6839242-Experience-Map-of-Robarts-Library"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6839242/mockup3_4x.png" alt="" width="220" height="162"></img><GalleryItem>Experience Map - Robarts Library</GalleryItem></a>

	<a class="grid-img" href="https://dribbble.com/shots/6839229-UX-Research-Poster-Mental-Health"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6839229/poster5_4x.png" alt="" width="220" height="162"></img><GalleryItem>UX Research Poster - Mental Health</GalleryItem></a>

	<a class="grid-img" href="https://dribbble.com/shots/6979124-Web-Design-Second-Chance"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6979124/web_page_psd_mockup_4x.png" alt="" width="220" height="162"></img><GalleryItem>Website Design - Second Chance</GalleryItem></a>


	</Gallery2>

	</PageGrid2>




	<PageGrid3>

	<PortfolioTitle>
	ABOUT
	</PortfolioTitle>
	
	<HeaderSubtitle2>

			<strong>Jude Park</strong> is a User Experience Designer + Researcher 
			who promotes social causes using technology.
			<br/>
			<br/>
			Educated with a master's in User Experience Design from University of Toronto,
			and bachelor's in Anthropology, History and Linguistics from Trent,
			Jude is currently available for work.
			<br/>
			<br/>
			Always asking what is fair in the world of design, 
			Jude is inventing a new approach 
			to designing user experience.
			<br/>
			<br/>
			<FlipButton link="/fairdesign" content="More about how I work ⯈" hoverContent="More about how I work ⯈"></FlipButton>
			<br/>
			<br/>
			Other
			<br/>
			<FlipButton link="/writing" content="Writing" hoverContent="Writing"></FlipButton> | <FlipButton link="/comic" content="Comic" hoverContent="Comic"></FlipButton> | <FlipButton link="/myrecommendations" content="My Recommendations" hoverContent="My Recommendations"></FlipButton>
			<br/>
	</HeaderSubtitle2>	

	</PageGrid3>

<PageGrid3>

<PortfolioTitle style={{marginTop:"50px"}}>
OTHER PROJECTS
</PortfolioTitle>

<Gallery>

<a class="grid-img" href="https://dribbble.com/shots/6906366-One-Poster-Mockup"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6906366/one_poster_mockup_4x.png" alt="" width="160" height="118"></img><GalleryItem>Nightstand Radio</GalleryItem></a>

<a class="grid-img" href="https://dribbble.com/shots/6729418-Book-of-Revelations"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6729418/book_of_revelations_dribble_reduced_4x.png" alt="" width="160" height="118"></img><GalleryItem>Book of Revelations</GalleryItem></a>

<a class="grid-img" href="https://dribbble.com/shots/6729227-JUDE-Journal-Vol-1"><img src="https://cdn.dribbble.com/users/1813673/screenshots/6729227/jude_journal_dribble_page_reduced_4x.png" alt="" width="160" height="118"></img><GalleryItem>JUDE Journal</GalleryItem></a>

</Gallery>

<PortfolioTitle style={{marginTop:"0px"}}>
NON-PROFIT
</PortfolioTitle>

<Gallery>

<a class="grid-img" href="https://www.bridgetoyouth.com/"><img src="https://static1.squarespace.com/static/5d4a46e37f8c8d0001521fc5/t/5d4cbb22c40b1700010fd3af/1565463825871/?format=1500w" alt="" width="118" height="118"></img><GalleryItem>BridgeTO</GalleryItem></a>

</Gallery>

</PageGrid3>


I draw a comic a day (mostly), have my own podcast show, make animation shorts, write ebooks, create protest art. See all my projects on Dribble.





<video width="320" height="240" controls autoplay loop muted>
  <source src="/ezgif-2-9490e5b96e93.mp4" type="video/mp4" />
  <source src="/ezgif-2-9490e5b96e93.mp4" type="video/ogg" />
  Your browser does not support the video tag.
</video>


			<br/>
			<br/>
			<FlipButton link="/fairdesign" content="More about how I work ⯈" hoverContent="More about how I work ⯈"></FlipButton>
			<br/>
			<br/>
			Other
			<br/>
			<FlipButton link="/writing" content="Writing" hoverContent="Writing"></FlipButton> | <FlipButton link="/projects" content="Projects" hoverContent="Projects"></FlipButton> | <FlipButton link="/comic" content="Comic" hoverContent="Comic"></FlipButton> | <FlipButton link="/myrecommendations" content="My Recommendations" hoverContent="My Recommendations"></FlipButton>
			<br/>

			
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
			color: hsla(0, 0%, 0%, 0.35);
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
		color: #ffcc00;
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

const PageGrid1 = styled.div`
	display: inline-grid;
	max-width: 33%;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	@media(max-width: 1055px) {
		display: grid;
		max-width: 100%;
	}
`;

const PageGrid2 = styled.div`
	display: inline-grid;
	max-width: 33%;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	@media(max-width: 1055px) {
		display: grid;
		max-width: 100%;
	}
`;

const PageGrid3 = styled.div`
	display: inline-grid;
	max-width: 33%;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	@media(max-width: 1055px) {
		display: grid;
		max-width: 100%;
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
margin-left: -22px;
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
	max-width: 370px;
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
	font-size: calc( 14px + (16 - 14) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
	letter-spacing: 0.2px;
	line-height: 1.5;
	font-weight: 700;
	animation: ${fadeInDown} 1s;
	@media(max-width: 425px) {
		
	}
`;

const HeaderSubtitle1 = styled.div`
	margin-bottom: 0px;
	max-width: 80%;
	font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 14px + (16 - 14) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
	letter-spacing: 0.2px;
	line-height: 1.5;
	font-weight: 700;
	animation: ${fadeInDown} 1s;
	@media(max-width: 425px) {
		
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
	color: hsla(0, 0%, 0%, 0.35);
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
	margin-bottom: 30px;
	margin-top: 0px;
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
	color: #f8f7f3;
	line-height: 1.35;
	letter-spacing: 0.5px;
	font-weight: normal;
	padding-left: 200px;
	animation: ${fadeInDown} 1s;
	transform: rotate(90deg);
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
color: hsla(0, 0%, 0%, 0.35);
line-height: 1.35;
letter-spacing: 0.5px;
margin-bottom: -5px;
font-weight: normal;
color: hsla(0, 0%, 0%, 0.35);
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
color: hsla(0, 0%, 0%, 0.35);
line-height: 1.35;
letter-spacing: 0.5px;
margin-bottom: -5px;
font-weight: normal;
color: hsla(0, 0%, 0%, 0.35);
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




const ArchiveColumn = styled.div`
display: flex;
`;

const Alphabet = styled.div`
margin-right: 20px;
`;

const AchiveList = styled.div`
max-width: 40%;
`;



export default ProjectsPage

export const query = graphql`
query aeeQuery {
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