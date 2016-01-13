import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as BlackjackActions from '../actions/Actions';
import BlackjackGame from './../components/blackjack-game/index';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(BlackjackActions, dispatch)
}

export default connect((state) => state, mapDispatchToProps)(BlackjackGame);
