import React from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import Feed from './Feed/Feed';
import Companion from "./Companion/Companion"
import './TopNavSections.css'
import Itenary from './Itenary/Itenary';

const TopNavSections = () => {
  const links = [
    { title: 'Travel Feed', route: '', icon: '', eventKey: 'feed', },
    { title: 'Companion Finder', route: '', icon: '', eventKey: 'companion', },
    { title: 'Itinerary Generation', route: '', icon: '', eventKey: 'itenary', },
  ];

  const dummyCompanionData = [
    {
      user: {
        user: '', name: 'Alankrit', email: '', profile_img: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg', age: '22', gender: '', address: '', friends: [], home: 'Mumbai', phone: '', interests: ['Hiking', 'Swimming', 'Running'], pending_req: [], blocked: [], req_sent: [],
      }
    },
    {
      user: {
        user: '', name: 'Alankrit', email: '', profile_img: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg', age: '22', gender: '', address: '', friends: [], home: 'Mumbai', phone: '', interests: ['Hiking', 'Swimming', 'Running'], pending_req: [], blocked: [], req_sent: [],
      }
    },
    {
      user: {
        user: '', name: 'Alankrit', email: '', profile_img: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg', age: '22', gender: '', address: '', friends: [], home: 'Mumbai', phone: '', interests: ['Hiking', 'Swimming', 'Running'], pending_req: [], blocked: [], req_sent: [],
      }
    },
    {
      user: {
        user: '', name: 'Alankrit', email: '', profile_img: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg', age: '22', gender: '', address: '', friends: [], home: 'Mumbai', phone: '', interests: ['Hiking', 'Swimming', 'Running'], pending_req: [], blocked: [], req_sent: [],
      }
    },
    {
      user: {
        user: '', name: 'Alankrit', email: '', profile_img: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg', age: '22', gender: '', address: '', friends: [], home: 'Mumbai', phone: '', interests: ['Hiking', 'Swimming', 'Running'], pending_req: [], blocked: [], req_sent: [],
      }
    },
    {
      user: {
        user: '', name: 'Alankrit', email: '', profile_img: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg', age: '22', gender: '', address: '', friends: [], home: 'Mumbai', phone: '', interests: ['Hiking', 'Swimming', 'Running'], pending_req: [], blocked: [], req_sent: [],
      }
    },
  ]

  const PillTab = () => {
    return (
      <>
        <Tabs
          defaultActiveKey="itenary"
          id="uncontrolled-tab-example"
          className="p-0 d-flex align-items-center justify-content-center my-5"
          variant="pills"
        >
          {
            links.map((item, key) => (
              <Tab key={key} eventKey={item.eventKey} title={item.title} className='p-0'>
                {item.eventKey === 'feed' && <Feed />}
                {item.eventKey === 'companion' && <Companion companionData={dummyCompanionData} />}
                {item.eventKey === "itenary" && <Itenary />}
              </Tab>
            ))
          }
        </Tabs>
      </>
    );
  };
  return (
    <Container fluid className="p-0">
      <Row className="justify-content-center">
        <PillTab />
        {/* <CustomTab /> */}
      </Row>
    </Container>
  );
};

// const CustomTab = () => {
//   return (
//     <>
//       {
//         links.map((item, key) => (
//           <Col key={key} className='d-flex justify-content-center align-items-center'>
//             {item.title}
//           </Col>
//         ))
//       }
//     </>
//   )
// }

export default TopNavSections
