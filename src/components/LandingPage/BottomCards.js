import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import styles from "./BottomCards.module.css";
import cx from "classnames"
const BottomCards = () => {

  const Bottom = () => {

    const cardData = [
      { div1: 'Travellers from', div2: '190+ Countries', div3: 'Around the world', btn: 'Search', imgLink: "https://gogaffl-public.s3.us-west-2.amazonaws.com/number-content-bg1.jpg" },
      { div1: 'Started', div2: '25000+ Trips', div3: 'Worldwide', btn: 'Start A Trip', imgLink: "https://gogaffl-public.s3.us-west-2.amazonaws.com/number-content-bg2.jpg" },
    ]
    return (
      <Container className='px-5 mb-5'>
        <Row>
          {
            cardData.map((item, key) => (

              <Col xs={12} sm={12} md={12} lg={6} key={key}>
                <Card className={cx(styles.card, "bg-dark text-white rounded-5 my-3")}>
                  <Card.Img src={item.imgLink} className='rounded-5' alt="Card image" />
                  <Card.ImgOverlay className='d-flex flex-column justify-content-center ps-5'>
                    <Card.Text className='fs-4'>
                      {item.div1}
                    </Card.Text>
                    <Card.Title className='fw-bold fs-3'>
                      {item.div2}
                    </Card.Title>
                    <Card.Text className='fs-4'>
                      {item.div3}
                    </Card.Text>
                    <Button style={{ "width": "30%" }} className='btn-light mt-2 fw-bold' onClick={() => { window.scrollTo(0, 0) }}>
                      {item.btn}
                    </Button>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    )
  }
  return (
    <>
      <Bottom />
    </>
  )
}

export default BottomCards