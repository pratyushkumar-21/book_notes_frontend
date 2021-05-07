import React, { Component } from 'react';
import { verifyEmail } from '../../utils/APIUtils';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonLoading from '../common/ButtonLoading';

export default class EmailActivation extends Component {

    constructor(){
        super()

        this.state = {
            loading:false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const formRequest = {token: this.props.match.params.token }

        this.setState({
            loading:true
        })

        verifyEmail(formRequest)
        .then(resp => {
            alert("Email verified successfully !!!")
            this.props.history.push("/login")
        })
        .catch(error => {
            alert("Something went wrong, Email not verified successfully!!!")
            this.setState({
                loading:false
            })
        })
    
    }

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
                <Card className="text-center mx-auto my-5" style={{ width: '19rem' }}>
                    <Card.Header>Verify your Email Address</Card.Header>
                    <Card.Body>
                        {this.state.loading ? <ButtonLoading /> :<Button type="submit" variant="primary">Verify</Button>}
                    </Card.Body>
                </Card>
            </Form>
        );
    }
}