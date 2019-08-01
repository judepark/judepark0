import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import FlickrPhotoGrid from '../components/FlickrPhotoGrid';
import FlipButton from '../components/FlipButton';

import { graphql } from "gatsby"

import {fadeInDown} from './../animations/m-styled-animations'

const FairDesignPage = ({data}) => (
  <React.Fragment>
	<Helmet title={data.site.siteMetadata.title + ' | ' + "About"}></Helmet>
	<PageGrid>
			<HeaderTitle>
			<br/><br/><br/><br/><br/><br/>
			Fair Design
			</HeaderTitle>
			
			<HeaderSubtitle>			
			<br/>
			"With my seat at the table, I will bring voices that can empower companies to make inclusive and smart decisions."
			<br/>
			</HeaderSubtitle>		
	</PageGrid>

	<br/><br/><br/>

	<PageGrid2>
			<PortfolioTitle>
			ABOUT FAIR DESIGN
			</PortfolioTitle>
			<HeaderSubtitle>
			<br/>
			My mission as a designer is to consider the privileges of the target user group in the design process.
			<br/>
			<br/>
			Fair Design is an experimental research into how we can mobilize design communities
			to become advocates for inclusion and fair access, by exposing harmful design choices
			practiced in the tech industry.
			<br/>
			<br/>
			To find out more, follow the hashtag: <a href="https://twitter.com/search?q=%23fairdesign&src=typd" target="_blank">#fairdesign</a>

			</HeaderSubtitle>

	</PageGrid2>

	<PageGrid3>
			

			<PortfolioTitle>
			MY MISSION
			</PortfolioTitle>

			<HeaderSubtitle2>
			<div style={{color: "hsla(0, 0%, 0%, 0.8)", fontSize:"70%"}}>
			<br/>
			I as a Designer, will include the experiences of marginalized groups into my design process.
			<br/>
			<br/>
			I shall not hide, avoid or diminish experiences of others, but integrate identities of people different from me into my work.
			<br/>
			<br/>
			In order to create a seamless digital product and service that do not discriminate, bias or neglect,
			<br/>
			<br/>
			I will advocate for the user in all their diversity.
			<br/>
			<br/>
			With my seat at the table, I will bring voices that can empower companies to make inclusive and smart decisions. 
			<br/>
			<br/>
			<br/>
			</div>
			<img src="https://66.media.tumblr.com/03376a894b39368a366e55796365a1d4/tumblr_pviqu8QZ1q1taz7avo1_1280.png" alt="" width="95" height="35"></img>


			</HeaderSubtitle2>

	</PageGrid3>
  </React.Fragment>
)


