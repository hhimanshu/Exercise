import React from 'react';
import { Chip, makeStyles, Grid, Typography } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
    chips: {
        marginRight: theme.spacing(1),
    }
}))

export const DisplayPhones = (props: { phones: string[] }) => <ShowChips items={props.phones} />
export const DisplayTags = (props: { tags: string[] }) => <ShowChips items={props.tags} />
export const DisplayEmails = (props: { emails: string[] }) => <ShowChips items={props.emails} />
export const DisplaySlackChannels = (props: { channels: string[] }) => <ShowChips items={props.channels} />


const ShowChips = (props: { items: string[] }) => {
    const classes = useStyles()
    return <>
        {props.items.map((item, index) => <Chip className={classes.chips} key={index} label={item} variant="outlined" />)}
    </>
}

export const Header = (props: { title: string, children?: any }) => (
    <Grid container justify="space-around">
        <Grid item xs={7} md={6}>
            <Typography variant="h5" align="center" gutterBottom>{props.title}</Typography>
        </Grid>
        <Grid item xs={3}>{props.children}</Grid>
    </Grid>
)