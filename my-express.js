const http = require('http');

 class Express {
    
    constructor () {
        console.log('constructor')
        this.server = http.createServer((request, response) => {
            console.log('server create');
            response.write('Listen port')
            response.end()
        });

    }

    get(path, callback) {

    }

    post(path, callback) {

    }

    listen(port) {

        if (typeof port == 'number') {
            console.log(port)
            this.server.listen(port);
        } else {
            console.log(`Excepted nuber port like 4200, received ${port}\n`)
        }
        
    }

    
}
function express(){
    return new Express()
}

module.exports = express
