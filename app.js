const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req,res) => {
    const path = req.url;
    const fsCallback = (err,data) => {
        if(err) {
            res.end("We couldn't find your page :(")
        };

        res.end(data)
    }

    fs.readFile(__dirname + path, fsCallback)
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})