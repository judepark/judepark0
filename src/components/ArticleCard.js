import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import {MoveUp} from './../animations/m-styled-animations'
import {fadeInDown} from './../animations/m-styled-animations'

const ArticleCard = (props) => {
  return (
	

	<Link to={props.data.fields.slug}>
<List accent={props.data.frontmatter.accentColor} theme={props.data.frontmatter.themeColor}>
<li>
		<ArticleCardContainer>

		<Title accent={props.data.frontmatter.accentColor} theme={props.data.frontmatter.themeColor}>{props.data.frontmatter.title}</Title>
		
		<Date>{props.data.frontmatter.date}</Date>
		
		</ArticleCardContainer>
</li>
</List>
	</Link>


  )
}

// TODO: Create a style component wrapper for the gatsby-image component


const List = styled.ul`
list-style-type: circle;
margin-left: 0px;
color: ${props => props.accent};
	&:hover {
		list-style-type: disc;
		color: ${props => props.accent};
		animation: ${MoveUp} 0.3s;
		animation-fill-mode: forwards;
	}
	@media(max-width: 1100px) {
		margin-left: 20px;
	}
`;

const ArticleCardContainer = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 78% 1fr;
	overflow: hidden;
	margin-bottom: 0px;
	&:hover {
		opacity: 1;
	}
	@media(max-width: 700px) {
	}
`;


const Title = styled.div`
font-family: 'Nanum Myeongjo', serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
font-size: calc( 14px + (16 - 14) * (100vw - 400px) / (1300 - 400) );
color: hsla(0, 0%, 0%, 0.35);
line-height: 1.5;
letter-spacing: 0.2px;
margin-bottom: 0px;
margin-top: 0px;
font-weight: 700;
margin-right: 20px;
color: hsla(0, 0%, 0%, 0.35);
animation: ${fadeInDown} 1s;
	transition: opacity 0.3s;
	:hover {
		color: hsla(0, 0%, 0%, 0.8);
	}
`;

const Date = styled.div`
	font-family: 'Product Sans', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
	Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: calc( 12px + (14 - 12) * (100vw - 400px) / (1300 - 400) );
	color: hsla(0, 0%, 0%, 0.35);
	margin-top: 0px;
	margin-bottom: 0px;
	line-height: 1.35;
	letter-spacing: 0.5px;
	font-weight: normal;
	@media(max-width: 700px) {
		
	}
`;

export default ArticleCard;
