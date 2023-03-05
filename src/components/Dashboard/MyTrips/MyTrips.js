import React, { useEffect, useState } from "react";
import { Button, Row, Tab, Tabs, Table, Container } from "react-bootstrap";
import axiosInstance from "../../../axiosInstance";
import Companion from "../../Home/Companion/Companion";
import MyTripsCard from "./MyTripsCard";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
//import MapComponent from "./MapComponent";
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
  //  const render = (status) => {
  //    switch (status) {
  //      case Status.LOADING:
  //        return null;
  //      case Status.FAILURE:
  //        return <h1>Error occured</h1>;
  //      case Status.SUCCESS:
  //        return <MapComponent />;
  //    }
  //  };

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
          className="mb-3 d-flex align-items-center justify-content-center my-5"
          variant="pills"
        >
          {Trips.map((item, key) => (
            <Tab key={key} eventKey={item.title} title={item.title}>
              <Row>
                {item.title === "Ongoing" &&
                  ongoing.map((obj, ind) => {
                    return (
                      <Container>
                        <MyTripsCard key={ind} obj={obj} setData={setData} />
                      </Container>
                    );
                  })}
                {item.title === "Upcoming" &&
                  upcoing.map((obj, ind) => {
                    return (
                      <Container>
                        <MyTripsCard key={ind} obj={obj} setData={setData} />
                      </Container>
                    );
                  })}
                {item.title === "Completed" &&
                  completed.map((obj, ind) => {
                    return (
                      <Container>
                        <MyTripsCard key={ind} obj={obj} setData={setData} />
                      </Container>
                    );
                  })}
              </Row>
            </Tab>
          ))}
        </Tabs>
      </div>

      <Container>
      <div style={{ display: hid == 1 ? "block" : "none" }}>
        <h1 className="fs-1 text-center fw-bold mt-5">{tripDetail.name}</h1>
        <h3 className="text-center fw-bold">{tripDetail.loc_name}</h3>

        <h4 className="fw-bold text-center mb-3 mt-5 p-3">
          My Internary
        </h4>

        <div className="px-5">
          <Table  hover className="table-light w-50 mx-auto">
            <thead>
              <tr>
                <th>Day</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {console.log(tripDetail)}
              {hid &&
                tripDetail?.itinerary.map((obj, ind) => {
                    return (
                        <>
                      {obj.map((obj1, indd) => {
                          return (
                              <tr key={indd}>
                            <td>
                              {(ind + 1) * (indd + 1) === ind + 1 &&
                                `Day ${ind + 1}`}
                            </td>
                            <td>{obj1.name}</td>
                            {/* <p>{obj1.name} </p> */}
                          </tr>
                        );
                    })}
                    </>
                  );
                })}
            </tbody>
          </Table>
          {/*<p>{tripDetail.start_date}</p>
          <p>{tripDetail.end_date}</p>*/}
        </div>
        <h4 className="fw-bold text-center mb-3 mt-5 p-3">
          Potential Companions
        </h4>
        <Container>
            <Companion companionData={companions}></Companion>
        </Container>
        {/*<Wrapper apiKey={"AIzaSyC_2ABFZTAwaDLCgP5DKpNM_xrCJvX66Nc"} render={render} />*/}
      </div>
      </Container>
      <div className="text-center my-2">
        <Button onClick={(e) => setHid(0)}>Back</Button>
      </div>
    </>
  );
};

export default MyTrips;
