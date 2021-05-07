import React, { Component } from 'react';
import Loading from '../../common/Loading';
import { currentUser,getUserExtraInfo } from '../../../utils/APIUtils';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class Profile extends Component {

    constructor() {
        super()

        this.state = {
            userInfo: null,
            loading: true
        }
    }

    componentDidMount() {
        currentUser()
            .then(resp => {
                this.setState({
                    loading:false,
                    userInfo:resp
                })
            })
            .catch(error => {
                alert("something went wrong in profile page!!!")
                this.props.history.push("/")
            })
    }

    render() {
        if (this.state.loading)
            return <Loading />

        return (
            <>
                <Card className="mx-auto my-5 shadow">
                    <Card.Header className="text-center font-weight-bold">
                        {this.state.userInfo.name}{' '} <Badge variant="success">profile</Badge>
                    </Card.Header>
                    <Card.Body>
                        <Table className="shadow">
                            <tbody>
                                <tr>
                                    <td>ID</td>
                                    <td>{this.state.userInfo.id}</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>{this.state.userInfo.first_name} {this.state.userInfo.last_name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.userInfo.email}</td>
                                </tr>
                                <tr>
                                    <td><Link to="/"> <Button> Register as Student</Button></Link></td>
                                    <td><Link to= "/"> <Button> Register as Teacher</Button></Link></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </>
        );
    }
}