import axios from 'axios'
let URL = 'http://localhost:3003/'
if (process.env.NODE_ENV !== 'development') {
    URL = ''
}

function getFlats() {
    return axios
        .get(URL + 'data/flat')
        .then(res => res.data)
        .catch(e => {
            throw e;
        });
}

function getFlatById(id) {
    return axios 
        .get(URL + `data/flat/${id}`)
        .then(res => res.data)
        .catch(e => {
            throw e
        });
}

export default {
    getFlats,
    getFlatById
}
