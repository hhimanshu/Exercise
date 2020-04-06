import React, { FunctionComponent } from 'react';
import { ICommunication } from "../../types/communication";


export const Communication: FunctionComponent<ICommunication> = ({ _id }) => (
    <p>Hello {_id}</p>
)


/**
 return <div key={comm._id}>
        <h2>Communications:</h2>
        <pre>{JSON.stringify(comm, null, 4)}</pre>
    </div>
 */