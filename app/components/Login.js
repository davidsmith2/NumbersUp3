import React from 'react';
import {extend} from 'lodash';

export class Login extends React.Component {
    static getContextTypes = (childContextTypes = {}) => {
        const parentContextTypes = {
            login: React.PropTypes.object.isRequired
        };
        return extend({}, parentContextTypes, childContextTypes);
    };

    constructor(props, context) {
    	super(props, context);
    	this.login = this.login.bind(this);
    }

    componentWillMount() {
    	this.setState({
    		user: ''
    	});
    }

	login() {
		this.context.login.login(this.state.user);
	}
}
