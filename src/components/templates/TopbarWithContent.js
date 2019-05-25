import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Topbar from "components/organisms/Topbar"

const styles = (theme) => ({
	container: {}
})

const TopbarWithContent = (props) => {
	const { classes, content } = props

	return (
		<div className={classes.container}>
			<Topbar />
			{content}
		</div>
	)
}

export default withStyles(styles)(TopbarWithContent)
