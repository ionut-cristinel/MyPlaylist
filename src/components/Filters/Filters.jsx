import React, { useContext } from 'react';
import { 
    makeStyles,
    Paper,
    Typography,
    Breadcrumbs,
    Link,
    Card,
    CardContent,
    Grid
} from '@material-ui/core';
import {
    PlayCircleOutline,
    MusicNote,
    AllInclusive
} from '@material-ui/icons';
import { AppContext } from '../../context';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2),
        padding: '0px',
    },
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

const Filters = () => {
    const appContext = useContext(AppContext);
    const classes = useStyles();
    const filters = [
        {filter: 'all', label: 'All', icon: <AllInclusive className={classes.icon} />},
        {filter: 'music', label: 'MUSIC', icon: <MusicNote className={classes.icon} />},
        {filter: 'video', label: 'VIDEO', icon: <PlayCircleOutline className={classes.icon} />}
    ];
    const renderFilters = () => {
        return filters.map(fil => {
            if(appContext.filter === fil.filter){
                return <Typography 
                        key={fil.filter}
                        color="textPrimary" 
                        className={classes.link}
                    >
                        { fil.icon }
                        { fil.label }
                    </Typography>
            }
            return <Link 
                    key={fil.filter}
                    color="inherit" 
                    href="/" 
                    onClick={event => appContext.changeFilterType(event, fil.filter)} 
                    className={classes.link}
                >
                    { fil.icon }
                    { fil.label }
                </Link>
            }
        )
    }

    return (
        <Card className={classes.root} style={{margin: '15px auto 30px'}}>
            <CardContent>
                <Grid container spacing={3} className={classes.paper}>
                    <Grid item xs={12} style={{paddingBottom: '0px'}}>
                        
                        <Paper elevation={0}>
                            <Breadcrumbs aria-label="breadcrumb">
                            {
                                renderFilters()
                            }
                            </Breadcrumbs>
                        </Paper>
                        
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Filters;
