import React from 'react'
import {render} from 'react-dom'

require( './tagLine.scss')

export default class TagLine extends React.Component {
	render () {
		return <h3 className="TagLine">{this.props.children}</h3>
	}
}