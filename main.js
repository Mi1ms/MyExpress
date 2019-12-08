const express = require('./my-express')
const app = express()
app.listen(4040)


app.render('home', {name: 'Fona', text: 'i will crash you with my hammer !', age: 23.05976}, (err, html) => {
  // console.log(err, html);
});
