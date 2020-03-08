import React, { useContext } from 'react';
import { 
    makeStyles,
    Grid,
    Card,
    CardContent,
    Button
} from '@material-ui/core';
import Search from '@material-ui/icons/Search';

import TextForm from '../Forms/TextForm';
import SelectForm from '../Forms/SelectForm';
import { AppContext } from '../../context';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: '0px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        padding: '0px',
    },
}));

const AddForms = () => {

    const appContext = useContext(AppContext);
    const classes = useStyles();
    const options = [
        {value: 'music', label: 'Music'},
        {value: 'video', label: 'Video'}
    ];

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container spacing={3} className={classes.paper}>
                    <Grid item sm={3} style={{paddingBottom: '0px'}}>
                        <TextForm 
                            type="text" 
                            label="Title" 
                            size="small"
                            inputType="title"
                            stateProprety="newItem"
                            onChange={appContext.onChange}
                        />
                    </Grid>
                    <Grid item sm={3} style={{paddingBottom: '0px'}}>
                        <TextForm 
                            type="text" 
                            label="Author" 
                            size="small"
                            inputType="author"
                            stateProprety="newItem"
                            onChange={appContext.onChange}
                        />
                    </Grid>
                    <Grid item sm={3} style={{paddingBottom: '0px'}}>
                        <SelectForm 
                            options={options}
                            inputType="type"
                            stateProprety="newItem"
                            onChange={appContext.onChange}
                        />
                    </Grid>
                    <Grid item sm={3} style={{paddingBottom: '0px'}}>
                        <Button 
                            onClick={appContext.addNewItem} 
                            fullWidth 
                            startIcon={<Search />} 
                            variant="outlined" 
                            color="primary"
                        >Add</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default AddForms;