import React from 'react'
import styled from 'styled-components'


import {fadeInDown} from './../animations/m-styled-animations'
import {MoveUp} from './../animations/m-styled-animations'

const MyRecommendationsPage = ({data}) => (
  <React.Fragment>
	<PageGrid>
			
			<HeaderTitle>
			<br/><br/><br/><br/>
			<strong>My Recommendations</strong>
			</HeaderTitle>
			
			<HeaderSubtitle>
			Tools, Books, Music, Videos, whatnot.
			<br/>
			A curated list of things that I recommend.
			</HeaderSubtitle>		

			</PageGrid>

	<br/>

<PageGrid>
<PortfolioTitle>
TOOLS I USE
</PortfolioTitle>

<ToolShelf>
	<a class="grid-img" href="https://www.adobe.com/products/indesign.html">
	<img src="https://66.media.tumblr.com/aab3e12a5e711fdb5a616313754e65cd/tumblr_pwpexqLa9N1taz7avo1_1280.png" alt="" width="60" ></img>

	<ToolItem>
	InDesign
	</ToolItem>
	</a>

	<a class="grid-img" href="https://www.adobe.com/products/photoshop.html">
	<img src="https://66.media.tumblr.com/05458add5990eecd59c2995f8269f544/tumblr_pwpfnleSPb1taz7avo1_500.png" alt="" width="60" ></img>

	<ToolItem>
	Photoshop
	</ToolItem>
	</a>

	<a class="grid-img" href="https://www.adobe.com/products/illustrator.html">
	<img src="https://66.media.tumblr.com/b7fcea2b3a067dad452bfea91523fc7c/tumblr_pwpjubX39p1taz7avo1_640.png" alt="" width="60" ></img>

	<ToolItem>
	Illustrator
	</ToolItem>
	</a>

	<a class="grid-img" href="https://www.adobe.com/products/aftereffects.html">
	<img src="https://66.media.tumblr.com/52633729d85703723cf52f8ca5000f9c/tumblr_pwsp9kLocD1taz7avo1_1280.png" alt="" width="60" ></img>

	<ToolItem>
	After Effects
	</ToolItem>
	</a>

	<a class="grid-img" href="https://www.adobe.com/products/xd.html">
	<img src="https://66.media.tumblr.com/cecafaa6d40321cce40c150b6d8cb970/tumblr_pwpjxtlsdI1taz7avo1_250.png" alt="" width="60" ></img>

	<ToolItem>
	XD
	</ToolItem>
	</a>

	<a class="grid-img" href="https://www.sketch.com/">
	<img src="https://66.media.tumblr.com/94ed2aab90612ce035578613dd521b83/tumblr_pwpk03Xf5E1taz7avo1_1280.png" alt="" width="60" ></img>

	<ToolItem>
	Sketch
	</ToolItem>
	</a>
	
	<a class="grid-img" href="https://www.figma.com/">
	<img src="https://66.media.tumblr.com/9f4c2598ee3f12d78d35065639f8e243/tumblr_pwpk1jX3UZ1taz7avo1_500.png" alt="" width="60" ></img>

	<ToolItem>
	Figma
	</ToolItem>
	</a>

	<a class="grid-img" href="https://www.axure.com/">
	<img src="https://66.media.tumblr.com/895eb83bae1d67ca4cdcf7a5aa65ac28/tumblr_pwpk58FQ3C1taz7avo1_400.jpg" alt="" width="60" ></img>

	<ToolItem>
	Axure
	</ToolItem>
	</a>

	<a class="grid-img" href="https://www.invisionapp.com/">
	<img src="https://66.media.tumblr.com/8ef285869e975da7b12610a6225f9dae/tumblr_pwpkflfUSI1taz7avo1_250.png" alt="" width="60" ></img>

	<ToolItem>
	InVision
	</ToolItem>
	</a>

	<a class="grid-img" href="https://principleformac.com/">
	<img src="https://66.media.tumblr.com/35a87f28d8dbe7c9210b839d41044f3c/tumblr_pwpkjmW9S61taz7avo1_500.png" alt="" width="60" ></img>

	<ToolItem>
	Principle
	</ToolItem>
	</a>

	<a class="grid-img" href="https://www.w3.org/html/">
	<img src="https://66.media.tumblr.com/8377242b0d67bcedf9af89d6c0facc92/tumblr_pwpklleAj01taz7avo1_540.png" alt="" width="60" ></img>

	<ToolItem>
	HTML
	</ToolItem>
	</a>

	<a class="grid-img" href="https://www.w3schools.com/css/">
	<img src="https://66.media.tumblr.com/5f31757be6fa72481dd9c0686252a36b/tumblr_pwpkres8Ny1taz7avo1_1280.png" alt="" width="60" ></img>

	<ToolItem>
	CSS
	</ToolItem>
	</a>
	
	<a class="grid-img" href="https://www.javascript.com/">
	<img src="https://66.media.tumblr.com/0cded3a3276425911d55a2552bf361bf/tumblr_pwpktsX5HV1taz7avo1_1280.png" alt="" width="60" ></img>

	<ToolItem>
	CSS
	</ToolItem>
	</a>

</ToolShelf>

	</PageGrid>









<PageGrid1>

	<PortfolioTitle>
	BOOKS
	</PortfolioTitle>


	<BookShelf>

	<a class="grid-img" href="https://www.goodreads.com/book/show/20830437-css-secrets">
	<img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442750268l/20830437._SX318_.jpg" alt="" width="150" ></img>
	<BookItem>
	<strong>CSS Secrets</strong>
	<br/>
	Lea Verou
	</BookItem>
	</a>

	<a class="grid-img" href="https://www.goodreads.com/book/show/16280._Why_Are_All_The_Black_Kids_Sitting_Together_in_the_Cafeteria_">
	<img src="https://images-na.ssl-images-amazon.com/images/I/51pSmczbnIL._SX331_BO1,204,203,200_.jpg" alt="" width="150" ></img>
	<BookItem>
	<strong>Why Are All The Black Kids Sitting Together in the Cafeteria?</strong>
	<br/>
	Beverly Daniel Tatum
	</BookItem>
	</a>
	
	<a class="grid-img" href="https://www.goodreads.com/en/book/show/3185869">
	<img src="https://syndetics.com/index.aspx?isbn=9781552451953/LC.gif&client=416-978-7639" alt="" width="150" ></img>
	<BookItem>
	<strong>Stunt</strong>
	<br/>
	Claudia Dey
	</BookItem>
	</a>

	<a class="grid-img" href="https://www.goodreads.com/book/show/29209.The_Color_of_Water?ac=1&from_search=true">
	<img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401311300l/29209.jpg" alt="" width="150" ></img>
	<BookItem>
	<strong>The Color of Water</strong>
	<br/>
	James McBride
	</BookItem>
	</a>

	<a class="grid-img" href="https://www.goodreads.com/book/show/395040.The_Bell_Jar">
	<img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1297266095l/395040.jpg" alt="" width="150" ></img>
	<BookItem>
	<strong>The Bell Jar</strong>
	<br/>
	Sylvia Plath
	</BookItem>
	</a>

	<a class="grid-img" href="https://www.goodreads.com/book/show/3544466-a-fraction-of-the-whole">
	<img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1437883191l/3544466._SY475_.jpg" alt="" width="150" ></img>
	<BookItem>
	<strong>A Fraction of a Whole</strong>
	<br/>
	Steve Toltz
	</BookItem>
	</a>

	<a class="grid-img" href="https://www.goodreads.com/book/show/822195.Don_Quixote">
	<img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349057470l/822195.jpg" alt="" width="150" ></img>
	<BookItem>
	<strong>Don Quixote</strong>
	<br/>
	Miguel de Cervantes Saavedra 
	</BookItem>
	</a>

	<a class="grid-img" href="https://www.goodreads.com/book/show/8253266-a-company-of-fools">
	<img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328002565l/8253266.jpg" alt="" width="150" ></img>
	<BookItem>
	<strong>A Company of Fools</strong>
	<br/>
	Deborah Ellis
	</BookItem>
	</a>
	
	<a class="grid-img" href="https://www.goodreads.com/book/show/15804129-the-picture-of-dorian-gray">
	<img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546419467l/15804129._SY475_.jpg" alt="" width="150" ></img>
	<BookItem>
	<strong>The Picture of Dorian Gray</strong>
	<br/>
	Oscar Wilde
	</BookItem>
	</a>

	<a class="grid-img" href="https://www.goodreads.com/book/show/78411.The_Bad_Beginning?from_search=true">
	<img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490085391l/78411._SX318_.jpg" alt="" width="150" ></img>
	<BookItem>
	<strong>A Series of Unfortunate Events</strong>
	<br/>
	Lemony Snicket
	</BookItem>
	</a>


	</BookShelf>

</PageGrid1>









<PageGrid2>

<PortfolioTitle>
MUSIC
</PortfolioTitle>

<BookShelf>

<a class="grid-img" href="https://open.spotify.com/album/3Yko2SxDk4hc6fncIBQlcM">
<img width="150" src="https://66.media.tumblr.com/96ebafe90ed128887c54f062b31601ee/tumblr_pwrvr8RJVr1taz7avo1_640.jpg" frameborder="0" allowtransparency="true" allow="encrypted-media"></img>
	<Item>
	<strong>A Seat at the Table</strong>
	<br/>
	Solange
	</Item>
</a>

<a class="grid-img" href="https://open.spotify.com/album/1DK7dxeuo9R1Ma0iaZBz3f">
<img width="150" src="https://img.discogs.com/qSzFlHvo8ZGGjYNW5-IvpW6kFiI=/fit-in/526x526/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4628770-1370408297-1529.jpeg.jpg" frameborder="0" allowtransparency="true" allow="encrypted-media"></img>
	<Item>
	<strong>Avalanche</strong>
	<br/>
	Quadron
	</Item>
</a>

<a class="grid-img" href="https://open.spotify.com/album/4oZPvPBdbo9MNveG5BtL2Z">
<img width="150" src="https://cdn-s3.allmusic.com/release-covers/500/0000/146/0000146568.jpg" frameborder="0" allowtransparency="true" allow="encrypted-media"></img>
	<Item>
	<strong>Grace</strong>
	<br/>
	Jeff Buckley
	</Item>
</a>

<a class="grid-img" href="https://open.spotify.com/artist/6evmYxFbDSIHilUaYC9MhL">
<img width="150" src="https://img.discogs.com/Fz61HkEu6iZQ6E92kZQZ5aV3NUY=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12856627-1543267181-9785.jpeg.jpg" frameborder="0" allowtransparency="true" allow="encrypted-media"></img>
	<Item>
	<strong>The Wonder Land</strong>
	<br/>
	Jaurim
	</Item>
</a>

<a class="grid-img" href="https://open.spotify.com/album/7L6gqLdAo3t6DOJKiVInks">
<img width="150" src="http://1.bp.blogspot.com/-SKlqQbJnBX8/UymMsNXoW0I/AAAAAAAAECM/2jEA3caTX-s/s1600/cover.png" frameborder="0" allowtransparency="true" allow="encrypted-media"></img>
	<Item>
	<strong>Gemini</strong>
	<br/>
	Yoon Mirae
	</Item>
</a>

</BookShelf>

	</PageGrid2>

	<PageGrid2>

<PortfolioTitle>
MOVIES
</PortfolioTitle>

<BookShelf>

<a class="grid-img" href="https://www.imdb.com/title/tt0133093/">
<img width="150" src="http://barkerhost.com/wp-content/uploads/sites/4/2019/03/gynBNzwyaHKtXqlEKKLioNkjKgN-1.jpg" frameborder="0" allowtransparency="true" allow="encrypted-media"></img>
	<Item>
	<strong>The Matrix</strong>
	</Item>
</a>

<a class="grid-img" href="https://www.imdb.com/title/tt0457430/?ref_=nv_sr_1?ref_=nv_sr_1">
<img width="150" src="https://m.media-amazon.com/images/M/MV5BMTU3ODg2NjQ5NF5BMl5BanBnXkFtZTcwMDEwODgzMQ@@._V1_SY1000_CR0,0,679,1000_AL_.jpg" frameborder="0" allowtransparency="true" allow="encrypted-media"></img>
	<Item>
	<strong>Pan's Labyrinth</strong>
	</Item>
</a>

<a class="grid-img" href="https://www.imdb.com/title/tt0424136/?ref_=nv_sr_1?ref_=nv_sr_1">
<img width="150" src="https://m.media-amazon.com/images/M/MV5BMTc0MzgzNTI3N15BMl5BanBnXkFtZTcwNDk3MDIzMQ@@._V1_SY1000_SX675_AL_.jpg" frameborder="0" allowtransparency="true" allow="encrypted-media"></img>
	<Item>
	<strong>Hard Candy</strong>
	</Item>
</a>

<a class="grid-img" href="https://www.imdb.com/title/tt0054988/?ref_=nv_sr_1?ref_=nv_sr_1">
<img width="150" src="https://m.media-amazon.com/images/M/MV5BNTBlZjE2OGUtNmI5MS00ZjhkLWFmZmMtYmIxOWE2MTMxYTZlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,655,1000_AL_.jpg" frameborder="0" allowtransparency="true" allow="encrypted-media"></img>
	<Item>
	<strong>Homicidal</strong>
	</Item>
</a>

<a class="grid-img" href="https://www.imdb.com/title/tt0097576/?ref_=nv_sr_1?ref_=nv_sr_1">
<img width="150" src="https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,678,1000_AL_.jpg" frameborder="0" allowtransparency="true" allow="encrypted-media"></img>
	<Item>
	<strong>Indiana Jones and the Last Crusade</strong>
	</Item>
</a>

<a class="grid-img" href="https://www.imdb.com/title/tt0058279/?ref_=nv_sr_1?ref_=nv_sr_1">
<img width="150" src="https://m.media-amazon.com/images/M/MV5BZmM1ZmRkMjItZjc3Ny00ZWQzLWFhYmUtMWE0Y2QwOWY0MTMxXkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_SY1000_CR0,0,703,1000_AL_.jpg" frameborder="0" allowtransparency="true" allow="encrypted-media"></img>
	<Item>
	<strong>Kwaidan</strong>
	</Item>
</a>

</BookShelf>

	</PageGrid2>






	<PageGrid2>

<PortfolioTitle>
VIDEOS
</PortfolioTitle>

<Shelf>

<a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS">
<iframe width="210" height="117.5" src="https://www.youtube.com/embed/9AThycGCakk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	<Item>
	<strong>Life Lessons From 100-Year-Olds</strong>
	</Item>
</a>

<a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS">
<iframe width="210" height="117.5" src="https://www.youtube.com/embed/ltun92DfnPY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	<Item>
	<strong>To This Day</strong>
	</Item>
</a>

<a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS">
<iframe width="210" height="117.5" src="https://www.youtube.com/embed/-8RhNMRyKG0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<Item>
	<strong>Surviving Schizphrenia</strong>
	</Item>
</a>

<a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS">
<iframe width="210" height="117.5" src="https://www.youtube.com/embed/eJYn4uX98IE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>	<Item>
	<strong>Multiracial Experiences</strong>
	</Item>
</a>

<a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS">
<iframe width="210" height="117.5" src="https://www.youtube.com/embed/RLTgnOuYb6o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<Item>
	<strong>3 Questions You Must Ask Yourself</strong>
	</Item>
</a>

<a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS">
<iframe width="210" height="117.5" src="https://www.youtube.com/embed/m6dCxo7t_aE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>	<Item>
	<strong>The Five Major World Religions</strong>
	</Item>
</a>

<a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS">
<iframe width="210" height="117.5" src="https://www.youtube.com/embed/afvN6se3Yug" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>	<Item>
	<strong>Forgiveness</strong>
	</Item>
</a>

<a class="grid-img" href="https://dribbble.com/shots/6839300-Lumii-iOS">
<iframe width="210" height="117.5" src="https://www.youtube.com/embed/iCvmsMzlF7o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<Item>
	<strong>Power of Vulnerability</strong>
	</Item>
</a>

</Shelf>

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

const PageGrid1 = styled.div`
	display: grid;
	margin-top: -250px;
	margin-bottom: -50px;
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

const BookShelf = styled.div`
display: grid;
grid-template-columns: repeat(6, 0fr);
grid-template-rows: repeat(6, 0fr);
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

const BookItem = styled.div`
margin-bottom: 10px;
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

const Shelf = styled.div`
display: grid;
grid-template-columns: repeat(4, 0fr);
grid-template-rows: repeat(4, 0fr);
margin-bottom: 20px;
grid-gap: 5px;
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
margin-bottom: 10px;
margin-top: -30px;
`;

const ToolItem = styled.div`
margin-bottom: 10px;
margin-top: -30px;
`;


const ToolShelf = styled.div`
display: grid;
grid-template-columns: repeat(9, 1fr);
grid-template-rows: repeat(9, 0fr);
margin-bottom: 20px;
grid-gap: 40px;
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




export default MyRecommendationsPage

