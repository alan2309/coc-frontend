import React, { useEffect, useState, createRef } from "react";
import { Button, Col, Form, Modal, Row, FormSelect } from "react-bootstrap";
import { getPlacesData } from "../../tripMatch";
import { useParams } from "react-router";
import PlaceDetails from "./PlaceDetails";
import axiosInstance from "../../../axiosInstance";

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

  useEffect(() => {
    const refs = Array(placeData?.length)
      .fill()
      .map((_, index) => elRefs[index] || createRef());
    setElRefs(refs);
    return () => {};
  }, [placeData]);

  useEffect(() => {
    console.log(lat, lng);
    setCoordinates({ lat: lat, lng: lng });
    addNewDay(1);

    return () => {};
  }, []);

  function addNewDay(dayNumber) {
    setBool(false);
    console.log(dayNumber);
    let le = (
      <div>
        <Row>
          <Col>
            <p>----/ Day {dayNumber}</p>
          </Col>
          <Col>
            <Button
              onClick={(e) => {
                handleShow(e, dayNumber);
                setCurrentDay(dayNumber);
              }}
            >
              Add place to visit
            </Button>
          </Col>
        </Row>
      </div>
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
          <Modal.Title>Modal heading</Modal.Title>
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
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="date"
          id="sdate"
          name="sdate"
          value={sDate}
          onChange={(event) => setSDate(event.target.value)}
        />
        <input
          type="date"
          id="edate"
          name="edate"
          value={eDate}
          onChange={(event) => setEDate(event.target.value)}
        />

        {/*{selected_place_list.length > 0 &&
          selected_place_list.map((obj, ind) => {
            return obj;
          })}*/}
        {selected_place_list.length > 0 &&
          selected_place_list.map((obj, ind) => {
            return obj;
          })}

        <Button
          onClick={(e) => {
            set_selected_place((ob) => [...ob, []]);
            addNewDay(count);
            setCount((prev) => prev + 1);
          }}
        >
          +
        </Button>
        <hr />
        {console.log(selected_place?.length > 1)}
        {selected_place.map((obj, ind) => {
          return (
            <>
              Day {ind + 1}
              {obj.map((obj1, indd) => {
                return (
                  <>
                    <p>{obj1.name} </p>
                  </>
                );
              })}
            </>
          );
        })}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Itenary;
