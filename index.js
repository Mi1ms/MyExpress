const express = require('./my-express')
const app = express()
app.listen(2222)



app.get('', (req,res) =>{

res.write('premier post' ,res);

})

app.post('/post', (req,res) =>{


})
