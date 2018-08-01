import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
	return (
		<div>
			<Link id="logo" to="/" activeclassname="active">MKR</Link>
			<Link id="score" to="/score" activeclassname="active">Target</Link>
		</div>
	);
};

export default Menu;
