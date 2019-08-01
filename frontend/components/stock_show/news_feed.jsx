import React from 'react';

class NewsFeed extends React.Component {
	constructor(props) {
		super(props);
	}

	// call the fetchNews action from the StockShow container
	// => pass 'news' in as a prop in StockShow
	// => add 'news' as deconstructed prop above
	// => map over it and grab the necessary bits below
	// => add 'attribution link' -- powered by News org ...

	componentWillMount() {
		this.props.fetchNewsVideos(this.props.stock.youtubeQuery);
	}

	render() {
		const urls = this.props.videos.map(item => 
			`https://www.youtube.com/watch?v=${item.id.videoId}`
		);
		// console.log(urls);

		return (
			<div className="news-feed-div">
				<h1 className="news-header">News</h1>
				<div>
					{this.props.videos.map(video => (
						<a key={video.etag} href={urls[0]} className="news-article">
							<div className="article-text">
								<h5>{video.snippet.channelTitle} {video.snippet.publishedAt}</h5>
								<h2>{video.snippet.title}</h2>
								<h5>ø count</h5>
							</div>
							<img className="news-img"
								src={video.snippet.thumbnails.high.url}/>
						</a>
					))}

				</div>
	
			</div>
		);
	};
};

export default NewsFeed;