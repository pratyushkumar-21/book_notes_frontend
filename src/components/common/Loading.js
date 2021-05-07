import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';

class Loading extends Component{

    render(){
        return (
            <div className="text-center mt-5" style={{paddingTop:'200px'}}>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="dark" />
            </div>
        );
    }
}

export default Loading;