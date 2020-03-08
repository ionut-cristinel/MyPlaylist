import React, { useContext } from 'react';
import {
    makeStyles,
    useTheme,
    Card,
    CardActionArea,
    CardContent,
    Button,
    Typography,
    CardActions,
    IconButton
} from '@material-ui/core';
import {
    SkipPrevious,
    PlayArrow,
    SkipNext,
    ArrowBack,
    PlayCircleOutline,
    MusicNote
} from '@material-ui/icons';
import { AppContext } from '../../context';
import { Link, useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'block',
        margin: 'auto',
        maxWidth: 345
    },
    controls: {
        display: 'flex',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

const Item = () => {

    const { allItems } = useContext(AppContext);
    const { id } = useParams();
    const classes = useStyles();
    const theme = useTheme();
    const [item] = allItems.filter(item => item.id === id);

    return (
        <Card className={classes.root}>
            <div className={classes.controls}>
                <IconButton style={{ display: 'block', margin: 'auto' }}>
                    { item.type === 'video' ? <PlayCircleOutline style={{ fontSize: '50px' }} /> : <MusicNote style={{ fontSize: '50px' }} /> }
                </IconButton>
            </div>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.author}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div className={classes.controls}>
                <IconButton aria-label="previous">
                    {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
                </IconButton>
                <IconButton aria-label="play/pause">
                    <PlayArrow className={classes.playIcon} />
                </IconButton>
                <IconButton aria-label="next">
                    {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
                </IconButton>
            </div>
            <CardActions>
                <Link to="/">
                    <Button startIcon={<ArrowBack />} color="secondary">
                        Back
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default Item;