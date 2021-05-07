import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN, AUTHENTICATED } from './constant/index';
import {logoutRequest} from './utils/APIUtils';


import SignUp from './components/user/SignUp';
import Login from './components/user/Login';
import CustomNavbar from './components/common/CustomNavbar';
import Loading from './components/common/Loading';
import Home from './components/home/Home';
import Footer from './components/common/Footer';
import EmailActivation from './components/user/EmailActivation';
import PasswordResetEmailForm from './components/user/PasswordResetEmailForm';
import PasswordResetForm from './components/user/PasswordResetForm';
import Profile from './components/user/profile/Profile';

export default class App extends Component {

    constructor() {
        super()

        this.state = {
            authenticated: localStorage.getItem(AUTHENTICATED) ? true : false
        }
    }

    handleLogin = () => {
        this.setState({
            authenticated: true
        })
    }

    handleLogout = () => {
        logoutRequest({"refresh_token": localStorage.getItem(REFRESH_TOKEN)})
        .then(resp => {
            alert("logout successfully")
            localStorage.removeItem(ACCESS_TOKEN)
            localStorage.removeItem(REFRESH_TOKEN)
            localStorage.removeItem(AUTHENTICATED)
        }).catch(error => {
            alert("something went wrong")
        })
        

        this.setState({
            authenticated: false
        })
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <CustomNavbar authenticated={this.state.authenticated} handleLogout={this.handleLogout} />
                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Container>
                            <Route exact path='/login' render={(props) => (<Login {...props} handleLogin = {this.handleLogin} />)} />
                            <Route exact path="/signup" component={SignUp} />
                            <Route exact path="/activate/:token" component={EmailActivation} />
                            <Route exact path="/password-reset" component={PasswordResetEmailForm} />
                            <Route exact path="/reset-password-confirm/:uid/:token" component={PasswordResetForm} />
                            <Route exact path="/profile" component={Profile} />

                            <Route exact path="/load" component={Loading} />
                        </Container>

                    </Switch>
                    {/* <Footer/> */}
                </BrowserRouter>

            </>
        );
    }
}
