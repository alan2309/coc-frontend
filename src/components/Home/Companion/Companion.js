import React from 'react'
import { Col, Card, Button, Ratio, Row } from 'react-bootstrap';
import { Chip } from '@material-ui/core';
function Companion() {
    const data = ["HIKING", "Swimmimg", "Running"]
  
    return (
        <div>
            <Col xs={12} sm={12} md={6} lg={4} className='p-0 my-1 p-3'>
                <Card className='border-0' style={{ backgroundColor: '#F7F7F7', width: '18rem', height: '5%' }}>
                    <Card.Img variant="top" src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" style={{ backgroundColor: '#F7F7F7', width: '18rem', height: '5%' }} />
                    <Card.Body>
                    <div className='d-flex align-items-end justify-content-between'></div>
                        <Card.Subtitle className="mb-2 text-muted ">Alan,22</Card.Subtitle>
                    <div className='d-flex align-items-end justify-content-between'></div>
                        <Card.Subtitle className=" mb-2 text-muted ">Mumbai</Card.Subtitle>
                        <Card.Text>
                           
                            {data.map((interest,index) => (
              <Chip
                key={index}
                size='small'
                label={interest}
                margin= '5px 5px 5px 0px'
  
              />))}
                            
                        </Card.Text>
                        <div className='d-flex align-items-end justify-content-between'>

                            <Button variant="primary">Connect</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}

export default Companion