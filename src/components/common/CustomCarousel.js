import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import space from '../../image/space.jpg';
import astronaut from '../../image/astronaut.jpg';

export default class CustomCarousel extends Component {

    render() {
        return (
            <Carousel className="my-1 shadow">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={astronaut}
                        alt="First slide"
                        height="350px"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={space}
                        alt="Third slide"
                        height="350px"

                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}