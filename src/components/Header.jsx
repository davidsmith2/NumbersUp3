import React from 'react';

const styles = {
	container: {
		margin: '10px 0'
	},
	h1: {
		margin: 0,
		textAlign: 'center'
	}
};

export const Header = (props) => {
	return (
		<div className="header" key="header" style={styles.container}>
			<h1 style={styles.h1}>Numbers Up</h1>
		</div>
	);
};
