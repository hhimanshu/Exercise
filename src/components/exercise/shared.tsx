import React from 'react';
import { Chip, makeStyles } from "@material-ui/core"


export const DisplayPhones = (props: { phones: string[] }) => <ShowChips items={props.phones} />
export const DisplayTags = (props: { tags: string[] }) => <ShowChips items={props.tags} />
export const DisplayEmail = (props: { emails: string[] }) => <ShowChips items={props.emails} />
export const DisplaySlackChannels = (props: { channels: string[] }) => <ShowChips items={props.channels} />

const useStyles = makeStyles(theme => ({
    chips: {
        marginRight: theme.spacing(1),
    }
}))

const ShowChips = (props: { items: string[] }) => {
    const classes = useStyles()
    return <>
        {props.items.map((item, index) => <Chip className={classes.chips} key={index} label={item} variant="outlined" />)}
    </>
}