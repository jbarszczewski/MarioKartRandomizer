import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Menu from './../menu/Menu'
import TargetScore from './../targetScore/TargetScore'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Menu />
					<Switch>
						<Route exact path='/' component={TargetScore} />
						<Route path='/score' component={TargetScore} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
