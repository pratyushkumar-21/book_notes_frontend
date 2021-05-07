import React, { Component } from 'react';
import Loading from '../common/Loading';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {resetPasswordConfirm} from '../../utils/APIUtils';

export default class PasswordResetForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            password: '',
            confirm_password: '',
            uidb64: this.props.match.params.uid,
            token: this.props.match.params.token,
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
            loading:true
        })

        resetPasswordConfirm(formRequest)
        .then(resp => {
            alert("password changed sussessfully!!!")
            this.props.history.push("/login")
        })
        .catch(error => {
            alert("something went wrong try again!!!")
            this.setState({
                loading:false
            })
        })




    }

    render() {
        if (this.state.loading)
            return <Loading />

        return (
            <Card className="my-5 mx-auto shadow" style={{ width: '19rem' }}>
                <Card.Header className="text-center font-weight-bold">Change Your Password</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="confirm_password" value={this.state.confirm_password} placeholder="Confirm Password" onChange={this.handleInputChange} required />
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="primary" type="submit">Confirm</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}