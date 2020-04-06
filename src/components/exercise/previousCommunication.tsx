import { Divider, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid, makeStyles, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { format, formatDistanceToNow } from "date-fns";
import React, { ChangeEvent, useState } from 'react';
import { ICommHistory } from "../../types/communication";
import { DisplayEmails, DisplayPhones, DisplaySlackChannels, DisplayTags } from './shared';

export const PreviousCommunications = (props: { threads: ICommHistory[] }) => {
    const [selectedThread, setSelectedThread] = useState<string | false>(false)
    const onThreadClick = (thread: string) => (e: ChangeEvent<{}>, isExpanded: boolean) => {
        setSelectedThread(isExpanded ? thread : false)
    }

    if (props.threads.length < 1) return <h3>No Previous Communications</h3>

    const threadsByLatest = props.threads.slice().sort((t1, t2) => {
        return t2.created.$date - t1.created.$date
    })

    return <>
        <Grid container justify="center" spacing={1}>
            <Grid item xs={10}>
                <Typography variant="h5" align="center" gutterBottom>Previous Communications</Typography>
            </Grid>
            {threadsByLatest.map((thread, index) => {
                return <Grid item xs={10} >
                    <ExpansionPanel expanded={selectedThread === `${index}`} onChange={onThreadClick(`${index}`)}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMore />}
                            aria-controls={`${index}-summary`}
                            id={`${index}-header`}
                        >
                            <Grid container justify="center">
                                <Grid item>
                                    <Typography variant="subtitle1">{thread.summary}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <Typography variant="caption" color="textSecondary">{formatDistanceToNow(thread.created.$date, { addSuffix: true, includeSeconds: true })}</Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <ThreadSummary publishDate={thread.created.$date}
                                summary={thread.summary}
                                tags={thread.tags}
                                emails={thread.emails}
                                phones={thread.phones}
                                slackChannels={thread.slack_channels}
                            />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
            })}
        </Grid>
    </>
}

const ThreadSummary = (props: {
    publishDate: number,
    summary: string,
    tags: string[],
    emails: string[],
    phones: string[],
    slackChannels: string[]
}) => {
    return <>
        <Grid container>
            <Grid item xs={12}>
                <HeadingChildren title="Publish Date">
                    <Typography variant="body2">{format(props.publishDate, "PPpp")}</Typography>
                </HeadingChildren>
            </Grid>
            <Grid item xs={12}>
                <HeadingChildren title="Summary">
                    <Typography variant="body2">{props.summary}</Typography>
                </HeadingChildren>
            </Grid>
            <Grid item xs={12}>
                <HeadingChildren title="Tags"><DisplayTags tags={props.tags} /></HeadingChildren>
            </Grid>
            <Grid item xs={12}>
                <HeadingChildren title="Emails"><DisplayEmails emails={props.emails} /></HeadingChildren>
            </Grid>
            <Grid item xs={12}>
                <HeadingChildren title="Phone Numbers"><DisplayPhones phones={props.phones} /></HeadingChildren>
            </Grid>
            <Grid item xs={12}>
                <HeadingChildren title="Slack Channels"><DisplaySlackChannels channels={props.slackChannels} /></HeadingChildren>
            </Grid>
        </Grid>
    </>
}


const useDividerStyles = makeStyles(theme => ({
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    }
}))

const HeadingChildren = (props: { title: string, children: any }) => {
    const classes = useDividerStyles();

    return <>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography variant="h6">{props.title}</Typography>
            </Grid>
            <Grid item xs={12}>
                {props.children}
            </Grid>

        </Grid>
        <Divider className={classes.divider} />
    </>
}
