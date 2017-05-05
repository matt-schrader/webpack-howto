import React from 'react'
import {render} from 'react-dom'

import './title.scss'

export default class TagLine extends React.Component {
	render () {
		return <h1 className="Title">{this.props.children}</h1>
	}
}