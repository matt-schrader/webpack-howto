import React, { Component } from 'react'
import {render} from 'react-dom'
import Header from './header/Header'
import Counter from './Counter'

require( './index.scss')

class App extends Component {
	render() {
		return (<div>
			<Header />
			<Counter />
		</div>)
	}
}

render(<App/>, document.getElementById('app'))