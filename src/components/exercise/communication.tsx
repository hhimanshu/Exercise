import { Grid } from "@material-ui/core";
import React, { FunctionComponent } from 'react';
import { ICommunication } from "../../types/communication";
import { PreviousCommunications } from "./previousCommunication";
import { LatestCommunication } from "./latestCommunication"

export const Communication: FunctionComponent<{ comm: ICommunication }> = (props) => (
    <div key={props.comm._id}>
        <Grid container>
            <Grid item xs={12}><LatestCommunication comm={props.comm} /></Grid>
            <Grid item xs={12}><PreviousCommunications threads={props.comm.publish_history} /></Grid>
        </Grid>
    </div>
)