import React, { FunctionComponent } from 'react';
import { ICommunication } from "../../types/communication";

export const Communication: FunctionComponent<{comm: ICommunication}> = (props) => (
    <div key={props.comm._id}>
        <h2>Communications:</h2>
        <pre>{JSON.stringify(props.comm, null, 4)}</pre>
    </div>
)
