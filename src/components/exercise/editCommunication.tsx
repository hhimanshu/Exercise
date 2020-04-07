import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { ICommunication } from "../../types/communication"

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

export const EditCommunication = (props: { onClose: any, onSave: any, currentComm: ICommunication | {} }) => {
    const draftComm = Object.assign({}, props.currentComm);
    const onSaveClick = () => props.onSave(draftComm)

    return (
        <div>
            <Dialog onClose={props.onClose} aria-labelledby="customized-dialog-title" open>
                <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
                    Editing Comm
        </DialogTitle>
                <DialogContent dividers>
                    <pre>{JSON.stringify(draftComm, null, 4)}</pre>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.onClose} color="primary">Cancel</Button>
                    <Button autoFocus onClick={onSaveClick} color="primary">Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
