import React, { Component } from 'react';
import Item from '../shared/Item';
import Button from '../shared/Button';
import './Conditions.css';

class Conditions extends Component {
	constructor(props) {
		super(props)
		const characters = this.importAll(require.context('../../media/characters', false, /.png$/));
		const karts = this.importAll(require.context('../../media/karts', false, /.png$/));
		const wheels = this.importAll(require.context('../../media/wheels', false, /.png$/));
		const gliders = this.importAll(require.context('../../media/gliders', false, /.png$/));
		this.state = {
			targetScore: this.generateTargetScore(),
			character: characters[Math.floor(Math.random() * characters.length)],
			kart: karts[Math.floor(Math.random() * karts.length)],
			wheels: wheels[Math.floor(Math.random() * wheels.length)],
			glider: gliders[Math.floor(Math.random() * gliders.length)]
		}
	}

	generateTargetScore() {
		return Math.floor(Math.random() * 30) + 50
	}

	importAll(r) {
		return r.keys().map((item) => {
			return { name: item.replace('.png', '').replace('./', ''), image: r(item) }
		});
	}

	render() {
		return (
			<div className="grid-container">
				<Item primary className="score">
					{this.state.targetScore}
				</Item>
				<Item primary className="character">
					<img src={this.state.character.image} alt={this.state.character.name} />
				</Item>
				<Item className="kart">
					<img src={this.state.kart.image} alt={this.state.kart.name} />
				</Item>
				<Item className="wheels">
					<img src={this.state.wheels.image} alt={this.state.wheels.name} />
				</Item>
				<Item className="glider">
					<img src={this.state.glider.image} alt={this.state.glider.name} />
				</Item>
				<Button className="footer" onClick={() => this.setState({ targetScore: this.generateTargetScore() })}>Generate</Button>
			</div>
		);
	}
}

export default Conditions;
