import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Block from './Block';

class BootstrapDemo extends Component {


    render() {
        const blocks = [];
        for (let i = 1; i <= 15; i++) {
            blocks.push(
                <Col key={i} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Block  number={i} />
                </Col>
            );
        }


        return (
            <div>

                <Button variant="success"> Button example </Button>

                <Container>
                    <Row>
                    {blocks}
                    </Row>

                    <Row>
                    {blocks}
                    </Row>
                </Container>



                




            </div>
        );
    };

}

export default BootstrapDemo;