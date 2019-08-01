import React from 'react';

class NewsFeed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		this.props.fetchNewsVideos(this.props.stock.youtubeQuery);
	}

	render() {
		const urls = this.props.videos.map(item => 
			`https://www.youtube.com/watch?v=${item.id.videoId}`
		);

		const displayVideos = this.props.videos.map((video, index) => (
			<a key={video.etag} href={urls[index]} className="news-article">
				<div className="article-text">
					<h5>{video.snippet.channelTitle} {video.snippet.publishedAt}</h5>
					<h2>{video.snippet.title}</h2>
					{/* need to fix this below */}
					<h5>PLACEHOLDER</h5>
				</div>
				<img className="news-img" src={video.snippet.thumbnails.high.url} />
			</a>
		));

		return (
			<div className="news-feed-div">
				<h1 className="news-header">News</h1>
				<div>{displayVideos}</div>
			</div>
		);
	};
};

export default NewsFeed;