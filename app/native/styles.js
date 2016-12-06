import {Dimensions} from 'react-native';

const vw = (percentageWidth) => {
	return Dimensions.get('window').width * (percentageWidth / 100);
};

const vh = (percentageHeight) => {
	return Dimensions.get('window').height * (percentageHeight / 100);
};

const COLUMNS = 5;

const MARGIN = vw(0);

const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN;

export const styles = {
	app: {
		container: {
			padding: 20,
			overflow: 'scroll'
		}
	},
	dialog: {
		container: {
			display: 'flex',
		},
		modal: {
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
			flex: 1,
			justifyContent: 'center',
			padding: 40
		},
		modalContent: {
			backgroundColor: '#fff',
			padding: 20
		},
		modalHeader: {},
		modalBody: {},
		modalFooter: {
			alignItems: 'center',
			flexWrap: 'wrap',
			justifyContent: 'center'
		}
	},
	game: {
		header: {
			flex: 0,
			justifyContent: 'center', 
			marginBottom: 20
		},
		scoreboard: {
			justifyContent: 'space-between',
			marginBottom: 20
		},
		tiles: {
			flexDirection: 'row',
			marginBottom: 20,
			overflow: 'scroll'
		},
		grid: {
			flex: 1,
			flexWrap: 'wrap',
			flexDirection: 'row',
			justifyContent: 'center'
		},
		cell: {
			borderColor: 'black',
			borderStyle: 'solid',
			borderWidth: 1,
			height: 67,
			justifyContent: 'center',
			marginLeft: MARGIN,
			marginTop: MARGIN,
			width: vw(17)
		},
		buttons: {
			flex: 0,
			justifyContent: 'center'
		}
	},
	login: {
		textInput: {
			borderColor: 'gray',
			borderWidth: 1,
			height: 40
		}
	},
	helpers: {
		flexDirection: (value) => {
			return {
				flexDirection: value
			};
		},
		marginBottom: (value) => {
			return {
				marginBottom: value
			};
		},
		textAlign: (value) => {
			return {
				textAlign: value
			};
		}
	}
};