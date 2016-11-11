import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import {lightBlueA700} from 'material-ui/styles/colors';

import {
	RESULT_DIALOG_DESCRIPTION,
	RESULT_DIALOG_PROGRESS_LABEL
} from '../core';

export const ResultDescription = (props) => {
	const els = [];
	els.push(
		<div key="result-description-text" style={{marginBottom: '2em'}}>
			<p>{RESULT_DIALOG_DESCRIPTION(props.secretNumber)}</p>
		</div>
	);
	if (props.saving) {
		els.push(
			<div key="result-description-loading" style={{marginBottom: '2em'}}>
				<CircularProgress color={lightBlueA700} size={20} style={{marginRight: '0.5em'}}/>
				{RESULT_DIALOG_PROGRESS_LABEL}
			</div>
		);
	}
	return (<div>{els}</div>);
};
