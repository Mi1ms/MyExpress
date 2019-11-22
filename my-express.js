const http = require('http');

class Express {
    
    constructor () {
        console.log('constructor')
        this.server = http.createServer((request, response) => {
            console.log('server create');
            response.write('Listen port')
            response.end();
        });
        this.listen();
    }

    get(path, callback) {


    }

    post(path, callback) {

    }

    listen(port) {
        console.log(port)
        // this.server.listen(port)
        if (typeof port == 'number') {
            this.server.listen(port);
        }
        
    }

    
}

function express (){
     return new Express;
}

module.exports = express