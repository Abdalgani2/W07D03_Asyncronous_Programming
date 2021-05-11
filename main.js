const express = require("exress");
const app = express()
const fs = require("fs");
const axios = require("axios");
fs.readFile = ('/.data.txt', (err, data) => {
    if (err) { console.log('ERR') }
    console.log(data.tostring());
});
fs.writeFile(
    './data.txt',
    " A new file has been created", (err) => {
        if (err) {
            console.log('ERR');
        }
    });
const getPost = (id) => {
    const response = axios.get(
        'https://jsonplaceholder.typicode.com/id/1'
    );
    return response;
};
const getPostAsync = async (data) => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/id/1'
    );
};
const appendToFile = (data) => {
    fs.appendFile('data.txt', data)

};


