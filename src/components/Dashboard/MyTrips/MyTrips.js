import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const MyTrips = () => {
  const Trips = [
    { title: "Ongoing" },
    { title: "Planned" },
    { title: "Completed" },
  ]
  return (
    <>
      <Tabs
        defaultActiveKey="Ongoing"
        id="uncontrolled-tab-example"
        className="mb-3"
        variant='pills'
      >
        {
          Trips.map((item, key) => (
            <Tab key={key} eventKey={item.title} title={item.title}>

            </Tab>
          ))
        }
      </Tabs>
    </>
  )
}

export default MyTrips