import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as BlackjackActions from '../actions/BlackjackActions';
import BlackjackApp from './BlackjackApp';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(BlackjackActions, dispatch)
}

export default connect((state) => state, mapDispatchToProps)(BlackjackApp)