import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';


const TopNavSections = () => {
  const links = [
    { title: 'Travel Feed', route: '', icon: '', eventKey: 'feed', },
    { title: 'Companion Finder', route: '', icon: '', eventKey: 'companion', },
    { title: 'itinerary Generation', route: '', icon: '', eventKey: 'itenary', },
  ];

  const CustomTab = () => {
    return (
      <>
        {
          links.map((item, key) => (
            <Col key={key} className='d-flex justify-content-center align-items-center'>
              {item.title}
            </Col>
          ))
        }
      </>
    )
  }

  const PillTab = () => {
    return (
      <>
        <Nav variant="pills" justify defaultActiveKey="feed" className='p-0'>
          {
            links.map((item, key) => (
              <Nav.Item key={key}>
                <Nav.Link eventKey={item.eventKey}>{item.title}</Nav.Link>
              </Nav.Item>
            ))
          }
          {/* <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
          </Nav.Item> */}
        </Nav>
      </>
    )
  }
  return (
    <Container fluid>
      <Row className='justify-content-center'>
        <PillTab />
        {/* <CustomTab /> */}
      </Row>
    </Container>
  )
}

export default TopNavSections