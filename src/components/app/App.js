import React, { Component } from 'react';
import Item from '../shared/Item';
import Button from '../shared/Button';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.characters = this.importAll(require.context('../../media/characters', false, /.png$/));
		this.karts = this.importAll(require.context('../../media/karts', false, /.png$/));
		this.wheels = this.importAll(require.context('../../media/wheels', false, /.png$/));
		this.gliders = this.importAll(require.context('../../media/gliders', false, /.png$/));
		this.state = this.generateState("pro");

		this.modeChanged = this.modeChanged.bind(this);
	}

	generateState(mode) {
		let newTargetScore;
		switch (mode) {
		case "john":
			newTargetScore = 65;
			break;
		case "alejandro":
			newTargetScore = 45;
			break;
		default:
			newTargetScore = Math.floor(Math.random() * 30) + 50;
			break;
		}
		return {
			targetScore: newTargetScore,
			character: this.characters[Math.floor(Math.random() * this.characters.length)],
			kart: this.karts[Math.floor(Math.random() * this.karts.length)],
			wheels: this.wheels[Math.floor(Math.random() * this.wheels.length)],
			glider: this.gliders[Math.floor(Math.random() * this.gliders.length)],
			mode: mode
		}
	}

	importAll(r) {
		return r.keys().map((item) => {
			return { name: item.replace('.png', '').replace('./', ''), image: r(item) }
		});
	}

	modeChanged(e) {
		this.setState(this.generateState(e.target.value));
	}

	render() {
		return (
			<div className="grid-container">
				<div className="header">Mario Kart DX8 Randomizer</div>
				<div className="options">
					<select onChange={this.modeChanged} defaultValue="pro">
						<option value="pro">Pro</option>
						<option value="john">John</option>
						<option value="alejandro">Alejandro</option>
					</select>
				</div>
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
				<Button className="footer" onClick={() => this.setState(this.generateState(this.state.mode))}>Randomize</Button>
			</div>
		);
	}
}

export default App;
