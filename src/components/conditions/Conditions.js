import React, { Component } from 'react';
import Item from '../shared/Item';
import Button from '../shared/Button';
import './Conditions.css';

class Conditions extends Component {
	constructor(props) {
		super(props)
		this.state = {
			targetScore: this.generateTargetScore(),
			character: 'Waluigi',
			kart: 'Pipe Kart',
			wheels: 'Rollers',
			glider: 'Standard'
		}
	}

	generateTargetScore() {
		return Math.floor(Math.random() * 30) + 50
	}

	render() {
		return (
			<div className="grid-container">
				<Item primary className="score">
					{this.state.targetScore}
				</Item>
				<Item primary className="character">
					{this.state.character}
				</Item>
				<Item className="kart">
					{this.state.kart}
				</Item>
				<Item className="wheels">
					{this.state.wheels}
				</Item>
				<Item className="glider">
					{this.state.glider}
				</Item>
				<Button className="footer" onClick={() => this.setState({ targetScore: this.generateTargetScore() })}>Generate</Button>
			</div>
		);
	}
}

export default Conditions;
