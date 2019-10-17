import React from 'react'
import styled from 'styled-components'

import {fadeInDown} from './../animations/m-styled-animations'
import {MoveUp} from './../animations/m-styled-animations'

const LumiiPage = ({data}) => (
  <React.Fragment>
	<PageGrid2>
			
			<HeaderTitle>
			<br/><br/><br/>
			<strong>Lumii</strong>
			</HeaderTitle>

			

			<HeaderSubtitle>
			Personal Career Agent AI
			</HeaderSubtitle>	
			
			<Line>
			<hr></hr>
			</Line>
			
			<HeaderColumn>

			<HeaderDescription>
			RBC's innovation labs tasked us to come up with
			a disruptive solution that will hire, onboard and retain diverse talents.
			The end result was a concept-to-implementation chatbot that
			closed the gap in unemployment, highlighting
			21st century skils for the future of work.


			<br/>
			</HeaderDescription>	

			<NonExistentLine/>

			<HeaderDescription2>
			<span style={{fontWeight: "900", fontSize:"80%"}}>Year</span>
			<br/>
			2017
			<br/>
			<br/>
			<span style={{fontWeight: "900", fontSize:"80%"}}>My Role</span>
			<br/>
			UI.UX Designer
			<br/>
			<br/>
			<span style={{fontWeight: "900", fontSize:"80%"}}>Link</span>
			<br/>
			<a href="https://www.judepark.com/article/2017-12-01---Designing-an-AI-ChatBot-Personal-Career-Agent-to-Solve-Youth-Unemployment/">judepark.com</a>
			<br/>
			<br/>
			<span style={{fontWeight: "900", fontSize:"80%"}}>Brand</span>
			<br/>
			x.X.x
			<br/>

			</HeaderDescription2>

			</HeaderColumn>

	</PageGrid2>

	<PageGrid2a>

	<div class="photo-grid-container">
<div class="photo-grid">

<img height="100%" src="lumii.png"/>

</div>
</div>


</PageGrid2a>

  </React.Fragment>
)


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
	max-width: 50%;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	@media(max-width: 1000px) {
		display: grid;
		max-width: 100%;
	}
	& img {

		position:absolute;
		margin-left: 150px;
		margin-top: 100px;
		
`;

const PageGrid2a = styled.div`
	display: inline-grid;
	max-width: 50%;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	@media(max-width: 1000px) {
		display: none;
	}
	& img {

		position:absolute;
		margin-left: 150px;
		margin-top: 100px;
		
`;

const PageGrid3 = styled.div`
	display: inline-grid;
	max-width: 40%;
	margin-bottom:-120px;
	background-color: hsla(0, 0%, 0%, 0.65);
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
	@media(max-width: 1000px) {
		display: grid;
		max-width: 100%;
	}
`;

const PageGride3Layout = styled.div`
background-color: hsla(0, 0%, 0%, 0.8);
margin-left: -200px;
margin-right: -200px;
margin-bottom:-540px;
position: relative;
z-index: -4;
@media(max-width: 1055px) {
	visibility: hidden;
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
	font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 40px + (45 - 40) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.80);
	line-height: 1.35;
	font-weight: 700;
	margin-top: -10px;
	margin-bottom: 20px;
	max-width: 800px;
	letter-spacing: 0.2px;
	@media(max-width: 425px) {
	}
`;

const HeaderSubtitle = styled.div`
	margin-bottom: 30px;
	max-width: 100%;
	font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 16px + (18 - 16) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.65);
	letter-spacing: 0.2px;
	line-height: 1.5;
	font-weight: 700;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
	}
`;

const HeaderColumn = styled.div`
	columns: 2;
	column-gap: 40px;
	column-rule: 1.5px solid hsla(0, 0%, 0%, 0.35);
	margin-bottom: 100px;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
	}
`;


const HeaderDescription = styled.div`
	max-width: 100%;
	display: inline-block;
	font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.65);
	letter-spacing: 0.2px;
	line-height: 1.5;
	font-weight: 700;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
	}
`;

const HeaderDescription2 = styled.div`
	max-width: 100%;
	columns: 2;
	display: inline-block;
	font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 10px + (12 - 10) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.65);
	letter-spacing: 0.2px;
	line-height: 1.5;
	font-weight: 700;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
	}
	a {
		font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: calc( 10px + (12 - 10) * (100vw - 400px) / (1300 - 400) );
		color: hsla(0, 0%, 0%, 0.65);
		letter-spacing: 0.2px;
		line-height: 1.5;
		font-weight: 700;
	}
`;

const NonExistentLine = styled.div`
`;

const HeaderSubtitle2 = styled.div`
	margin-bottom: 0px;
	max-width: 600px;
	font-family: 'Crimson Text', serif,	-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 19px + (25 - 19) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.65);
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
	color: hsla(0, 0%, 0%, 0.65);
	line-height: 1.35;
	letter-spacing: 0.5px;
	font-weight: normal;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
	}
`;

const PortfolioTitle2 = styled.div`
	margin-bottom: 30px;
	margin-top: 0px;
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.65);
	line-height: 1.35;
	letter-spacing: 0.5px;
	font-weight: normal;
	animation: ${fadeInDown} 1s;
	@media(maxs-width: 425px) {
	}
`;

const Shelf = styled.div`
display: grid;
grid-template-columns: repeat(4, 0fr);
grid-template-rows: repeat(4, 0fr);
margin-bottom: 20px;
grid-gap: 20px;
animation: ${fadeInDown} 1s;
img {

	@media(max-width: 700px) {
		width: 100px;
	}

}
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

const Item = styled.div`
margin-bottom: -10px;
margin-top: -30px;
`;

const BookSummary = styled.div`
margin-bottom: 0px;
margin-top: 10px;

@media(max-width: 700px) {
	display:none;
}

font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
font-size: calc( 7px + (12 - 7) * (100vw - 400px) / (1300 - 400) );
color: hsla(0, 0%, 0%, 0.65);
line-height: 1.35;
letter-spacing: 0.5px;
margin-bottom: -5px;
font-weight: normal;
	&:hover {
		color: hsla(0, 0%, 0%, 0.65);
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


const Line = styled.p`
	animation: ${fadeInDown} 0.5s;
	margin-bottom: 15px;
	width: 100%;
	@media(max-width: 820px) {
		width: 100%;
	}
`;

const Wheel = styled.p`
@media(max-width: 1000px) {
	display: none;
}
`;


export default LumiiPage