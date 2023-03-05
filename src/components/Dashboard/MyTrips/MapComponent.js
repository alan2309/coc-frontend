import React, { useRef, useEffect } from 'react'
import { Easing, Tween, update } from "@tweenjs/tween.js";


function MapComponent({ center = { lat: 19.0760, lng: 72.8777 }, zoom = 14 }) {
    const ref = useRef();
    const cameraOptions = {
        tilt: 0,
        heading: 0,
        zoom: 13,
        center: { lat: 19.0760, lng: 72.8777 },
    };

    useEffect(() => {
        const styledMapType = new window.google.maps.StyledMapType(
            [
                {
                    featureType: "poi.business",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "transit",
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }],
                },
                { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                { elementType: "labels.icon", stylers: [{ visibility: "off" }] },

                {
                    featureType: "administrative.locality",
                    elementType: "labels.text.fill",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{ color: "#263c3f" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#6b9a76" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{ color: "#38414e" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#212a37" }],
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#9ca5b3" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{ color: "#746855" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#1f2835" }],
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#f3d19c" }],
                },
                {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{ color: "#2f3948" }],
                },
                {
                    featureType: "transit.station",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#d59563" }],
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#17263c" }],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#515c6d" }],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#17263c" }],
                },
            ],
            { name: "Styled Map" }
        );
        const map = new window.google.maps.Map(ref.current, {
            center,
            zoom,
            // mapTypeControlOptions: {
            // mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
            // },
            ...cameraOptions,
            mapTypeControl: false,
            // zoomControl: false,
            streetViewControl: false,
            // disableDefaultUI: true,
        });
        map.mapTypes.set("styled_map", styledMapType);
        map.setMapTypeId("styled_map");
        const marker = new window.google.maps.Marker({
            position: { lat: 19.0760, lng: 72.8777 },
            animation: window.google.maps.Animation.DROP,
            map: map,
        });


        const infowindow = new window.google.maps.InfoWindow({
            content: "<p>Marker Location:" + marker.getPosition() + "</p>",
        });
        window.google.maps.event.addListener(marker, "click", () => {
            infowindow.open(map, marker);
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(window.google.maps.Animation.BOUNCE);
            }
        });
        new Tween(cameraOptions) // Create a new tween that modifies 'cameraOptions'.
            .to({ zoom: 15 }, 3000) // Move to destination in 15 second.
            .easing(Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
            .onUpdate(() => {
                map.moveCamera(cameraOptions);
            })
            .start(); // Start the tween immediately.

        // Setup the animation loop.
        function animate(time) {
            requestAnimationFrame(animate);
            update(time);
        }

        requestAnimationFrame(animate);
    });
    // useEffect(() => {
    //     const styledMapType = new window.google.maps.StyledMapType(
    //         [
    //             {
    //                 featureType: "poi.business",
    //                 stylers: [{ visibility: "off" }],
    //             },
    //             {
    //                 featureType: "transit",
    //                 elementType: "labels.icon",
    //                 stylers: [{ visibility: "off" }],
    //             },
    //             { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    //             { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    //             { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    //             { elementType: "labels.icon", stylers: [{ visibility: "off" }] },

    //             {
    //                 featureType: "administrative.locality",
    //                 elementType: "labels.text.fill",
    //                 stylers: [{  visibility: "off" }],
    //             },
    //             {
    //                 featureType: "poi",
    //                 elementType: "labels.text.fill",
    //                 stylers: [{ color: "#d59563" }],
    //             },
    //             {
    //                 featureType: "poi.park",
    //                 elementType: "geometry",
    //                 stylers: [{ color: "#263c3f" }],
    //             },
    //             {
    //                 featureType: "poi.park",
    //                 elementType: "labels.text.fill",
    //                 stylers: [{ color: "#6b9a76" }],
    //             },
    //             {
    //                 featureType: "road",
    //                 elementType: "geometry",
    //                 stylers: [{ color: "#38414e" }],
    //             },
    //             {
    //                 featureType: "road",
    //                 elementType: "geometry.stroke",
    //                 stylers: [{ color: "#212a37" }],
    //             },
    //             {
    //                 featureType: "road",
    //                 elementType: "labels.text.fill",
    //                 stylers: [{ color: "#9ca5b3" }],
    //             },
    //             {
    //                 featureType: "road.highway",
    //                 elementType: "geometry",
    //                 stylers: [{ color: "#746855" }],
    //             },
    //             {
    //                 featureType: "road.highway",
    //                 elementType: "geometry.stroke",
    //                 stylers: [{ color: "#1f2835" }],
    //             },
    //             {
    //                 featureType: "road.highway",
    //                 elementType: "labels.text.fill",
    //                 stylers: [{ color: "#f3d19c" }],
    //             },
    //             {
    //                 featureType: "transit",
    //                 elementType: "geometry",
    //                 stylers: [{ color: "#2f3948" }],
    //             },
    //             {
    //                 featureType: "transit.station",
    //                 elementType: "labels.text.fill",
    //                 stylers: [{ color: "#d59563" }],
    //             },
    //             {
    //                 featureType: "water",
    //                 elementType: "geometry",
    //                 stylers: [{ color: "#17263c" }],
    //             },
    //             {
    //                 featureType: "water",
    //                 elementType: "labels.text.fill",
    //                 stylers: [{ color: "#515c6d" }],
    //             },
    //             {
    //                 featureType: "water",
    //                 elementType: "labels.text.stroke",
    //                 stylers: [{ color: "#17263c" }],
    //             },
    //         ],
    //         { name: "Styled Map" }
    //     );
    //     const localContextMapView = new window.google.maps.localContext.LocalContextMapView({
    //         element: ref.current,
    //         placeTypePreferences: [
    //             { type: "bakery", weight: 1 },
    //             { type: "park", weight: 2 },
    //             { type: "restaurant", weight: 3 },
    //             { type: "shopping_mall", weight: 1 },
    //             { type: "tourist_attraction", weight: 3 },
    //         ],

    //         maxPlaceCount: 20,

    //     });

    //     const map = localContextMapView.map;
    //     map.setOptions({
    //         center: { lat: 51.507307, lng: -0.08114 },
    //         zoom: 14,
    //         mapTypeControl: false,
    //         // zoomControl: false,
    //         streetViewControl: false,
    //         // disableDefaultUI: true,

    //     });

    //     // const map = new window.google.maps.Map(ref.current, {
    //     //     center,
    //     //     zoom,
    //     //     // mapTypeControlOptions: {
    //     //     // mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
    //     //     // },
    //     //     mapTypeControl: false,
    //     //     ...cameraOptions,
    //     // });
    //     localContextMapView.addListener('placedetailsviewshowstart', event => {
    //         console.log("The 'placedetailsviewshowstart' event just fired!");
    //         console.log(event)
    //     });

    //     localContextMapView.addListener('placedetailsviewhidestart', event => {
    //         console.log("The 'placedetailsviewhidestart' event just fired!");
    //         console.log(event)
    //     });


    //     //Associate the styled map with the MapTypeId and set it to display.
    //     map.mapTypes.set("styled_map", styledMapType);
    //     map.setMapTypeId("styled_map");
    //     const marker = new window.google.maps.Marker({
    //         // The below line is equivalent to writing:
    //         // position: new google.maps.LatLng(-34.397, 150.644)
    //         position: { lat: 19.0760, lng: 72.8777 },
    //         animation: window.google.maps.Animation.DROP,
    //         map: map,

    //     });

    //     // You can use a LatLng literal in place of a google.maps.LatLng object when
    //     // creating the Marker object. Once the Marker object is instantiated, its
    //     // position will be available as a google.maps.LatLng object. In this case,
    //     // we retrieve the marker's position using the
    //     // google.maps.LatLng.getPosition() method.
    //     const infowindow = new window.google.maps.InfoWindow({
    //         content: "<p>Marker Location:" + marker.getPosition() + "</p>",
    //     });
    //     window.google.maps.event.addListener(marker, "click", () => {
    //         infowindow.open(map, marker);
    //         if (marker.getAnimation() !== null) {
    //             marker.setAnimation(null);
    //           } else {
    //             marker.setAnimation(window.google.maps.Animation.BOUNCE);
    //           }
    //     });
    //     new Tween(cameraOptions) // Create a new tween that modifies 'cameraOptions'.
    //     .to({zoom: 15 }, 3000) // Move to destination in 15 second.
    //     .easing(Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
    //     .onUpdate(() => {
    //         map.moveCamera(cameraOptions);
    //     })
    //     .start(); // Start the tween immediately.

    // // Setup the animation loop.
    // function animate(time) {
    //     requestAnimationFrame(animate);
    //     update(time);
    // }

    // requestAnimationFrame(animate);
    // });
    return <div style={{ height: '90vh', width: '90vw' }} ref={ref} id="map" />;
}

export default MapComponent