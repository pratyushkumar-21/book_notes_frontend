import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { resetPasswordEmail } from '../../utils/APIUtils';
import ButtonLoading from '../common/ButtonLoading';

export default class PasswordResetEmailForm extends Component {

    constructor() {
        super()

        this.state = {
            email: '',
            response: '',
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
        const formRequest = Object.assign({}, { email: this.state.email })
        this.setState({
            loading: true
        })

        resetPasswordEmail(formRequest)
            .then(resp => {
                alert("email sent successfully!!!")
                this.setState({
                    response: 'email has been sent to your register mail id!!',
                    loading: false
                })
            })
            .catch(error => {
                alert("something went wrong!!!")
                this.setState({
                    loading: false
                })
            })
    }

    render() {

        return (
            <Card className="mx-auto mt-5 shadow">
                <Card.Header className="font-weight-bold">Enter your register email id</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formGroupEmail">
                            <Row>
                                <Col>
                                    <Form.Control type="email" name="email" value={this.state.email} placeholder="Enter email" required onChange={this.handleInputChange} />
                                </Col>

                                <Col>
                                    {this.state.loading ?
                                        <ButtonLoading />
                                        : <Button variant="primary" type="submit">Send</Button>
                                    }
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Card.Body>
                {this.state.response ?
                    <Card.Footer className="text-center">
                        {this.state.response}
                    </Card.Footer>
                    : null}
            </Card>
        );
    }
}