const express = require('./my-express')
const app = express()
app.listen(2222)

app.get('', (req,res) =>{
res.write('premier post' ,res);
console.log('<h4>here in firt page </h4>')
	res.write('<h1>firt page </h1>')
})

app.get('/data', function(req, res) {
    console.log('<h4>here in call /hello</h4>')
    // console.log("req idx: ", res);
    res.write('<h1>page data</h1>')

});

app.post('/post', (req,res) =>{
	
})


app.render('home', {name: 'Fona', text: 'i will crash you with my hammer !', age: 23.05976}, (err, html) => {
  // console.log(err, html);
});


