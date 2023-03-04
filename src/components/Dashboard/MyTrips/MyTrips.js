import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import axiosInstance from "../../../axiosInstance";

const MyTrips = () => {
  const Trips = [
    { title: "Ongoing" },
    { title: "Upcoming" },
    { title: "Completed" },
  ];
  const [ongoing, setOngoing] = useState([]);
  const [upcoing, setUpcoming] = useState([]);
  const [completed, setCompleted] = useState([]);
  useEffect(() => {
    axiosInstance
      .post("/get-trips/", { data: { uid: 2 } })
      .then((res) => {
        console.log(res.data);
        setOngoing(res.data.ongoing);
        setUpcoming(res.data.planned);
        setCompleted(res.data.completed);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, []);

  return (
    <>
      <Tabs
        defaultActiveKey="Ongoing"
        id="uncontrolled-tab-example"
        className="mb-3"
        variant="pills"
      >
        {Trips.map((item, key) => (
          <Tab key={key} eventKey={item.title} title={item.title}></Tab>
        ))}
      </Tabs>
    </>
  );
};

export default MyTrips;
