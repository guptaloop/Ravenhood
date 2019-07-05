import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import SignUpForm from './signup';

// state is destructured as errors, takes ownProps as an optional argument
const mSP = ({ errors }) => ({
	formType: 'signup',
	errors: errors.sessionErrors
});

// receives and sends dispatches from / to the store
const mDP = dispatch => ({
	signup: user => dispatch(signup(user)),
	receiveErrors: errors => dispatch(receiveErrors(errors))
});


export default withRouter(connect(mSP, mDP)(SignUpForm));
// SignUpForm will receive 'formType', 'errors', 'signup', and 'receiveErrors' as props