const http = require('http');

class Express {

    constructor() {
        this.routage = []
        console.log('constructor')
        this.server = http.createServer();

    }

    get(pathurl, callback) {

        this.server.on('request', (request, response) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });

            const find = this.routage.find(element => {
                return element.path === pathurl;
            });

            if (request.url === pathurl && request.method === 'GET') {
                callback(request, response);
                response.end()
            }

        })

    }

    post(path, callback) {

    }

    put(path, callback) {
      this.server.on('request', (request, response) => {
        if (path == request.url && request.method === "PUT") {

          callback(request, response);
          response.end();
        }
      });
    }

    listen(port) {

        if (typeof port == 'number') {
            this.port = port;
            this.server.listen(port);
        } else {
            console.log(`Excepted nuber port like 4200, received ${port}\n`)
        }

    }


}
function express() {
    return new Express()
}

module.exports = express
