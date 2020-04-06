import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { ICommunication, ICommHistory } from "../../types/communication";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid, Divider, makeStyles, Chip } from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
import { format, formatDistanceToNow } from "date-fns"

export const Communication: FunctionComponent<{ comm: ICommunication }> = (props) => (
    <div key={props.comm._id}>
        <Typography variant="h4" gutterBottom>Communications</Typography>
        <PreviousCommunications threads={props.comm.publish_history} />
    </div>
)

const PreviousCommunications = (props: { threads: ICommHistory[] }) => {
    const [selectedThread, setSelectedThread] = useState<string | false>(false)
    const onThreadClick = (thread: string) => (e: ChangeEvent<{}>, isExpanded: boolean) => {
        setSelectedThread(isExpanded ? thread : false)
    }

    if (props.threads.length < 1) return <h3>No Previous Communications</h3>

    const threadsByLatest = props.threads.slice().sort((t1, t2) => {
        return t2.created.$date - t1.created.$date
    })

    return <>
        <Typography variant="h5" gutterBottom>Previous Communications</Typography>
        <Grid container justify="center" spacing={1}>
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

const useThreadStyles = makeStyles(theme => ({
    chips: {
        marginRight: theme.spacing(1),
    }
}))

const ThreadSummary = (props: {
    publishDate: number,
    summary: string,
    tags: string[],
    emails: string[],
    phones: string[],
    slackChannels: string[]
}) => {
    const classes = useThreadStyles()
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
                <HeadingChildren title="Tags">
                    {props.tags.map((tag, index) => <Chip className={classes.chips} key={index} label={tag} variant="outlined" />)}
                </HeadingChildren>
            </Grid>
            <Grid item xs={12}>
                <HeadingChildren title="Emails">
                    {props.emails.map((email, index) => <Chip className={classes.chips} key={index} label={email} variant="outlined" />)}
                </HeadingChildren>
            </Grid>
            <Grid item xs={12}>
                <HeadingChildren title="Phone Numbers">
                    {props.phones.map((phone, index) => <Chip className={classes.chips} key={index} label={phone} variant="outlined" />)}
                </HeadingChildren>
            </Grid>
            <Grid item xs={12}>
                <HeadingChildren title="Slack Channels">
                    {props.slackChannels.map((channel, index) => <Chip className={classes.chips} key={index} label={channel} variant="outlined" />)}
                </HeadingChildren>
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