/*

		<HeaderAction>
			<HeaderSubtitle>			
			<br/>
			I as a Designer, will include the experiences of marginalized groups into my design process.
			<br/>
			<br/>
			I shall not hide, avoid or diminish experiences of others, but integrate identities of people different from me into my work.
			<br/>
			<br/>
			In order to create a seamless digital product and service that do not discriminate, bias or neglect,
			<br/>
			<br/>
			I will advocate for the user in all their diversity.
			<br/>
			<br/>
			With my seat at the table, I will bring voices that can empower companies to make inclusive and smart decisions. 
			<br/>
			<br/>
			<br/>
			[SIGNATURE]
			</HeaderSubtitle>		
		</HeaderAction>

		<HeaderAction>
			<HeaderTitle>
			To join the Fair Design Movement, download the declaration page to sign, and follow the hashtag: #fairdesignmovement
			</HeaderTitle>
		</HeaderAction>




		<HeaderAction>
			<HeaderTitle>
			EXPERIENCE
			</HeaderTitle>
		</HeaderAction>
			
		<HeaderAction>
			<HeaderSubtitle>			
			<br/>
			<a href="/">FREELANCE</a> UX Consultant
			<br/>
			<a href="https://www.ventureforcanada.ca/">VFC</a> UX Fellow 
			<br/>
			<a href="https://www.rbc.com/dms/enterprise/futurelaunch/">RBC</a> UI/UX Designer 
			<br/>
			<a href="https://www.utoronto.ca/">ITS</a> Research Repositories Assistant 
			<br/>
			<a href="https://www.ontario.ca/page/about-ontario-public-service">OPS</a> Librarian Assistant
			<br/>
			<a href="https://www.torontopubliclibrary.ca/">TPL</a> Librarian Assistant
			<br/>
			<a href="http://www.vogue.co.kr/">VOUGE KOREA</a> IT Intern
			</HeaderSubtitle>		
			<HeaderSubtitle>			
			</HeaderSubtitle>		
		</HeaderAction>

		<HeaderAction>
			<HeaderTitle>
			EDUCATION
			</HeaderTitle>
		</HeaderAction>
			
		<HeaderAction>
			<HeaderSubtitle>			
			<br/>
			<a href="https://ischool.utoronto.ca/">UofT</a> Masters of Information
			<br/>
			User Experience Design / 
			<br/>
			Information Systems Design
			</HeaderSubtitle>		
			<HeaderSubtitle style={{textAlign:"left"}}>			
			<br/>
			<a href="https://www.trentu.ca/">TRENT</a> Bachelors of Arts
			<br/>
			Cultural Anthropology / Linguistics / History
			</HeaderSubtitle>		
		</HeaderAction>

		<HeaderAction>
			<HeaderTitle>
			TECH PROFICIENCIES
			</HeaderTitle>
			<HeaderTitle>
			RESEARCH METHODS⠀⠀⠀⠀⠀⠀⠀⠀
			</HeaderTitle>
		</HeaderAction>
			
		<HeaderAction>
			<HeaderSubtitle>			
			<br/>
			DESIGN <a href="/">InDesign</a> <a href="/">Photoshop</a> <a href="/">Illustrator</a> <a href="/">Adobe XD</a> <a href="/">Sketch</a> <a href="/">InVision</a> <a href="/">Axure</a> <a href="/">Principle</a>
			<br/>
			DEVELOPMENT <a href="/">React</a> <a href="/">GraphQL</a> <a href="/">Node.js</a> <a href="/">Gatsby</a>
			</HeaderSubtitle>		
			<HeaderSubtitle>			
			<br/>
			METHODS <a href="/">Ethnographic Field Studies</a> <a href="/">Clickstream Analysis</a> <a href="/">A/B Testing</a> <a href="/">Heuristics Analysis</a> <a href="/">Card Sorting</a> <a href="/">Interviews</a> <a href="/">Concept Testing</a> <a href="/">True-Intent Studies</a> <a href="/">Surveys</a>
			<br/>
			DESIGN PROCESSES <a href="/">Fair Design</a> <a href="/">Participatory Design</a> <a href="/">Inclusive Design</a> <a href="/">Accessibility Design</a> <a href="/">Design Thinking</a>
			</HeaderSubtitle>		
		</HeaderAction>

		<HeaderAction>
			<HeaderTitle>
			VOLUNTEER / PERSONAL
			</HeaderTitle>
		</HeaderAction>
			
		<HeaderAction>
			<HeaderSubtitle>			
			<br/>
			VOLUTEER <a href="https://www.pathwaystoeducation.ca/">Pathways to Education</a> <a href="https://mlh.io">Major League Hacking</a> <a href="https://ellehacks.com/">Elle Hacks</a> <a href="https://www.rbc.com/innovator/home.html">RBC The Next Great Innovator</a> <a href="https://www2.ocadu.ca/event/inclusive-design-hackathon">Inclusive Design</a> <a href="http://techportfolio.net/2016/03/canadas-big-banks-turn-to-hackers-for-innovation/">IBM Bluemix Hackathon</a> <a href="https://archive.org/">Internet Archive</a> <a href="https://inspirehacks.devpost.com/">InspireHacks</a> <a href="https://www.studentlife.utoronto.ca/bts/innovation-hub">Innovation Hub</a> <a href="https://www.miamuseum.ca/">Museum of Inuit Art</a> <a href="http://mhso.ca/wp/">Multicultural History Society of Ontario</a> <a href="https://www.torontopubliclibrary.ca/support-us/volunteering/yags/">Youth Advisory Group</a> <a href="http://www.lawyersfeedthehungry.ca/toronto.html">Laywers Feed the Hungry</a> <a href="http://www.mealsonwheels.ca/">Meals on Wheels</a>
			</HeaderSubtitle>		
			<HeaderSubtitle>			
			<br/>
			CURRENT PERSONAL PROJECTS <a href="/">Hey Jude Webcomics Series</a> <a href="/">Healthcare App</a>	<a href="/">Anti-Seizure Web Reader</a>	<a href="/">LGBTQ Web Info-Pamphlet for South Koreans</a> <a href="/">Social Networking app for Bookworms</a> <a href="/">Online Journaling File App</a>	
			</HeaderSubtitle>		
		</HeaderAction>

		




		<HeaderAction>
		<PortfolioTitle>
		<br/><br/><br/><br/>
		MORE OF MY WORKS
		</PortfolioTitle>
		</HeaderAction>
		
		<FlickrPhotoGrid></FlickrPhotoGrid>

<FlipButton link="mailto:jude@judepark.com" content="Hire Me" hoverContent="I'm Available"></FlipButton>

<FlipButton link="mailto:jude@judepark.com" content="[SIGNATURE] ⯆" hoverContent="[Download the Form] ⯆"></FlipButton>

*/

const PageGrid = styled.div`
	display: grid;
	margin-bottom: -100px;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`;

const PageGrid2 = styled.div`
	display: inline-grid;
	max-width: 60%;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	@media(max-width: 1000px) {
		display: grid;
		max-width: 100%;
	}
`;

const PageGrid3 = styled.div`
	display: inline-grid;
	max-width: 40%;
	margin-bottom:-120px;
	background-color: white;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	@media(max-width: 1000px) {
		display: grid;
		max-width: 100%;
	}
`;

const HeaderAction = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0px;
	animation: ${fadeInDown} 1s;
	@media(max-width: 600px) {
		flex-direction: column;
	}
`;

const HeaderTitle = styled.div`
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.80);
	line-height: 1.35;
	font-weight: normal;
	margin-bottom: 20px;
	max-width: 800px;
	letter-spacing: 0.2px;
	@media(max-width: 425px) {
	}
`;

const HeaderSubtitle = styled.div`
	margin-bottom: 100px;
	max-width: 600px;
	font-family: 'Crimson Text', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
	letter-spacing: -.02em;
	line-height: 1.35;
	font-weight: normal;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
	}
`;

const HeaderSubtitle2 = styled.div`
	margin-bottom: 0px;
	max-width: 600px;
	font-family: 'Crimson Text', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
	letter-spacing: -.02em;
	line-height: 1.35;
	font-weight: normal;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
	}
`;

const PortfolioTitle = styled.div`
	margin-bottom: 30px;
	margin-top: 60px;
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
	line-height: 1.35;
	letter-spacing: 0.5px;
	font-weight: normal;
	animation: ${fadeInDown} 0.5s;
	@media(maxs-width: 425px) {
	}
`;

export default FairDesignPage

export const query = graphql`
	query SiteTitlePhotoQuery {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
	}
`;