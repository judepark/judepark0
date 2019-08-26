import React from 'react'
import styled from 'styled-components'

import ArticleCard from '../components/ArticleCard';


import {fadeInDown} from './../animations/m-styled-animations'
import {MoveUp} from './../animations/m-styled-animations'

const WritingsPage = ({data}) => (
  <React.Fragment>
	<PageGrid>
			
			<HeaderTitle>
			<br/><br/><br/><br/><br/><br/>
			<strong>Writing</strong>: Essays, Articles, Blogs and more
			</HeaderTitle>
			
			<HeaderSubtitle>			
			<br/>
			An archive of all my writing.
			<br/>
			<br/>
			For specific blog posts about Fair Design, visit <a href="https://www.fairdesign.ca/ ">www.fairdesign.ca</a>
			<br/>
			</HeaderSubtitle>		
	</PageGrid>

	<br/><br/><br/>

	<PageGrid2>

<PortfolioTitle>
ARCHIVE
</PortfolioTitle>



		{data.allMarkdownRemark.edges.map(({node}) => (
			<ArticleCard data={node} key={node.key}></ArticleCard>
		))}

	
</PageGrid2>

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
	max-width: 100%;
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
	@media(max-width: 425px) {
	}
`;

const Shelf = styled.div`
display: grid;
grid-template-columns: repeat(5, 0fr);
grid-template-rows: repeat(5, 0fr);
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




export default WritingsPage


export const query = graphql`
query AllWritingQuery {
	allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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