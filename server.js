const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Node Server");
})

server.listen(process.env.PORT || 3000);