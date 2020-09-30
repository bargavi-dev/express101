
const http = require('http');
const express = require('express');
const data = require('./data')

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>')
})

app.get('/friends', (req, res) => {
    let friends = ''
    for (let data= 0; data< array.length; index++) {
        const friend = data[index];
 
 res.send(`
     <ul>
         <li>Finely</li>
         <li>Skyler</li>
         <li>Lennon</li>
         <li>Charlie</li>
     </ul> 

`)   
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});