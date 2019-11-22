const express = require('./my-express')
const app = express()
app.listen(2222)



app.post('/post', (req,res, next) =>{

	

/*res.send('premier post' ,res)
next();*/

})
