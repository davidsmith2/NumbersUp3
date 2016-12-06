import React, {Component} from 'react';
import {Modal, Text, View} from 'react-native';

import {styles} from '../styles';

export const Dialog = (props) => {
	function renderContent(content) {
		if (typeof content === 'string') {
			return (<Text style={styles.helpers.textAlign('center')}>{content}</Text>);
		}
		return content;
	}
	return (
		<Modal 
			animationType='fade'
			transparent={true}
			visible={props.visible || true}
			style={[styles.helpers.flexDirection('column'), styles.dialog.container]}
		>
			<View style={[styles.helpers.flexDirection('column'), styles.dialog.modal]}>
				<View style={styles.dialog.modalContent}>
					<View style={[styles.dialog.modalHeader, styles.helpers.marginBottom(20)]}>
						{renderContent(props.headerContent)}
					</View>
					<View style={[styles.dialog.modalBody, styles.helpers.marginBottom(20)]}>
						{renderContent(props.bodyContent)}
					</View>
					<View style={[styles.helpers.flexDirection('row'), styles.dialog.modalFooter]}>
						{renderContent(props.footerContent)}
					</View>
				</View>
			</View>
		</Modal>
	);
};