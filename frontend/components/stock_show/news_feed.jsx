import React from 'react';
import { formatDate } from '../../util/utils';

class NewsFeed extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.fetchNewsVideos(this.props.stock.youtubeQuery);
	}

	render() {
		const urls = this.props.videos.map(item => 
			`https://www.youtube.com/watch?v=${item.id.videoId}`
		);

		const displayVideos = this.props.videos.map((video, index) => (
			<a href={urls[index]} className="news-article" key={video.etag}>
				<div className="article-text">
					<div className="video-title-days-div">
						<h4 className="video-title">{video.snippet.channelTitle}</h4>
						<h6 className="video-days">
							{formatDate(video.snippet.publishedAt)}d</h6>
					</div>
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