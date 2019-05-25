import React from "react"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
	container: {}
})

const BigButton = (props) => {
	const { classes } = props

	return <div className={classes.container}>BigButton</div>
}

export default withStyles(styles)(BigButton)
