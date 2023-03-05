import React, { useEffect, useState, createRef, useContext } from "react";
import { Button, Col, Form, Modal, Row, FormSelect, Container, Table } from "react-bootstrap";
import { getPlacesData } from "../../tripMatch";
import { useParams } from "react-router";
import PlaceDetails from "./PlaceDetails";
import axiosInstance from "../../../axiosInstance";
import { AppBinderContext } from "../../../AppBinderContext";
import cx from "classnames";
import styles from "./Itenary.module.css";

function Itenary() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("restaurants");
  const [placeData, setPlaceData] = useState([]);
  const [selected_place, set_selected_place] = useState([[]]);
  const [selected_place_list, set_selected_place_list] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [elRefs, setElRefs] = useState([]);
  const [count, setCount] = useState(2);
  const [currentDay, setCurrentDay] = useState(1);
  const [bool, setBool] = useState(false);
  const [sDate, setSDate] = useState(new Date());
  const [eDate, setEDate] = useState(new Date());
  const [name, setName] = useState("");
  const [themeColors] = useContext(AppBinderContext);

  useEffect(() => {
    const refs = Array(placeData?.length)
      .fill()
      .map((_, index) => elRefs[index] || createRef());
    setElRefs(refs);
    return () => { };
  }, [placeData]);

  useEffect(() => {
    console.log(lat, lng);
    setCoordinates({ lat: lat, lng: lng });
    addNewDay(1);

    return () => { };
  }, []);

  function addNewDay(dayNumber) {
    setBool(false);
    console.log(dayNumber);
    let le = (
      <Container fluid className="p-0 px-4">
        <Row>
          <Col className="border border-3 border-dark d-flex align-items-center justify-content-center">
            <div className="fw-bold">Day {dayNumber}</div>
          </Col>
          <Col className="border border-3 border-dark p-2">
            <Button
              variant="dark"
              onClick={(e) => {
                handleShow(e, dayNumber);
                setCurrentDay(dayNumber);
              }}
            >
              Add places to visit
            </Button>
          </Col>
        </Row>
      </Container>
    );

    set_selected_place_list((il) => [...il, le]);
  }

  const { lat, lng } = useParams();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submit(e) {
    e.preventDefault();
    //name
    //location:{latitude:,longitude:}
    //start_date:
    //end_date:
    //itinerary:
    axiosInstance
      .post("/save-trip/", {
        data: {
          name: name,
          location: { latitude: coordinates.lat, longitude: coordinates.lng },
          start_date: sDate,
          end_date: eDate,
          itinerary: selected_place,
          uid: 2,
          loc_name: sessionStorage.getItem("formatted_address") || "Goa, India",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    console.log(coordinates.lat);
    console.log(coordinates.lng);
    getPlacesData(type, coordinates.lat, coordinates.lng).then((data) => {
      console.log(data);
      setPlaceData(data);
    });
  }, [type, coordinates.lat, coordinates.lng]);

  return (
    <div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Places To Visit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Type</Form.Label>
            <FormSelect
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                setPlaceData([]);
              }}
            >
              <option value="restaurants">Restaurants</option>
              {/*<option value="hotels">Hotels</option>*/}
              <option value="attractions">Attractions</option>
            </FormSelect>
          </Form>
          <Row>
            {placeData !== undefined &&
              placeData.map((res, index) => (
                <Col md={6}>
                  <PlaceDetails
                    place={res}
                    set_selected_place={set_selected_place}
                    selected={false}
                    selected_place={selected_place}
                    refProp={elRefs[index]}
                    currentDay={currentDay}
                  ></PlaceDetails>
                </Col>

                //  <Grid container spacing={1}>
                //    <Grid ref={elRefs[index]} item key={index} xs={6}>
                //      <PlaceDetails
                //        place={res}
                //        selected={false}
                //        refProp={elRefs[index]}
                //      ></PlaceDetails>
                //    </Grid>
                //  </Grid>
              ))}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Form onSubmit={submit}>

        <div className={cx(styles.topDiv, "shadow-sm d-flex flex-column gap-4 w-50 m-auto text-center align-items-center justify-content-center p-5 rounded-5 my-5")} style={{ "backgroundColor": "#F7F7F7", "border": `5px solid ${themeColors.freshBlue}` }}>

          <div className="d-flex flex-column">
            <Form.Label className="display-6 fw-bold" style={{ "color": themeColors.darkerBlue }}><i className="fa-solid fa-1"></i>. Where do you wish to Travel <i className="fa-solid fa-earth-americas"></i></Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              placeholder="Enter City Location"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="d-flex align-items-center justify-content-center flex-column gap-3">
            <div className="d-flex justify-content-center align-items-center gap-2">

              <Form.Label className="fs-5 text-wrap w-100">
                Check In:
              </Form.Label>
              <Form.Control
                type="date"
                id="sdate"
                name="sdate"
                value={sDate}
                onChange={(event) => setSDate(event.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">

              <Form.Label className="fs-5 text-nowrap">
                Check out:
              </Form.Label>
              <Form.Control
                type="date"
                id="edate"
                name="edate"
                value={eDate}
                onChange={(event) => setEDate(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="text-center mb-3 mt-0">
        <i className="fa-solid fa-arrow-down fa-2xl text-center"></i>
        </div>
        {/*{selected_place_list.length > 0 &&
          selected_place_list.map((obj, ind) => {
            return obj;
          })}*/}

        <div className={cx(styles.bottomDiv, "shadow mt-5 text-center w-50 mx-auto rounded-5 d-flex flex-column align-items-center justify-content-center p-5 pb-2")} style={{ "backgroundColor": themeColors.freshGreen, "color": themeColors.greyBlack }}>
          <h1 className="p-3 fw-bold">
            <i className="fa-solid fa-2"></i>. Customize Your Travel...<i className="fa-solid fa-feather"></i>
          </h1>
          {selected_place_list.length > 0 &&
            selected_place_list.map((obj, ind) => {
              return obj;
            })}
          <div className="w-100 p-2">
            <Button
              variant="dark"
              className="w-100 rounded-5 rounded-top"
              onClick={(e) => {
                set_selected_place((ob) => [...ob, []]);
                addNewDay(count);
                setCount((prev) => prev + 1);
              }}
            >
              +
            </Button>
          </div>
        </div>
        <div className="text-center my-3 mt-5">
        <i className="fa-solid fa-arrow-down fa-2xl text-center"></i>
        </div>


        {/* {console.log(selected_place?.length > 1)} */}
        <div className={cx(styles.iteDiv, "shadow-sm my-5 w-50 mx-auto border border-3 border-dark rounded-5 p-3 ")} style={{ "backgroundColor": "#C4DAE8", }}>
          {console.log(selected_place)}

          <h1 className="fw-bold text-center mb-4 p-3"><i class="fa-solid fa-3"></i>. My Final Internary <i className="fa-solid fa-champagne-glasses"></i></h1>
          <div className="px-5">
            <Table striped bordered hover className="table-dark">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {selected_place.map((obj, ind) => {
                  return (
                    <>
                      {obj.map((obj1, indd) => {
                        return (
                          <tr key={indd}>
                            <td>{(ind + 1) * (indd + 1) === (ind + 1) && `Day ${ind + 1}`}</td>
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
          </div>
          <div className="w-100 px-5">
            <Button className="w-100 btn-dark" type="submit">Save</Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Itenary;
