import React from 'react'
import FeedCard from './FeedCard';
import { Col, Container, Row } from 'react-bootstrap';

const Feed = () => {

  const feeds = [
    { id: '', location: 'Goa', name: 'Ramesh', time: new Date(), review: 'A good Place to visit', iternary: {}, img: ['https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720',] },
    { id: '', location: 'Goa', name: 'Ramesh', time: new Date(), review: 'A good Place to visit', iternary: {}, img: ['https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720',] },
    { id: '', location: 'Goa', name: 'Ramesh', time: new Date(), review: 'A good Place to visit', iternary: {}, img: ['https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720',] },
    { id: '', location: 'Goa', name: 'Ramesh', time: new Date(), review: 'A good Place to visit', iternary: {}, img: ['https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720',] },
  ];
  return (
    <>
      <Container fluid className='p-0'>
        <Row className='gx-5'>

          {
            feeds.map((item, key) => (
              <FeedCard data={item} key={key} />
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default Feed