import React from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import Feed from './Feed/Feed';


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
        <Tabs
          defaultActiveKey="feed"
          id="uncontrolled-tab-example"
          className="mb-3 p-0"
          variant='pills'
        >
          {
            links.map((item, key) => (
              <Tab key={key} eventKey={item.eventKey} title={item.title} className='p-0'>
                {item.eventKey === 'feed' && <Feed />}
                Hello
              </Tab>
            ))
          }
        </Tabs>
      </>
    )
  }
  return (
    <Container fluid className='p-0'>
      <Row className='justify-content-center'>
        <PillTab />
        {/* <CustomTab /> */}
      </Row>
    </Container>
  )
}

export default TopNavSections