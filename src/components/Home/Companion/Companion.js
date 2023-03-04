import React from 'react';
import CompanionCard from "./CompanionCard";
import { Col, Row, Container } from 'react-bootstrap';

const Companion = ({ companionData }) => {
    return (
        <Container fluid className='p-0'>
            <Row>
                {
                    companionData.map((item, key) => (
                        <Col key={key} xs={12} sm={12} md={6} lg={3}>
                            <CompanionCard user={item.user} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Companion