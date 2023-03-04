import React,{useEffect,useState} from 'react'
import FeedCard from './FeedCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from "react-router";
import axios from "axios";

const Feed = () => {
  const { lat, lng } = useParams();
  // console.log(lat, lng);
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    const data = async () => {
      await axios
        .post("http://localhost:8000/api/get-reviews/", {
          data: { latitude: lat, longitude: lng },
        })
        .then((res) => {
          // res.data[0]["img"] = res.data.images
          // res.data[0]['location'] = "goa";
          setFeeds(res.data);
          console.log(res.data);
        })
        .catch((e) => console.log(e));
    };

    data();
  }, []);

  // const feeds = [
  //   { id: '', location: 'Goa', name: 'Ramesh', time: new Date(), review: 'A good Place to visit', iternary: {}, img: ['https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720',] },
  //   { id: '', location: 'Goa', name: 'Ramesh', time: new Date(), review: 'A good Place to visit', iternary: {}, img: ['https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720',] },
  //   { id: '', location: 'Goa', name: 'Ramesh', time: new Date(), review: 'A good Place to visit', iternary: {}, img: ['https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720',] },
  //   { id: '', location: 'Goa', name: 'Ramesh', time: new Date(), review: 'A good Place to visit', iternary: {}, img: ['https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720', 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720',] },
  // ];
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