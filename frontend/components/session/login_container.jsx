import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LogInForm from './login';
import { login, receiveErrors } from '../../actions/session_actions';


const mSP = ({ errors }) => ({
	formType: 'login',
	errors: errors.sessionErrors,
});


const mDP = dispatch => ({
	login: user => dispatch(login(user)),
	receiveErrors: errors => dispatch(receiveErrors(errors)),
});


export default withRouter(connect(mSP, mDP)(LogInForm));