import React, { useContext } from "react";
import {
    makeStyles,
    Grid,
    Paper,
    Button
} from '@material-ui/core';
import TextForm from "../Forms/TextForm";
import { AppContext } from '../../context';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    form: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));


const LoginForm = () => {

    const appContext = useContext(AppContext);
    const classes = useStyles();

    return (
        <Grid className={classes.root} container spacing={3}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>

                    <h3 style={{marginLeft: '10px'}}>Login</h3>

                    <form className={classes.form} noValidate autoComplete="off">
                        <TextForm 
                            type="text" 
                            label="USERNAME" 
                            inputType="username"
                            stateProprety="user"
                            onChange={appContext.onChange} 
                        />
                        <br />
                        <TextForm 
                            type="password" 
                            label="PASSWORD" 
                            inputType="password"
                            stateProprety="user"
                            onChange={appContext.onChange}
                        />
                        <br /><br />
                        <Button 
                            style={{marginLeft: '10px'}} 
                            variant="contained" 
                            color="primary"
                            onClick={appContext.onLogin}
                        >LOGIN</Button>
                    </form>

                </Paper>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    );
}

export default LoginForm;