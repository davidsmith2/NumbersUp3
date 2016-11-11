import React from 'react';

import {styles} from '../styles';

export const Header = (props) => {
	return (
		<div className="header" key="header" style={styles.header.container}>
			<h1 style={styles.header.h1}>Numbers Up</h1>
		</div>
	);
};
