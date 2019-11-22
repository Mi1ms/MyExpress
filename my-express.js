const http = require('http');

const myExpress = class Express {
    
    constructor () {
        console.log('constructor')
        this.server = http.createServer((request, response) => {
            console.log('server create');
            response.write('Listen port')
        });
        this.listen();
    }

    get(path, callback) {

    }

    post(path, callback) {

    }

    listen(port = 4545) {
        console.log(port)
        // this.server.listen(port)
        if (typeof port == 'number') {
            this.server.listen(port);
        }
        
    }

    
}

module.exports = {
    myExpress,
}