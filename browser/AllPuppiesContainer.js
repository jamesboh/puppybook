import {connect} from 'react-redux';
import AllPuppies from './AllPuppies';

const mapStateToProps = function(state, ownProps) {
	return {
		allPuppies: state.allPuppies
	}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPuppies);