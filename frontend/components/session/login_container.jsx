import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import LogInForm from './login';


const mSP = ({ errors }) => ({
	formType: 'login',
	errors: errors.sessionErrors,
});


const mDP = dispatch => ({
	login: user => dispatch(login(user)),
	receiveErrors: errors => dispatch(receiveErrors(errors)),
});


export default connect(mSP, mDP)(LogInForm);