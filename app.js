const net = require('net');
const fs = require('fs');
const port = 8080;
const host = '127.0.0.1';



let server = net.createServer(onClientConnection);
server.listen(port,host, () => {
    console.log('Wating for a connection')
})

function onClientConnection(socket) {
    socket.on('data', (data) => {
        let URI = data.toString().split(' ')[1];

        const fsCallback = (err,data) => {
            if(err){
                socket.end("err")
            }
            socket.end(data)
        }
        fs.readFile(__dirname+URI, fsCallback)
    })
}