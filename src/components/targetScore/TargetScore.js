import React, { Component } from 'react';

class TargetScore extends Component {
	constructor(props) {
		super(props)
		this.state = { targetScore: this.generateTargetScore() }
	}

	generateTargetScore() {
		return Math.floor(Math.random() * 30) + 60
	}

	render() {
		return (
			<div>
				{this.state.targetScore}
				<button onClick={() => this.setState({ targetScore: this.generateTargetScore() })}>Generate</button>
			</div>
		);
	}
}

export default TargetScore;
