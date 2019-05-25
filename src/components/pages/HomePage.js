import React from "react"
import { withStyles } from "@material-ui/core/styles"
import TopbarWithContent from "components/templates/TopbarWithContent"

const styles = (theme) => ({
	container: {}
})

const HomePage = (props) => {
	const { classes } = props

	return <TopbarWithContent content={<div>Coucou !</div>} />
}

export default withStyles(styles)(HomePage)
