import React from 'react';
import BrandNavbar from '../common/BrandNavbar';
import { Container } from 'react-bootstrap';
import TopNavSections from './TopNavSections';

const Home = () => {

  const HomeDash = () => {
    return (
      <>
        <BrandNavbar />
        <Container className='mt-5'>
          <TopNavSections />
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