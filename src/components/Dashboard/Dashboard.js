import React from "react";
import BrandNavbar from "../common/BrandNavbar";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import styles from "./Dashboard.module.css";
import cx from "classnames";
import MyTrips from "./MyTrips/MyTrips";
import Notification from "./Notification/Notification";
import Chat from "../Chat/Chat";

const Dashboard = () => {
  const MainDashboard = () => {
    const StackList = [
      {
        id: 1,
        title: "My Trips",
        linkTo: "",
        icon: <i className="fa-solid fa-suitcase-rolling"></i>,
      },
      {
        id: 2,
        title: "Notification",
        linkTo: "",
        icon: <i className="fa-solid fa-envelope"></i>,
      },
    //  {
    //    id: 3,
    //    title: "Profile",
    //    linkTo: "",
    //    icon: <i className="fa-solid fa-user"></i>,
    //  },
      {
        id: 4,
        title: "Chats",
        linkTo: "",
        icon: <i className="fa-solid fa-comments"></i>,
      },
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
          <Row className="m-0">
            <Col xs={4} sm={3} md={2} className={cx(styles.leftCol, "p-0")}>
              <Nav variant="pills" className="flex-column p-2 py-3">
                {StackList.map((item, key) => (
                  <Nav.Item key={key}>
                    <Nav.Link
                      eventKey={item.title}
                      className="d-flex align-items-center gap-2"
                    >
                      <div>{item.icon}</div>
                      <div>{item.title}</div>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>

            <Col className="p-0">
              <Tab.Content className="p-0">
                {StackList.map((item, key) => (
                  <Tab.Pane eventKey={item.title} key={key} className="p-0">
                    {item.title === "My Trips" && <MyTrips />}
                    {item.title === "Notification" && <Notification />}
                    {item.title === "Chats" && <Chat />}
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </>
    );
  };

  return (
    <>
      <MainDashboard />
    </>
  );
};

export default Dashboard;
