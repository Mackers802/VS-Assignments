// axios url/* 
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

const axios = require("axios");

axios.get('https://swapi.co/api/people/1').then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error)
  });