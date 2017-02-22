import React from 'react';
import {render} from 'react-dom';

import './tagLine.scss'

export default class TagLine extends React.Component {
	render () {
		return <h3 className="TagLine">{this.props.children}</h3>;
	}
}