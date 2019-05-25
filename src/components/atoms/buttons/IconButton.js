import React from "react"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
	container: {}
})

const IconButton = (props) => {
	const { classes } = props

	return <div className={classes.container}>IconButton</div>
}

export default withStyles(styles)(IconButton)
