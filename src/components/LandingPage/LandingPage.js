import React, { useState, useEffect, useContext } from "react";
import BrandNavbar from "../common/BrandNavbar";
import { Button, Container, Form } from "react-bootstrap";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import cx from "classnames";
import styles from "./LandingPage.module.css"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import axiosInstance from "../../axiosInstance";
import { Navigate, useNavigate } from "react-router";
import Banner from "./Banner";
import LandingCards from "./LandingCards";
import { AppBinderContext } from "../../AppBinderContext";

const LandingPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC_2ABFZTAwaDLCgP5DKpNM_xrCJvX66Nc",
    libraries: ["places"],
  });
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [colors] = useContext(AppBinderContext);

  useEffect(() => {
    return () => { };
  }, []);


  const startTrip = () => {
    // console.log(selected)
    navigate(`home/${selected.lat}/${selected.lng}`)
  }

  if (!isLoaded) return <div>Loading...</div>;


  const PlacesAutocomplete = ({ setSelected }) => {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();

      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setSelected({ lat, lng });
    };

    return (
      <Combobox onSelect={handleSelect} className="position-relative">
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          className="combobox-input form-control rounded-5 p-3 ps-5 shadow shadow-lg"
          placeholder="Where are you travelling to?"
        />
        <i className={cx(styles.searchIcon, "fa-solid fa-magnifying-glass position-absolute fa-lg")} />
        <Button onClick={startTrip} className={cx(styles.startTripBtn, "rounded-5")} style={{ "backgroundColor": colors.greyBlack }}>Start trip</Button>
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    );
  };

  return (
    <>
      <BrandNavbar />

      <Banner />
      {/* Search Section */}
      <div>
        <Container className={cx(styles.searchContainer, "text-center")}>
          <Form.Label htmlFor="locSearch" className="display-4 fw-bold">Find A Travel Buddy..</Form.Label>
          <PlacesAutocomplete setSelected={setSelected} />
          <Form.Text id="LocationSearch" muted className="fw-bold fs-5" style={{ color: 'black' }}>
            Travelers From 190+ Countries Have Started Over 25000 Trips
          </Form.Text>
        </Container>
      </div>

      <LandingCards />
    </>
  );
};

export default LandingPage;
