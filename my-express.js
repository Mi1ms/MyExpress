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

    delete(path, callback) {
      this.server.on('request', (request, response) => {
        if (path == request.url && request.method === "DELETE") {

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

    render(path, ...callbacks) {
      const filename = `${path}.html.mustache`;
      const clbck = callbacks.length > 1 ? callbacks[1] : callbacks[0];
      const data = typeof callbacks[0] === "object" ? callbacks[0] : null;

      fs.access(`${filename}`, fs.constants.F_OK, (err) => {
        const file_exist = err ? false : true;

        // check if file exist
        let body = '';
        if (file_exist) {
          const rstream = fs.createReadStream('./'+filename);

          rstream.on('data', chunck => {
            let parse = chunck.toString();

            if (data !== null) {
              let mustache_data = parse.match(/{{.*}}/gm);
              let replace_mustache = '';

              mustache_data.map(mustache => {
                let display_data;
                const matching = mustache.match(/([a-z0-9]+)/gi)
                let variable = matching[0].trim();
                let replace_mustache = data[variable] ? data[variable] : '';

                // if find options |
                if (mustache.includes('|') && replace_mustache !== '') {

                  switch (matching[1]) {
                    case 'upper':
                      replace_mustache = replace_mustache.toUpperCase();
                      break;

                    case 'lower':
                      replace_mustache = replace_mustache.toLowerCase();
                      break;

                    case 'fixed':
                      if (typeof replace_mustache == 'number') {
                        replace_mustache = Number.parseFloat(replace_mustache).toFixed(matching[2])
                      }
                      break;
                    default:

                  }
                }
                const html = parse.replace(mustache, replace_mustache);
                parse = html;
              });
              body += parse;
            }
          });

          rstream.on('end', () => {
            clbck(err, body);
          });
        } else {
          clbck(err, body);
        }
      });

    }

}
function express() {
    return new Express()
}

module.exports = express
