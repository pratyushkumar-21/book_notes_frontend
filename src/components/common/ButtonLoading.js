import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

export default class ButtonLoading extends Component {

    render() {
        return (
            <Button variant="primary" disabled style={{ width: '80px' }}>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
            </Button>
        );
    }
}