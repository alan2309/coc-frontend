import React from 'react';
import BrandNavbar from '../common/BrandNavbar';
import { Container } from 'react-bootstrap';
import TopNavSections from './TopNavSections';
import Feed from './Feed/Feed';

const Home = () => {

  const HomeDash = () => {
    return (
      <>
        <BrandNavbar />
        <Container className='mt-5 p-0'>
          <TopNavSections />
          {/* <Feed /> */}
        </Container>
      </>
    )
  }
  return (
    <>
      <HomeDash />
    </>
  )
}

export default Home