import React, { FunctionComponent } from 'react';
import { ICommunication } from "../../types/communication"
import { format } from "date-fns"
import { Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from "@material-ui/core"
import { DisplayTags, DisplayEmails, DisplayPhones, DisplaySlackChannels, Header } from './shared';
import EditIcon from '@material-ui/icons/Edit';

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

    return <Grid container justify="center" className={classes.root}>
        <Grid item xs={10}>
            <Header title="Latest Communication">
                <Chip
                    label="Edit Communication"
                    clickable
                    color="primary"
                    onClick={() => console.log("edit clicked")}
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