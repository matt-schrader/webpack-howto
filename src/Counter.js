import React, { Component } from 'react'

import './counter.scss'

export default class Counter extends Component {
	state = {
		time: 0
	}
	
	words = ["Splendid", "Spectacular", "Stupendous", "Amazings"]
	
	componentWillMount() {
		this.interval = setInterval(this.increment.bind(this), 1000)
	}
	
	componentWillUnmount() {
		clearInterval(this.interval)
	}
	
	increment() {
		let nextState = {
			time: this.state.time + 1
		}
		
		if (nextState.time % 3 === 0) {
			nextState = {
				...nextState,
				word: this.words[Math.floor(Math.random() * (this.words.length))] + "!!!"
			}
		}
		this.setState(nextState)
	}
	
	render() {
		return (<div className="Counter">
			<div className="time">You've been watching this for {this.state.time} seconds!</div>
			<div className="random-word">{this.state.word}</div>
			<div className="environment">{process.env.NODE_ENV}</div>
		</div>)
	}
}
