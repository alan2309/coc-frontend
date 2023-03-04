import React, { useEffect, useState } from 'react'
import { getPlacesData } from './tripMatch';

import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from '@material-ui/core';
function MapData() {

    const [coordinates, setCoordinates] = useState({});
    const [type, setType] = useState('restaurants');
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoordinates({ lat: latitude, lng: longitude });
            },
            (error) => {
                alert(
                    'Please turn on your location access and refresh the page to continue.'
                );
            }
        );
    }, []);

    useEffect(() => {
        console.log(coordinates.lat)
        console.log(coordinates.lng)
        getPlacesData(type, coordinates.lat, coordinates.lng).then((data) => {
            console.log(data)
        });
    }
        , [type, coordinates.lat, coordinates.lng]);


    return (

        <>
            <FormControl >
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>

        </>
    )
}

export default MapData