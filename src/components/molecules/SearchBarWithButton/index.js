import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Label from "components/atoms/texts/Label"
import TextField from "components/atoms/inputs/TextField"
import BigButton from "components/atoms/buttons/BigButton"

const styles = (theme) => ({
	container: {}
})

const index = (props) => {
	const { classes } = props

	return (
		<div className={classes.container}>
			<div>
				<Label />
			</div>
			<div>
				<TextField />
				<BigButton />
			</div>
		</div>
	)
}

export default withStyles(styles)(index)
