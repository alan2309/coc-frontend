import React from 'react'
import { Container } from 'react-bootstrap';

const Banner = () => {
  const bannerImgURL = 'https://blackplatinumgold.com/wp-content/uploads/2022/01/2-7-1024x666.jpg';

  return (
    <>
      <Container fluid className='p-0 position-relative'>
        <div
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${bannerImgURL})`,
            backgroundPosition: 'center center',
            opacity: 0.7,
            height: '92vh',
          }}
        ></div>

      </Container>
    </>
  )
}

export default Banner