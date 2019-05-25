import React from "react"
import { withStyles } from "@material-ui/core/styles"
import IconButton from "components/atoms/buttons/IconButton"
import Title from "components/atoms/texts/Title"
import SearchBarWithButton from "components/molecules/SearchBarWithButton"

const styles = (theme) => ({
	container: {
		height: theme.spacing.unit * 6,
		border: "1px solid grey",
		display: "flex"
	}
})

const Topbar = (props) => {
	const { classes } = props

	return (
		<div className={classes.container}>
			<Title>Bien beau ça</Title>
			<SearchBarWithButton />
			<IconButton />
			<IconButton />
			<IconButton />
		</div>
	)
}

export default withStyles(styles)(Topbar)
