import React from 'react'
import BrandNavbar from '../common/BrandNavbar'
import { Container, Form } from 'react-bootstrap'

const LandingPage = () => {

  return (
    <>
      {/* <BrandNavbar /> */}

      {/* Search Section */}
      <div>

        <Container className=''>
          <Form.Label htmlFor="locSearch">Search Your Location</Form.Label>
          <Form.Control
            type="text"
            id="locSearch"
            aria-describedby="LocationSearch"
            className='rounded-5 p-2'
          />
          <Form.Text id="LocationSearch" muted>
            Search for you desired location!
          </Form.Text>
        </Container>
      </div>
    </>
  )
}

export default LandingPage