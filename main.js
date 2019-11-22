const express = require('./my-express')
const app = express()
app.listen(4040)

app.get('/', function(req, res) {
    // console.log('here in call /')
    // console.log("req idx: ", res);
    res.write('<h1>Hell0</h1>')

});

app.get('/hello', function(req, res) {
    console.log('<h4>here in call /hello</h4>')
     res.write('<b>Hello again...</b>')
});
