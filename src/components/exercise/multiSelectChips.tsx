import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Chip } from "@material-ui/core";
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            maxWidth: 300,
        },
        chips: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        chip: {
            margin: 2,
        },
        noLabel: {
            marginTop: theme.spacing(3),
        },
    }),
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

// const names = [
//     'Oliver Hansen',
//     'Van Henry',
//     'April Tucker',
//     'Ralph Hubbard',
//     'Omar Alexander',
//     'Carlos Abbott',
//     'Miriam Wagner',
//     'Bradley Wilkerson',
//     'Virginia Andrews',
//     'Kelly Snyder',
// ];

function getStyles(name: string, values: string[], theme: Theme) {
    return {
        fontWeight:
            values.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelect(props: { name: string, selectedValues: string[], allValues: string[], onChange: any }) {
    const classes = useStyles();
    //const [personName, setPersonName] = React.useState<string[]>(props.values);

    // const onChange = () => setPersonName(props.values)
    // const onChange = () => console.log("hello")
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
                    MenuProps={MenuProps}
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
