const httpServer = require('http')

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end("Hello World")
}

const port = process.env.PORT || 3000;
const server = httpServer.createServer(requestListener);
server.listen(port, function () {
    console.log('Server listening on port ' + port);
});
