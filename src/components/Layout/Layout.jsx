import React from "react";
import Container from '@material-ui/core/Container';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from "../Header/Header";
import LoginForm from '../LoginForm/LoginForm';
import ItemList from '../ItemList/ItemList';
import AddForms from '../AddForms/AddForms';
import Filters from '../Filters/Filters';
import Item from '../Item/Item';


const Layout = ({ isConnected }) => {

    return (
        <Container fixed>

            <Header />

            {
                isConnected ? <Redirect to="/" /> : <Redirect to="/login" />
            }

            <Switch>
                <Route path="/login">
                    <LoginForm />
                </Route>
                <Route path="/item/:id">
                    <Item />
                </Route>
                <Route exact path="/">
                    <AddForms />
                    <Filters />
                    <ItemList />
                </Route>
            </Switch>

        </Container>
    );
}

export default Layout;
