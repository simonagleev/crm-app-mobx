import * as React from 'react';

import { Avatar, Box, Chip, useTheme } from '@mui/material';

import IndicatorCard from '../../components/common/IndicatorCard';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        position: 'relative',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'stretch'
    },
    container: {
        flex: 1,
    },

});

export interface IValue {
    label: string;
    color: string;
    num: number;
    indexSpare: number;
    icon: any;
}

interface ICardProps {
    idx?: number;
    obj?: Record<string, IValue>;
    num: number;
    upperIndex: number;
    color: string;
}

export const HomePage = ({
    idx,
    num,
    obj = {},
    upperIndex,
    color,
}: ICardProps) => {
    const classes = useStyles();
    // const theme = useTheme();
    const {
        label,
        icon,
    } = obj[`value${idx}`];

    return (
        <Paper className={classes.root}>
            <Stack
                className={classes.container}
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
            >
                <Stack 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"                   
                >
                    <Avatar>
                        {icon}
                    </Avatar>
                </Stack>
                
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0}
                    sx={{
                        '& .MuiChip-outlined': {
                            border: `1px solid ${color}`
                        }
                    }}
                 >
                    <Box
                        style={{
                            flex: 1,
                            height: '2px',
                            background: color,
                        }}
                    />
                    <Chip  variant="outlined" label={label} style={{color}} />
                    <Box
                        style={{
                            flex: 1,
                            height: '2px',
                            background: color,
                        }}
                    />
                </Stack>
                <Stack 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {<IndicatorCard idx={upperIndex} num={num} color={color} />}
                </Stack>
                
            </Stack>
        </Paper>
    );
};

export default HomePage;

