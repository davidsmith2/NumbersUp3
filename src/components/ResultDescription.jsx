import React from 'react';

import {RESULT_DIALOG_DESCRIPTION} from '../core';

export const ResultDescription = (props) => {
	return <p>{RESULT_DIALOG_DESCRIPTION(props.secretNumber)}</p>
};
