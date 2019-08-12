import React from 'react';
import { formatDate, formatTitle, getViewCount } from '../../util/custom_utils';

export default class NewsFeed extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const dashQueries = [
			'Westeros', 'George RR Martin', 'Kingslayer', 'Drogon', 'Khal Drogo', 'Beric Dondarrion', 'Myrcella', 'Pyat Pree', 'Ygritte', 'Lady Brienne'
		];
		
		const query = this.props.stock ?
			this.props.stock.youtubeQuery : 
			dashQueries[ Math.floor(Math.random() * dashQueries.length) ];
		this.props.fetchNewsVideos(query);
	}

	render() {
		const urls = this.props.videos.map(item => 
			`https://www.youtube.com/watch?v=${item.id.videoId}`
		);

		const displayVideos = this.props.videos.map((video, index) => (
			<a href={urls[index]} target="_blank"
				 className="news-video" key={video.etag}	>
				<div className="video-text">
					<div>
						<div className="video-channel-days-div">
							<h4 className="video-channel">{video.snippet.channelTitle}</h4>
							<h6 className="video-days">
								{formatDate(video.snippet.publishedAt)}d</h6>
						</div>
						<div>
							<h2 className="video-title">
								{formatTitle(video.snippet.title)}</h2>
						</div>
					</div>
					<div className="views-div">
						<img src={window.images.view_icon} className="view-icon"></img>
						<h5 className="view-count">{getViewCount()}</h5>
					</div>
				</div>
				<img className="news-img" src={video.snippet.thumbnails.high.url} />
			</a>
		));

		return (
			<div className="video-feed-div">
				<h1 className="video-header">News</h1>
				<div>{displayVideos}</div>
				{/* <div>MANAGE YOUR API USAGE !!!</div> */}
			</div>
		);
	};
};