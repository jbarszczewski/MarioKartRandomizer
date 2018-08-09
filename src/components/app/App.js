import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Menu from './../menu/Menu'
import Conditions from './../conditions/Conditions'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Menu />
					<Switch>
						<Route exact path='/' component={Conditions} />
						<Route path='/score' component={Conditions} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;
