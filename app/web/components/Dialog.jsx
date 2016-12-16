import React from 'react';
import Dialog from 'material-ui/Dialog';

import {
	DIALOG_CLASSNAME,
	DIALOG_CONTENT_CLASSNAME,
	DIALOG_TITLE_CLASSNAME,
	DIALOG_BODY_CLASSNAME,
	DIALOG_ACTIONS_CONTAINER_CLASSNAME
} from '../../core';

export const WebDialog = (props) => {
	return (
		<Dialog
			actions={props.actions}
			actionsContainerClassName={DIALOG_ACTIONS_CONTAINER_CLASSNAME}
			autoScrollBodyContent={props.autoScrollBodyContent || false}
			bodyClassName={props.bodyClassName || DIALOG_BODY_CLASSNAME}
			className={DIALOG_CLASSNAME}
			contentClassName={DIALOG_CONTENT_CLASSNAME}
			modal={props.modal}
			open={props.open}
			title={props.title}
			titleClassName={DIALOG_TITLE_CLASSNAME}
		>
			{props.bodyContent}
		</Dialog>
	);
};