const axios     = require('axios').default;
const baseUrl   = 'https://one-search-finder.herokuapp.com';
// const baseUrl   = 'http://localhost:3000';
const config    = { responseType: 'json', headers: {'Content-Type': 'application/json' } };

export default {
    post: async (endpoint = '', params) => await axios.post(baseUrl + endpoint, { params }, config)
}