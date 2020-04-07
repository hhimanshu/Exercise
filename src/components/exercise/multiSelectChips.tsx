import { Chip } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    formControl: {
        marginTop: theme.spacing(2),
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
}));

function getStyles(name: string, values: string[], theme: Theme) {
    const isSelected = values.indexOf(name) > -1
    return {
        fontWeight:
            isSelected
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        backgroundColor:
            isSelected
                ? theme.palette.primary.main
                : theme.palette.common.white,
        color:
            isSelected
                ? theme.palette.primary.contrastText
                : theme.palette.common.black
    };
}

export default function MultipleSelect(props: { name: string, selectedValues: string[], allValues: string[], onChange: any }) {
    const classes = useStyles();
    const label = props.name.charAt(0).toUpperCase() + props.name.slice(1)

    const theme = useTheme();
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel>{label}</InputLabel>
                <Select
                    multiple
                    name={props.name}
                    value={props.selectedValues}
                    onChange={props.onChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                        <div className={classes.chips}>
                            {(selected as string[]).map((value) => (
                                <Chip key={value} label={value} className={classes.chip} />
                            ))}
                        </div>
                    )}
                >
                    {props.allValues.map((name) => (
                        <MenuItem key={name} value={name} style={getStyles(name, props.selectedValues, theme)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
