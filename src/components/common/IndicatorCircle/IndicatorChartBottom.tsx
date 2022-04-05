import { AutoSizer } from 'react-declarative';
import BarChartLight from '../../../pages/ChartPage/components/BarChartLight';
import Box from '@mui/material/Box';
import Circle from '../IndicatorChart/components/Circle';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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
    circleWrapper: {
        minHeight: 175,
        minWidth: 175,
    },
    titleLabel: {
        paddingLeft: 10,
        paddingTop: 5,
    }
});

export const IndicatorChartBottom = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Stack
                className={classes.container}
                direction="row"
                justifyContent="stretch"
                alignItems="center"
                spacing={2}
            >
                <Box>
                    <Stack >
                        <ListItem disablePadding className={classes.titleLabel}>
                        <ListItemText
                            primary="Plan consumption stats"
                         />
                        </ListItem>
                        
                        <ListItem disablePadding className={classes.titleLabel}>
                        <ListItemText primaryTypographyProps={{
                                fontSize: '2em',
                                fontWeight: 'bold',
                            }}
                            primary="56% sold"
                            secondary="of week planning"
                         />
                        </ListItem>
                    </Stack>
                </Box>
                
                <Box flexGrow={1}>
                </Box>
                
                <Box className={classes.circleWrapper}>
                    <AutoSizer>
                        {({height, width}) => (
                            <Box style={{ height, width, display: "flex", justifyContent: "flex-end"}}>
                                <Circle
                                    progress={56}
                                    size={`${Math.min(height, width)}px`}
                                    progressColor={'rgb(50,205,50)'}
                                />
                            </Box>
                        )}
                    </AutoSizer>
                </Box> 
               
            </Stack>
        </Paper>
    );
};

export default IndicatorChartBottom;

