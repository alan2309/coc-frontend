import React, { useEffect, useState } from "react";
import { Button, Row, Tab, Tabs } from "react-bootstrap";
import axiosInstance from "../../../axiosInstance";
import Companion from "../../Home/Companion/Companion";
import MyTripsCard from "./MyTripsCard";
const MyTrips = () => {
  const Trips = [
    { title: "Ongoing" },
    { title: "Upcoming" },
    { title: "Completed" },
  ];
  const [ongoing, setOngoing] = useState([]);
  const [upcoing, setUpcoming] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [companions, setCompanions] = useState([]);
  const [hid, setHid] = useState(0);
  const [tripDetail, setTripDetail] = useState({});
  useEffect(() => {
    axiosInstance
      .post("/get-trips/", {
        data: { uid: JSON.parse(sessionStorage.getItem("user_data"))?.id },
      })
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

  const setData = async (obj) => {
    setHid(1);
    setTripDetail(obj);
    console.log(obj);
    axiosInstance
      .post("/get-companions/", {
        data: {
          latitude: obj.location.latitude,
          longitude: obj.location.longitude,
          uid: JSON.parse(sessionStorage.getItem("user_data")).id,
          interests: JSON.parse(sessionStorage.getItem("user_data")).interests,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCompanions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {" "}
      <div style={{ display: hid == 0 ? "block" : "none" }}>
        <Tabs
          defaultActiveKey="Ongoing"
          id="uncontrolled-tab-example"
          className="mb-3"
          variant="pills"
        >
          {Trips.map((item, key) => (
            <Tab key={key} eventKey={item.title} title={item.title}>
              <Row>
                {item.title === "Ongoing" &&
                  ongoing.map((obj, ind) => {
                    return (
                      <MyTripsCard key={ind} obj={obj} setData={setData} />
                    );
                  })}
                {item.title === "Upcoming" &&
                  upcoing.map((obj, ind) => {
                    return (
                      <MyTripsCard key={ind} obj={obj} setData={setData} />
                    );
                  })}
                {item.title === "Completed" &&
                  completed.map((obj, ind) => {
                    return (
                      <MyTripsCard key={ind} obj={obj} setData={setData} />
                    );
                  })}
              </Row>
            </Tab>
          ))}
        </Tabs>
      </div>
      <div style={{ display: hid == 1 ? "block" : "none" }}>
        <Button onClick={(e) => setHid(0)}>Back</Button>
        <h1>{tripDetail.name}</h1>
        <Companion companionData={companions}></Companion>
      </div>
    </>
  );
};

export default MyTrips;
