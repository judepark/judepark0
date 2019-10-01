import React from 'react'
import styled from 'styled-components'

import {fadeInDown} from './../animations/m-styled-animations'
import {MoveUp} from './../animations/m-styled-animations'

const LooPage = ({data}) => (
  <React.Fragment>
	<PageGrid2>
			
			<HeaderTitle>
			<br/><br/><br/>
			<strong>Loo</strong>
			</HeaderTitle>
			
			<HeaderSubtitle>
			Public Toilet Finder
			</HeaderSubtitle>	

			<Line>
			<hr></hr>
			</Line>

			<HeaderColumn>

			<HeaderDescription>
			I suffer from
			a chronic medical condition that causes IBS, and I saw 
			a need for others like me who often need accessible, clean,
			public toilets. Loo helps you find the nearest accessible 
			toilets in your city through crowd-sourced reviews.

			<br/>
			</HeaderDescription>	

			<NonExistentLine/>

			<HeaderDescription2>
			<span style={{fontWeight: "900", fontSize:"80%"}}>Year</span>
			<br/>
			2015
			<br/>
			<br/>
			<span style={{fontWeight: "900", fontSize:"80%"}}>My Role</span>
			<br/>
			Founder, Developer
			<br/>
			<br/>
			<span style={{fontWeight: "900", fontSize:"80%"}}>Link</span>
			<br/>
			looapp.ca
			<br/>
			<br/><br/><br/><br/>

			</HeaderDescription2>

			</HeaderColumn>

	</PageGrid2>

	<br/>

	<PageGride3Layout>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	</PageGride3Layout>

	<div class="scroll--helper">
  	<div class="container">
  	</div>
	</div>

	<div class="mouse">
	<div class="wheel"></div>
	</div>

	
	<PageGrid3>

	

	</PageGrid3>


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
	font-size: calc( 14px + (16 - 14) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
	letter-spacing: 0.2px;
	line-height: 1.5;
	font-weight: 800;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
	}
`;

const HeaderColumn = styled.div`
	columns: 2;
	column-gap: 50px;
	column-rule: 1.5px solid hsla(0, 0%, 0%, 0.35);
	margin-bottom: 100px;
	@media(max-width: 425px) {
	}
`;


const HeaderDescription = styled.div`
	max-width: 100%;
	display: inline-block;
	font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
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
	color: hsla(0, 0%, 0%, 0.35);
	letter-spacing: 0.2px;
	line-height: 1.5;
	font-weight: 700;
	animation: ${fadeInDown} 0.5s;
	@media(max-width: 425px) {
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
	@media(max-width: 425px) {
	}
`;

const PortfolioTitle2 = styled.div`
	margin-bottom: 30px;
	margin-top: 0px;
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (17 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
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
color: hsla(0, 0%, 0%, 0.35);
line-height: 1.35;
letter-spacing: 0.5px;
margin-bottom: -5px;
font-weight: normal;
color: hsla(0, 0%, 0%, 0.35);
	&:hover {
		color: hsla(0, 0%, 0%, 0.35);
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


export default LooPage