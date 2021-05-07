import React, { Component } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import {createUser} from '../../utils/APIUtils';
import {Link} from 'react-router-dom';
import ButtonLoading from '../common/ButtonLoading';

export default class SignUp extends Component {
    constructor(){
        super()

        this.state ={
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            confirm_password:'',
            loading:false
        }
    }

    handleInputChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value

        this.setState({
            [inputName] : inputValue
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            loading:true
        })
        const formRequest = Object.assign({}, this.state)
        createUser(formRequest)
        .then(resp => {
            this.props.history.push("/login")
        })
        .catch(error => {
            alert("Something went wrong from Creating user from signup page!!!")
            this.setState({
                loading:false
            })
        })
    }

    render() {
       
        return (
            <>
                <Card className="mb-5 mt-3 mx-auto shadow" style={{ width: '19rem' }}>
                    <Card.Header className="text-center font-weight-bold">Sign Up</Card.Header>
                    <Card.Body>
                        <Form onSubmit = {this.handleSubmit}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" name="first_name" value={this.state.first_name} placeholder="Enter First Name" onChange={this.handleInputChange} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" name="last_name" value={this.state.last_name} placeholder="Enter Last Name" onChange={this.handleInputChange} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" value={this.state.email} placeholder="Enter email" onChange={this.handleInputChange} required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} required />
                            </Form.Group>

                            <Form.Group controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name="confirm_password" value={this.state.confirm_password} placeholder="Confirm Password" onChange={this.handleInputChange} required />
                            </Form.Group>
                            <div className="text-center">
                                {this.state.loading ?
                                <ButtonLoading />
                                :<Button variant="primary" type="submit">SignUp</Button>
                                 }
                            </div>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <p>Already Register, please <Link to="/login">Login</Link></p>
                    </Card.Footer>
                </Card>
            </>
        )
    }
}