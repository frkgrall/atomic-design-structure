import React from "react"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
	container: {}
})

const Title = (props) => {
	const { classes } = props

	return <div className={classes.container}>Title</div>
}

export default withStyles(styles)(Title)
