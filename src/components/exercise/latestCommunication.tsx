import React, { FunctionComponent } from 'react';
import { ICommunication } from "../../types/communication"
import { Grid, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(7),
    }
}))
export const LatestCommunication: FunctionComponent<{ comm: ICommunication }> = (props) => {
    const classes = useStyles()

    return <Grid container justify="center" className={classes.root}>
        <Grid item xs={10}>
            <Typography variant="h5" align="center" gutterBottom>Latest Communication</Typography>
        </Grid>
    </Grid>
}