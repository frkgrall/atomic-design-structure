import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import HomePage from "components/pages/HomePage"

const Routes = (props) => {
	return (
		<Router>
			<div>
				<Route path="/" exact component={HomePage} />
			</div>
		</Router>
	)
}

export default Routes
