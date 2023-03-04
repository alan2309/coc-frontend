import React, { useEffect, useState } from "react";
import { Form, FormSelect } from "react-bootstrap";
import { getPlacesData } from "./tripMatch";

function MapData() {
  const [coordinates, setCoordinates] = useState({});
  const [type, setType] = useState("restaurants");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      },
      (error) => {
        alert(
          "Please turn on your location access and refresh the page to continue."
        );
      }
    );
  }, []);

  useEffect(() => {
    console.log(coordinates.lat);
    console.log(coordinates.lng);
    getPlacesData(type, coordinates.lat, coordinates.lng).then((data) => {
      console.log(data);
    });
  }, [type, coordinates.lat, coordinates.lng]);

  return (
    <>
      <Form>
        <Form.Label>Type</Form.Label>
        <FormSelect value={type} onChange={(e) => setType(e.target.value)}>
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </FormSelect>
      </Form>
    </>
  );
}

export default MapData;
