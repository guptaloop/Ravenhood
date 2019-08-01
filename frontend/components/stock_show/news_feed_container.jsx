import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NewsFeed from './news_feed';
import { fetchNewsVideos } from '../../actions/stock_actions';


const mSP = ({ entities }) => ({
	videos: entities.newsVideos,
});

const mDP = dispatch => ({
	fetchNewsVideos: query => dispatch(fetchNewsVideos(query))
});

export default withRouter(connect(mSP, mDP)(NewsFeed));