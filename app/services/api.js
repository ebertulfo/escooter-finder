import axios from 'axios';

const host = 'http://localhost:8000'

export const getScooters = async ({lat, lng, numberOfScooters, radius}) => {
    return await axios.get(`${host}/beam/search`, {
        params: {
            lat,
            lng,
            numberOfScooters,
            radius
        }
    });
}