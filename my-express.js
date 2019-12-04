const http = require('http');
const fs = require('fs');

class Express {

    constructor() {
        this.routage = []
        console.log('constructor')
        this.server = http.createServer();

    }

    get(pathurl, callback) {

        this.server.on('request', (request, response) => {
            console.log(request.url)
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

    listen(port) {

        if (typeof port == 'number') {
            this.port = port;
            this.server.listen(port);
        } else {
            console.log(`Excepted nuber port like 4200, received ${port}\n`)
        }

    }

    render(path, ...callbacks) {
      const filename = `${path}.html.mustache`;
      fs.access(`${filename}`, fs.constants.F_OK, (err) => {
        console.log(`${filename}: ${err ? 'does not exist' : 'exists'}`);
      });

    }

}
function express() {
    return new Express()
}

module.exports = express
