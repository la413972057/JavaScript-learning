/**
 * Created with JetBrains WebStorm.
 * User: illuSioN4ng
 * Date: 2017/2/23
 * Description:
 */
const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!');
};

const server = http.createServer(requestHandler);

server.listen(port, '127.0.0.1', (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});