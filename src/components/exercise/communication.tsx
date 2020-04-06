import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { ICommunication, ICommHistory } from "../../types/communication";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid } from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
import { format } from "date-fns"

export const Communication: FunctionComponent<{ comm: ICommunication }> = (props) => (
    <div key={props.comm._id}>
        <h2>Communications:</h2>
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
        <h3>Previous Communications:</h3>
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
                                    <Typography variant="caption" color="textSecondary">{format(thread.created.$date, "'published on' iiii")}</Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Coming Soon to your doors!
               </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
            })}
        </Grid>
    </>
}