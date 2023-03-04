import React from 'react'
import BrandNavbar from '../common/BrandNavbar'
import { Col, Container, Row, Nav } from 'react-bootstrap';
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
        <Container fluid>
          <Row className=''>
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
        </Container >
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