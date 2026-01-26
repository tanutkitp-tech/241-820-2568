const http = require('http');
const host = 'localhost';
const port = 8000;

const requireListeners = (req, res) => {
    res.writeHead(200);
    res.end('My First Server!');}

    //run
    const server = http.createServer(requireListeners);
    server.listen(port, host, () => {
        console.log(`Server is running at http://${host}:${port}`);
    })