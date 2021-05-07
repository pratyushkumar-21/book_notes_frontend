import React, { Component } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { loginRequest } from '../../utils/APIUtils';
import { ACCESS_TOKEN, REFRESH_TOKEN, AUTHENTICATED } from '../../constant/index';
import { Link } from 'react-router-dom';
import ButtonLoading from '../common/ButtonLoading';

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            loading: false
        }
    }

    handleInputChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value

        this.setState({
            [inputName]: inputValue
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const formRequest = Object.assign({}, this.state)
        this.setState({
            loading: true
        })

        loginRequest(formRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.access)
                localStorage.setItem(REFRESH_TOKEN, response.refresh)
                localStorage.setItem(AUTHENTICATED, true)

                this.props.handleLogin()
                this.props.history.push("/profile")

            })
            .catch(error => {
                alert("error from login page!!!")
                this.setState({
                    loading: false
                })
            })

    }

    render() {

        return (
            <>
                <Card className="my-5 mx-auto shadow" style={{ width: '19rem' }}>
                    <Card.Header className="text-center font-weight-bold">Login </Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" value={this.state.email} placeholder="Enter email" onChange={this.handleInputChange} required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} required />
                            </Form.Group>

                            <div className="text-center">
                                {this.state.loading ?
                                <ButtonLoading />
                                :<Button variant="primary" type="submit">Login</Button>
                                 }

                            </div>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <p>Forget Password?<Link to="/password-reset">click here</Link></p>
                    </Card.Footer>
                </Card>
            </>
        )
    }
}