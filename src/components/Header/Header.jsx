import React, { useContext } from "react";
import { 
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { AppContext } from '../../context';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {

    const appContext = useContext(AppContext);
    const classes = useStyles();

    return (
        <AppBar position="static" color="secondary" style={{marginBottom: '30px'}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <PlayCircleFilledIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                {
                    appContext.isConnected ? 'Hello ' + appContext.conectedUser : 'My Playlist'
                }
                </Typography>
                {
                    appContext.isConnected ? <Button color="inherit" onClick={appContext.onLogout}>Logout</Button> : null
                }
            </Toolbar>
        </AppBar>
    );
};

export default Header;
