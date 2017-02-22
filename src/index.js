import React from 'react';
import {render} from 'react-dom';
import Header from './header/Header'

import './index.scss'

class App extends React.Component {
	render () {
		return <div>
			<Header />
		</div>;
	}
}

render(<App/>, document.getElementById('app'));