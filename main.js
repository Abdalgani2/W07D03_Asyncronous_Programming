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
        `https://jsonplaceholder.typicode.com/${id}/1`
    );
    return response;
};
const getPostAsync = async (data) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${data}/1`
    );
};
const appendToFile = (data) => {
    fs.appendFile('message.txt', data, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });
};
const copyFile = (fileName) => {
    fs.copyFile('data.txt', fileName)
};
const post = JSON.stringify({
    title: "JavaScript Basics",
    body: "This post contains information about javaScript ",

    userId: 1,
});

const createPost = (user) => {
    const response = axios.get('https://jsonplaceholder.typicode.com/posts')
    return response;
    app.post("/create/user",(req,res)=>{
        
    })
};

