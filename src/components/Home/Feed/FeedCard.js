import React from 'react'
import { Col, Card, Button, Carousel } from 'react-bootstrap';

const FeedCard = (data) => {
console.log(data)
  const mData = data.data;


  const CarouselCard = () => {
    return (
      <Carousel interval={2500 + Math.random() * 1000}>
        {
          mData.images.map((item, key) => (
            <Carousel.Item key={key}>
              <img
                className="d-block w-100"
                src={item}
                alt={`${key + 1} slide`}
              />
              {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
          ))
        }
      </Carousel>
    )
  }

  return (
    <>
      <Col xs={12} sm={12} md={6} lg={4} className='p-0 my-1 p-3'>
        <Card className='border-0' style={{ backgroundColor: '#F7F7F7' }}>
          <CarouselCard />
          <Card.Body>
            <Card.Title>{mData.location.latitude}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Review By: {mData.name}</Card.Subtitle>
            <Card.Text>
              {mData.review}
            </Card.Text>
            <div className='d-flex align-items-end justify-content-between'>
              <Card.Subtitle className=" text-muted">{ }</Card.Subtitle>
              <Button variant="primary">Show Iternarary</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default FeedCard