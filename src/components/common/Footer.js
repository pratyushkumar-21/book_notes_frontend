import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
    <div className=" mt-5 footer navbar-fixed-bottom">
            <Jumbotron fluid style={{backgroundColor:"#262626", color:'white'}}>
            <Container className="text-center">
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
            </Container>
        </Jumbotron>
    </div>
    );
}

export default Footer;