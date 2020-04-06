import { Typography } from "@material-ui/core";
import React, { FunctionComponent } from 'react';
import { ICommunication } from "../../types/communication";
import {PreviousCommunications} from "./previousCommunication"

export const Communication: FunctionComponent<{ comm: ICommunication }> = (props) => (
    <div key={props.comm._id}>
        <Typography variant="h4" gutterBottom>Communications</Typography>
        <PreviousCommunications threads={props.comm.publish_history} />
    </div>
)