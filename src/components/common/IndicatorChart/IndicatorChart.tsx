import { AutoSizer } from 'react-declarative';
import Box from '@mui/material/Box';
import Circle from './components/Circle';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TelegramIcon from '@mui/icons-material/Telegram';
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
        minHeight: 125,
    },
    titleLabel: {
        paddingLeft: 10,
        paddingTop: 5,
    }
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
                <Box>
                    <ListItem disablePadding className={classes.titleLabel}>
                        <ListItemText
                            primary="Traffic sources"
                            secondary="last 28 days"
                        />
                    </ListItem>
                </Box>
                <Box className={classes.circleWrapper}>
                    <AutoSizer>
                        {({ height, width }) => (
                            <Box style={{ height, width, display: "flex", justifyContent: "center" }}>
                                <Circle
                                    progress={15}
                                    size={`${Math.min(height, width)}px`}
                                />
                            </Box>
                        )}
                    </AutoSizer>
                </Box>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TelegramIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText
                                primary="Telegram"
                                secondary='22.02.2022 15:23'
                            />
                            <ListItemText sx={{color: 'blue',  display: 'flex', justifyContent: 'flex-end'}}
                                primary="15%"
                                
                            />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <svg width={0} height={0}>
                                    <linearGradient id="linearColors" x1={1} y1={0} x2={0} y2={1}>
                                        <stop offset={0} stopColor="#0055DD" />
                                        <stop offset={1} stopColor="#FD1D1D" />
                                    </linearGradient>
                                </svg>
                                <InstagramIcon sx={{ fill: "url(#linearColors)" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Instagram"
                                secondary='22.02.2022 15:42'
                            />
                            <ListItemText sx={{color: '#FF4081', display: 'flex', justifyContent: 'flex-end'}}
                                primary="35%"
                                
                            />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FacebookIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText
                                primary="Drafts"
                                secondary='22.02.2022 16:01'
                            />
                             <ListItemText sx={{color: '#3F51B5',  display: 'flex', justifyContent: 'flex-end'}}
                                primary="5%"
                                
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Box flexGrow={1}>
                </Box>
            </Stack>
        </Paper>
    );
};

export default IndicatorChart;

