import {
	grey300,
	grey200,
	grey100
} from 'material-ui/styles/colors';

export const styles = {
	app: {},
	board: {},
	buttons: {
		container: {
			marginTop: '20px',
			textAlign: 'center'
		}
	},
	game: {
		paper: {
			width: '500px',
			overflow: 'auto',
			padding: '20px 19px'
		},
		header: {
			marginBottom: '20px'
		}
	},
	header: {
		container: {
			marginBottom: '20px'
		},
		h1: {
			margin: 0,
			textAlign: 'center'
		}
	},
	login: {},
	result: {},
	resultDescription: {},
	scoreboard: {
		container: {
			marginTop: '20px'
		},
		tableHeaderColumn: {
			backgroundColor: grey200,
			textAlign: 'center'
		},
		tableRowColumn: {
			backgroundColor: grey100,
			textAlign: 'center'
		},
		badge: {
			root: {
				display: 'block', 
				paddingLeft: '3em'
			},
			badge: {
				width: '42px',
				height: '42px',
				left: 0,
				top: '1em'
			}
		}
	},
	settings: {
		subheader: {
			color: grey300
		}
	},
	splash: {},
	tiles: {
		container: {
			margin: '20px 0'
		},
		gridListRoot: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around'
		},
		gridList: {
			height: '100%',
			padding: 0,
			width: '100%'
		},
		gridTile: {
			boxShadow: `
			    1px 0 0 0 #212121,
			    0 1px 0 0 #212121,
			    1px 1px 0 0 #212121,
			    1px 0 0 0 #212121 inset,
			    0 1px 0 0 #212121 inset
			`
		}
	}
};
