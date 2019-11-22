const http = require('http');

 class Express {
    
    constructor () {
        console.log('constructor')
        this.server = http.createServer(
        /*(request, response) => {
            console.log('server create');
            console.log(request);
            response.write('Listen port')
            response.end()
        }*/);
    }

    get(path, callback) {

    }

    post(path, callback) {

    	this.server.on('request', (req, res) =>{
    		console.log(req)
    	})

    	const data = JSON.stringify({
    		todo : 'données a envoyer',
    		name : 'envoyer',
    		data : 'données'
    	})

    	const opt = {
    	  hostname: 'localhost',
		  port: 2222,
		  path: this.path,
		  method: 'POST',

		  headers: {

		    'Content-Type': 'application/json',
		    'Content-Length': data.length
 		 	}
    	}

    	const req = http.request(opt, (res)=>{
    		console.log(`statusCode: ${res.statusCode}`)


	    		res.on('data', (d)=>{
	    		process.stdout.write(d)
	    	})

    	})


		req.on('error', error => {
		  console.error(`liste d'erreur" ${error}`)
		})

		req.write(data)
		req.end()

		return callback(this.serve)

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