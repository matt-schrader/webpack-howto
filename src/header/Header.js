import React from 'react';
import {render} from 'react-dom';
import Title from './Title'
import TagLine from './TagLine'

import './header.scss'

export default class Header extends React.Component {
	render () {
		return (<header>
				<hgroup>
					<Title>Webpack/ES6</Title>
					<TagLine>Quick walk-through of building a ES6 app with Webpack</TagLine>
				</hgroup>
			</header>)
	}
}