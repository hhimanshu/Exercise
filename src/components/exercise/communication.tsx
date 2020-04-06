import React, { FunctionComponent } from 'react';
import { ICommunication, ICommHistory } from "../../types/communication";

export const Communication: FunctionComponent<{ comm: ICommunication }> = (props) => (
    <div key={props.comm._id}>
        <h2>Communications:</h2>
        <PreviousCommunications threads={props.comm.publish_history} />
    </div>
)

const PreviousCommunications = (props: { threads: ICommHistory[] }) => {
    if (props.threads.length < 1) return <h3>No Previous Communications</h3>

    const threadsByLatest = props.threads.slice().sort((t1, t2) => {
        return t2.created.$date - t1.created.$date
    })
    
    return <>
        <h3>Previous Communications:</h3>
        <pre>{JSON.stringify(threadsByLatest, null, 4)}</pre>
    </>
}