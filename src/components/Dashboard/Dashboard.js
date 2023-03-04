import React from 'react'
import BrandNavbar from '../common/BrandNavbar'
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import styles from "./Dashboard.module.css";
import cx from "classnames";

const Dashboard = () => {

  const MainDashboard = () => {

    const StackList = [
      { id: 0, title: 'Home', linkTo: '', icon: '' },
      { id: 1, title: 'My Trip', linkTo: '', icon: '' },
      { id: 2, title: 'Notification', linkTo: '', icon: '' },
      { id: 3, title: 'Profile', linkTo: '', icon: '' },
      { id: 4, title: 'Chats', linkTo: '', icon: '' },
    ];

    return (
      <>
        <BrandNavbar />


        {/* <Container fluid className='p-0'>
          <Row className='m-0'>
            <Col xs={2} sm={2} md={2} className={cx(styles.leftCol, 'p-0')}>
              <Nav variant="pills" defaultActiveKey="0" className={cx('flex-column justify-content-center')}>
                {
                  StackList.map((item, key) => (
                    <Nav.Item key={key} className=''>
                      <Nav.Link eventKey={item.id} title={item.title}>
                        {item.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))
                }
              </Nav>
            </Col>
            <Col>data</Col>
          </Row>
        </Container > */}

        <Tab.Container id="left-tabs-example" defaultActiveKey="Home">
          <Row className='m-0'>
            <Col xs={2} sm={2} md={2} className={cx(styles.leftCol, 'p-0')}>
              <Nav variant="pills" className="flex-column">
                {
                  StackList.map((item, key) => (
                    <Nav.Item key={key}>
                      <Nav.Link eventKey={item.title}>{item.title}</Nav.Link>
                    </Nav.Item>
                  ))
                }

              </Nav>
            </Col>

            <Col className='p-0'>
              <Tab.Content className='p-0'>
                {
                  StackList.map((item, key) => (
                    <Tab.Pane eventKey={item.title} key={key} className='p-0'>
                      {item.title}
                    </Tab.Pane>
                  ))
                }
              </Tab.Content></Col>
          </Row>
        </Tab.Container>
      </>
    )
  }

  return (
    <>
      <MainDashboard />
    </>
  )
}

export default Dashboard