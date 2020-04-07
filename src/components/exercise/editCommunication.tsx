import { Button, createStyles, Dialog, IconButton, TextField, Theme, Typography, withStyles, WithStyles } from '@material-ui/core';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { ICommunication } from "../../types/communication";
import MultipleSelect from './multiSelectChips';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export const EditCommunication = (props: { onClose: any, onSave: any, currentComm: ICommunication }) => {
    const [draftComm, setDraftComm] = useState<ICommunication>(props.currentComm);
    const onSaveClick = () => props.onSave(draftComm)
    const onSummaryChange = (e: ChangeEvent<HTMLInputElement>) => {
        const updatedComm = Object.assign({}, draftComm, { [e.target.name]: e.target.value })
        setDraftComm(updatedComm)
    }

    const handleMultiChange = (e: React.ChangeEvent<{ name: string, value: unknown }>) => {
        const updatedComm = Object.assign({}, draftComm, { [e.target.name]: e.target.value as string[] })
        setDraftComm(updatedComm)
    };

    /* For logging purposes */
    useEffect(() => {
        console.log(JSON.stringify(draftComm, null, 4))
    }, [draftComm])

    return (
        <Dialog fullWidth disableBackdropClick maxWidth='xs' onClose={props.onClose} aria-labelledby="edit-communication-title" open>
            <DialogTitle id="edit-communication-title" onClose={props.onClose}>
                Editing Communication
        </DialogTitle>
            <DialogContent dividers>
                <TextField name="summary" label="Summary" defaultValue={draftComm.summary} onChange={onSummaryChange} />
                <MultipleSelect name="tags" selectedValues={draftComm.tags} allValues={props.currentComm.tags} onChange={handleMultiChange} />
                <MultipleSelect name="slack_channels" selectedValues={draftComm.slack_channels} allValues={props.currentComm.slack_channels} onChange={handleMultiChange} />
                <MultipleSelect name="emails" selectedValues={draftComm.emails} allValues={props.currentComm.emails} onChange={handleMultiChange} />
                <MultipleSelect name="phones" selectedValues={draftComm.phones} allValues={props.currentComm.phones} onChange={handleMultiChange} />
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={props.onClose} color="primary">Cancel</Button>
                <Button autoFocus onClick={onSaveClick} color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
}