import {
	grey300,
	lightBlueA700
} from 'material-ui/styles/colors';
import Spacing from 'material-ui/styles/spacing';
import Transitions from 'material-ui/styles/transitions';
import Typography from 'material-ui/styles/typography';
import zIndex from 'material-ui/styles/zIndex';

import ColorManipulator from 'material-ui/utils/colorManipulator';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const muiTheme = getMuiTheme({
	fontFamily: 'Comic Sans, Comic Sans MS, Chalkboard, ChalkboardSE-Regular, Marker Felt, Purisa, URW Chancery L, cursive',
	palette: {},
	spacing: Spacing,
	transitions: Transitions,
	typography: Typography,
	zIndex: zIndex,
	raisedButton: {
		textTransform: 'none'
	},
	radioButton: {
		borderColor: grey300,
		checkedColor: lightBlueA700,
		labelColor: grey300
	}
});
