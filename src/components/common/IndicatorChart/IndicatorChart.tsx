import { AutoSizer } from 'react-declarative';
import Box from '@mui/material/Box';
import Circle from './components/Circle';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        height: '100%',
        width: '100%',
    },
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    circle: {
        position: 'relative',
        flex: 1,
    },
    circleInner: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    circleWrapper: {
        minHeight: 175,
    },
});

export const IndicatorChart = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Stack
                className={classes.container}
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
            >
                <Box className={classes.circleWrapper}>
                    <AutoSizer className={classes.circle}>
                        {({height, width}) => (
                            <Box className={classes.circleInner}>
                                <Circle
                                    progress={20}
                                    size={`${Math.min(height, width)}px`}
                                />
                            </Box>
                        )}
                    </AutoSizer>
                </Box>
                <Box flexGrow={1}>
                </Box>
            </Stack>
        </Paper>
    );
};

export default IndicatorChart;

