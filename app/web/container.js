import {connect} from 'react-redux';

import {WebApp} from './components/App';
import {
	mapStateToProps,
	mapDispatchToProps
} from '../utils';

export const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(WebApp);