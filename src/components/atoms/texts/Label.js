import React from "react"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
	container: {}
})

const Label = (props) => {
	const { classes } = props

	return <div className={classes.container}>Label</div>
}

export default withStyles(styles)(Label)
