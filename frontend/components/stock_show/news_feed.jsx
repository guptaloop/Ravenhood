import React from 'react';


export const NewsFeed = () => {

	
	return (
		<div className="news-feed-div">
			
			<h1 className="news-header">News</h1>
			
			<div className="news-article">
				<div className="article-text">
					<h5>The Citadel, date</h5>
					<a href="https://awoiaf.westeros.org/index.php/Tywin_Lannister">LINK to Article</a>
					<h5>ø count</h5>
				</div>
				<img className="news-img" src={window.images.mountain_bev} />
			</div>
			
			<div className="news-article">ARTICLE</div>
			
			<div className="news-article">ARTICLE</div>

		</div>

	);
};