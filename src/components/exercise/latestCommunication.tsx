import { Chip, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import { format } from "date-fns";
import React, { FunctionComponent, useState, useEffect } from 'react';
import { ICommunication } from "../../types/communication";
import { EditCommunication } from './editCommunication';
import { DisplayEmails, DisplayPhones, DisplaySlackChannels, DisplayTags, Header } from './shared';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(7),
    },
    table: {
        minWidth: 700,
    },
}))

export const LatestCommunication: FunctionComponent<{ comm: ICommunication }> = (props) => {
    const classes = useStyles()
    const [currentComm, setCurrentComm] = useState<ICommunication | {}>({})
    const [isEditOn, setIsEditOn] = useState<boolean | false>(false)

    const toggleEditClick = () => setIsEditOn(!isEditOn)
    const onSave = (draftComm: ICommunication) => console.log(draftComm)

    useEffect(() => {
        if (isEditOn) {
            setCurrentComm(props.comm)
        }
    }, [isEditOn, props.comm])

    return <Grid container justify="center" className={classes.root}>
        {isEditOn &&
            <Grid item xs={10}>
                <EditCommunication currentComm={currentComm} onClose={toggleEditClick} onSave={onSave} />
            </Grid>
        }
        <Grid item xs={10}>
            <Header title="Latest Communication">
                <Chip
                    label="Edit Communication"
                    clickable
                    color="primary"
                    onClick={toggleEditClick}
                    icon={<EditIcon fontSize="small" />}
                    variant="outlined"
                />
            </Header>
        </Grid>
        <Grid item xs={10}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="latest communication">
                    <TableHead>
                        <TableRow>
                            <TableCell>Communication Key</TableCell>
                            <TableCell>Communication Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={"last_updated"}>
                            <TableCell component="th" scope="row">Last Updated</TableCell>
                            <TableCell>{format(props.comm.updated, "PPpp")}</TableCell>
                        </TableRow>
                        <TableRow key={"summary"}>
                            <TableCell component="th" scope="row">Summary</TableCell>
                            <TableCell>{props.comm.summary}</TableCell>
                        </TableRow>
                        <TableRow key={"tags"}>
                            <TableCell component="th" scope="row">Tags</TableCell>
                            <TableCell><DisplayTags tags={props.comm.tags} /></TableCell>
                        </TableRow>
                        <TableRow key={"emails"}>
                            <TableCell component="th" scope="row">Emails</TableCell>
                            <TableCell><DisplayEmails emails={props.comm.emails} /></TableCell>
                        </TableRow>
                        <TableRow key={"phones"}>
                            <TableCell component="th" scope="row">Phone Numbers</TableCell>
                            <TableCell><DisplayPhones phones={props.comm.phones} /></TableCell>
                        </TableRow>
                        <TableRow key={"channels"}>
                            <TableCell component="th" scope="row">Slack Channels</TableCell>
                            <TableCell><DisplaySlackChannels channels={props.comm.slack_channels} /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </Grid>
}