const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req,res) => {
    const path = req.url;
    const fsCallback = (err,data) => {
        if(err) throw err;

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(data)
    }

    switch(path) {
        case '/first':
            fs.readFile(__dirname + '/index.html', fsCallback)
        break;
        case '/second':
            fs.readFile(__dirname + '/index2.html', fsCallback)
        break;
        default:
            fs.readFile(__dirname + '/index.html', fsCallback)
        break;
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})