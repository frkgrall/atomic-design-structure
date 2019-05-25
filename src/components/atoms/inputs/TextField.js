import React from "react"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
	container: {}
})

const TextField = (props) => {
	const { classes } = props

	return <div className={classes.container}>TextField</div>
}

export default withStyles(styles)(TextField)
