import React from 'react';

export const NewsFeed = () => {
	
	// call the fetchNews action from the StockShow container
	// => pass 'news' in as a prop in StockShow
	// => add 'news' as deconstructed prop above
	// => map over it and grab the necessary bits below
	// => add 'attribution link' -- powered by News org ...

	return (
		<div className="news-feed-div">
			
			<h1 className="news-header">News</h1>
			
			<a href="https://awoiaf.westeros.org/index.php/Tywin_Lannister"
			className="news-article">
				<div className="article-text">
					<h5>source, date</h5>
					<h2>Headline</h2>
					<h5>ø count</h5>
				</div>
				<img className="news-img" src={window.images.mountain_bev} />
			</a>

		</div>
	);
};