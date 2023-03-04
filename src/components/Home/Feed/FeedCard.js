import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const FeedCard = (data) => {

  return (
    <>
      <Container fluid className='p-0 my-5'>
        <Row>
          <Col xs={4} className='p-0'>
            <img src={data.data.img} className='img-fluid rounded' />
          </Col>
          <Col>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsa quod. Ullam totam atque alias labore autem quas accusantium iure deserunt perferendis ad. Blanditiis ut delectus cum eum consequatur vitae?
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FeedCard