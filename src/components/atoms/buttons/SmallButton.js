import React from "react"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
	container: {}
})

const SmallButton = (props) => {
	const { classes } = props

	return <div className={classes.container}>SmallButton</div>
}

export default withStyles(styles)(SmallButton)
