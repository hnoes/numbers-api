const axios = require('axios');

const favoriteNumber = '45';

// make a GET request to the Numbers API
axios.get(`http://numbersapi.com/{favoriteNumber}?json`)
    .then(response => {
        // fact about favorite number
        console.log('My basketball jersey number:', response.data.text);
    })
    .catch(error => {
        console.error('Error:', error);
    });