import React from 'react'
import FeedCard from './FeedCard';

const Feed = () => {

  const feeds = [
    { id: '', img: 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720', reviews: '' },
    { id: '', img: 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720', reviews: '' },
    { id: '', img: 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720', reviews: '' },
    { id: '', img: 'https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/84676923-70ee-4d69-a608-52b763fab7cd.jpeg?im_w=720', reviews: '' },
  ];
  return (
    <>
      {
        feeds.map((item, key) => (
          <><FeedCard data={item} key={key} /></>
        ))
      }
    </>
  )
}

export default Feed