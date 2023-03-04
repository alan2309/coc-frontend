import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { AppBinderContext } from '../../AppBinderContext';

const LandingCards = () => {
  const [themeColors] = useContext(AppBinderContext);
  const cardData = [
    { title: 'Search Destination', icon: <><i className="fa-2xl fa-solid fa-magnifying-glass"></i></>, detail: 'Search and select a destination that you are traveling to.', },
    { title: 'Find Travel Partners', icon: <><i className="fa-2xl fa-solid fa-handshake"></i></>, detail: 'Browse through the list of trips, locals, and nearby users in that location.', },
    { title: 'Get Connected', icon: <><i className="fa-2xl fa-regular fa-face-smile-beam"></i></>, detail: 'When you find someone that you want to meet up with, click the connect button and start chatting with them.', },
    { title: 'Trip Together', icon: <><i className="fa-2xl fa-solid fa-users"></i></>, detail: 'Plan together, meet up with your travel companion at a pre-decided public place and travel together.', },
  ];

  const GridCard = () => {
    return (
      <Container className='p-0 my-5'>
        <h1 className='text-center fw-bold display-5' style={{ color: themeColors.darkerBlue }}>How Tripling Works</h1>
        <Container className='p-0' fluid>
          <Row>
            {
              cardData.map((item, key) => (
                <Col xs={6} sm={6} md={3} lg={3} key={key} className='p-2'>
                  <div className='d-flex flex-column align-items-center justify-content-center gap-2 rounded rounded-lg h-100 p-2 py-4 shadow' style={{ backgroundColor: '#F7F7F7' }}>
                    <div
                      style={{ color: themeColors.freshBlue }}
                    >{item.icon}</div>
                    <div className='fw-bold fs-4 text-center'
                      style={{ color: themeColors.greyBlack }}
                    >{item.title}</div>
                    <div className='fw-light fs-6 text-center'>{item.detail}</div>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </Container>
    )
  }


  return (
    <>
      <GridCard />
    </>
  )
}

export default LandingCards