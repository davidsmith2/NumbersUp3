import {connect} from 'react-redux';

import {NativeApp} from './components/App';
import {
	mapStateToProps,
	mapDispatchToProps
} from '../utils';

export const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NativeApp);
