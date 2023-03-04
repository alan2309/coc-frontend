import React,{useState} from 'react'
import BrandNavbar from '../common/BrandNavbar'
import { Container, Form } from 'react-bootstrap'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
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

const LandingPage = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC_2ABFZTAwaDLCgP5DKpNM_xrCJvX66Nc",
        libraries: ["places"],
      });
    
      const [selected, setSelected] = useState(null);
    
    if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      {/* <BrandNavbar /> */}

      {/* Search Section */}
      <div>
    

        <Container className=''>
          <Form.Label htmlFor="locSearch">Search Your Location</Form.Label>
          {/*<Form.Control
            type="text"
            id="locSearch"
            aria-describedby="LocationSearch"
            className='rounded-5 p-2'
          />*/}
          <PlacesAutocomplete setSelected={setSelected} />
          <Form.Text id="LocationSearch" muted>
            Search for you desired location!
          </Form.Text>

        </Container>
      </div>
    </>
  )
}
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
      <Combobox  onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          className="combobox-input form-control rounded-5 p-2"
          placeholder="Search an address"
        />
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

export default LandingPage