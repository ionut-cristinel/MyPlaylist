import React, { Component } from "react";

import Layout from './components/Layout/Layout.jsx';
import { AppContext } from './context';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isConnected: false,
            user: {
                username: '',
                password: ''
            },
            items: [],
            newItem: {
                id: '',
                type: 'music',
                title: '',
                author: '',
                views: 0
            },
            filter: ''
        };
    }

    componentDidMount(){
        const isConnected = JSON.parse(localStorage.getItem('isConnected'));
        const user = JSON.parse(localStorage.getItem('user'));
        this.setState({ 
            isConnected: isConnected ? true : false, 
            user: isConnected ? {...user} : {...this.state.user},
            filter: 'all'
        });
    }

    onLogout = () => {
        if(this.state.isConnected){
            localStorage.setItem('isConnected', JSON.stringify(false));
            localStorage.setItem('user', JSON.stringify({username:'', password:''}));
            this.setState({ 
                isConnected: false, 
                user: {
                    username: '',
                    password: ''
                } 
            });
        }
    }

    onLogin = () => {

        if(this.checkIfUserIsLogged()){
            return;
        }

        if(this.state.user.username === '' || this.state.user.username === ''){
            return;
        }

        const localstorageUsers = localStorage.getItem('users');
        let onlineUser = {};
        // in localstorage exista utilizatori
        if(localstorageUsers){
            const users = JSON.parse(localstorageUsers);
            const user = users.filter(item => item.username === this.state.user.username && item.password === this.state.user.password);
            // utilizatorul exista in local storage
            if(user.length){
                onlineUser = {...user};
            }
            // utilizatorul nu exista in localstorage
            else{
                onlineUser = {...this.state.user};
                users.push({ ...this.state.user });
                localStorage.setItem('users', JSON.stringify(users));
            }
        }
        // in localstorage nu exista utilizatori
        else{
            onlineUser = {...this.state.user};
            localStorage.setItem('users', JSON.stringify([{ ...this.state.user }]));
        }
        localStorage.setItem('isConnected', JSON.stringify(true));
        localStorage.setItem('user', JSON.stringify(onlineUser));
        this.setState({
            isConnected: true, 
            user: { ...onlineUser } 
        });
    }

    onChangeHandler = (event, inputType, stateProprety) => {
        const value = { 
            ...this.state[stateProprety],
            [inputType]: event.target.value
        };
        this.setState({ [stateProprety]: value });
    }

    checkIfUserIsLogged = () => {
        const isConnected = JSON.parse(localStorage.getItem('isConnected'));
        if(isConnected === true){
            return true;
        }
        return false;
    }

    addNewItem = () => {
        if(this.state.newItem.title === '' || this.state.newItem.author === ''){
            return;
        }
        const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const views = Math.floor(Math.random() * Math.floor(150));
        const item = {
            ...this.state.newItem,
            id: id,
            views: views
        };
        const items = [
            item,
            ...this.state.items
        ];
        this.setState({ 
            items: items,
            newItem: {
                id: '',
                type: 'music',
                title: '',
                author: '',
                views: 0
            }
        });
    }

    deleteItem = id => {
        const items = this.state.items.filter(item => item.id !== id);
        this.setState({ items: items });
    }

    filteredItems = () => {
        if(this.state.filter === 'all'){
            return this.state.items;
        }
        return this.state.items.filter(item => item.type === this.state.filter);
    }

    changeFilterType = (event, filter) => {
        event.preventDefault();
        this.setState({ filter: filter });
    }

    showItem = () => {

    }

    render() {
        return <AppContext.Provider value={{
            filter: this.state.filter,
            changeFilterType: this.changeFilterType,
            isConnected: this.state.isConnected,
            onLogout: this.onLogout,
            conectedUser: this.state.user.username,
            onLogin: this.onLogin,
            onChange: this.onChangeHandler,
            items: this.filteredItems(),
            deleteItem: this.deleteItem,
            addNewItem: this.addNewItem,
            allItems: this.state.items
        }}>
            <Layout isConnected={ this.state.isConnected } />
        </AppContext.Provider>;
    }
}

export default App;
