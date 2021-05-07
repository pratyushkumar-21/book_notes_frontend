import React, { Component } from 'react'
import CustomCarousel from '../common/CustomCarousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

export default class Home extends Component {

    constructor() {
        super()

        this.state = {
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }

    render() {
        return (
            <Container fluid>
                <CustomCarousel />
                <Row>
                {this.state.array.map(value => {
                    return (
                        <Col xs={12} md={6} lg={3}>
                        <Card style={{ width: '19rem' }} className="my-2 shadow">
                            <Card.Img variant="top" src="https://picsum.photos/400" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    );
                })}
                </Row>

            </Container>

        )
    }
}