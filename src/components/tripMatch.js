import axios from 'axios';

export const getPlacesData = async (type, lat, long) => {

    try {
        const {
            data: { data },
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
            {
                url: URL,
                params: {
                    latitude: lat,
                    longitude: long,
                    radius: 10
                },
                headers: {
                    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                    'x-rapidapi-key': '490a52081fmsh71aa93debb4ece1p1afc87jsn929be137e396',
                },
            }
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};